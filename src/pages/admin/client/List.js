import React, { useEffect, useState } from 'react';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';

// Componentes
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Panel from 'components/Panel';
import { 
    DASHBOARD_CLIENT_EDIT_ROUTE 
} from 'constants/routes';
import ClientCreateModal from './new';
import ClientDeleteModal from './delete';
import { allClients } from 'services/clientService';
import Pagination from 'components/Pagination';
import Spinner from 'components/Spiner';
import Moment from 'react-moment';

const ClientListPage = () => {

    const [clients, setClients] = useState([]);
    const [links, setLinks] = useState([]);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [clientSelected, setClientSelected] = useState(null);
    const [isLoading, setIsLoading] =   useState(false);

    const fetchClients = async() => {
        
        try{

            setIsLoading(true);
            const responseClients = await allClients({
                params:{
                    paginate:true,
                    page:currentPage,
                    q:query,
                    limit:10
                }
            });

            
            setClients(responseClients.data.data);
            setLinks(responseClients.data.links)

            setIsLoading(false)
        }catch(err){
            console.log(err)
        }
            
    }

    useEffect(()=> {

        fetchClients();

        return () => {
            setClients([])
        }
    }, [currentPage, query])
    return (
        <DashboardLayout title="Clientes">
            <Panel>
                <div className="d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-sm btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCreateClient"
                        >
                            Registrar cliente
                        </button>
                    </div>
                    <div className="input-group mb-3 w-25">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="seguro..." 
                            onChange={(e) =>{setQuery(e.target.value)}}
                        />
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Correo electronico</th>
                                <th>Identificación</th>
                                <th>Fecha de creación</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (    
                                <tr>
                                    <td colSpan="6">
                                        <Spinner color='primary' />
                                    </td>
                                </tr>
                            )}
                            {clients && clients.map((client, index) =>(
                                <tr
                                    key={index}
                                >
                                    <td>{client.user.name} {client.user.last_name}</td>
                                    <td>{client.user.email}</td>
                                    <td>{client.user.identification_number}</td>
                                    <td>
                                        <Moment format="LL">
                                            {client.user.created_at}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="LL">
                                            {client.user.updated_at}
                                        </Moment>
                                    </td>
                                    <td>
                                        <div className="dropdown">
                                            <button
                                                className="btn btn-sm rounded-pill btn-primary"
                                                data-bs-toggle="dropdown" 
                                                aria-expanded="false"
                                                type="button"
                                                id="employee"
                                            >
                                                <FontAwesomeIcon 
                                                    icon={faEllipsisH}
                                                />
                                            </button>
                                            <ul
                                                className="dropdown-menu shadow border-0 rounded"
                                            >
                                                <li>
                                                    <Link
                                                        to={DASHBOARD_CLIENT_EDIT_ROUTE(client.id)}
                                                        className="dropdown-item"
                                                    >
                                                        Ver cliente
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button
                                                        to="#"
                                                        className="dropdown-item text-danger"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalDeleteClient"
                                                        onClick={(e) => {setClientSelected(client.id)}}
                                                    >
                                                        Eliminar cliente
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <Pagination
                            links={links} 
                            handleClickPagination={
                                (e, page) => {
                                    e.preventDefault();
                                    setCurrentPage(page)
                                }
                            } 
                        />
                    </div>
                </div>
            </Panel>
            <ClientCreateModal 
                id="modalCreateClient" 
                onCreate={(result) => {
                    if(result) fetchClients();
                }}
            />
            <ClientDeleteModal 
                id="modalDeleteClient" 
                clientId={clientSelected}
                onDelete={(result) => {
                    if(result) fetchClients();
                }}
            />
        </DashboardLayout>
    );
};

export default ClientListPage;