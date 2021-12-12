import React, { useEffect, useState } from 'react';

// Components
import Panel from 'components/Panel';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';
import MyServiceCreateModal from './new';
import MyServiceDeleteModal from './delete';

import { DASHBOARD_MY_SERVICES_EDIT_ROUTE } from 'constants/routes';
import { Link } from 'react-router-dom';
import { allServiceCategory } from 'services/serviceCategoryService';
import { cathErrors } from 'utils/errors';
import useAuth from 'hooks/UseAuth';
import { allServiceByCompany } from 'services/companyServicesService';
import Spinner from 'components/Spiner';
import Moment from 'react-moment';

// Constants


const MyServiceListPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [services, setservices] = useState([]);
    const [serviceSelected, setServiceSelected] = useState('');
    
    const {companyId} = useAuth();

    const fetchServices = async () => {
        
        setIsLoading(true);
        try{
            const responseService = await allServiceByCompany(companyId);
            setservices(responseService.data)
        }catch(err){
            cathErrors(err)
        }
        setIsLoading(false);
    }
    
    useEffect(()=>{

        fetchServices();

        return () => {
            setservices([])
        }
    },[])

    return (
        <DashboardLayout>
            <Panel>
                <div className="d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-sm btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCreateService"
                        >
                            Nuevo servicio
                        </button>
                    </div>
                    <div className="input-group mb-3 w-25">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="seguro..." 
                            aria-label="seguro..." 
                            aria-describedby="button-addon2" 
                        />
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                        >
                            Buscar
                        </button>
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Servicio</th>
                                <th>Categoria</th>
                                <th>Fecha de creacion</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (
                                <tr>
                                    <td colSpan="5">
                                        <Spinner color="primary" />
                                    </td>
                                </tr>
                            )}
                            {services && services.map((service, index) =>(
                                <tr
                                    key={index}
                                >
                                    <td>{service.name}</td>
                                    <td>{service.service.category.name || ''}</td>
                                    <td>
                                        <Moment format="LL">
                                            {service.created_at}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="LL">
                                            {service.updated_at}
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
                                                        className="dropdown-item"
                                                        to={DASHBOARD_MY_SERVICES_EDIT_ROUTE(service.id)}
                                                    >
                                                        Editar servicio
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item text-danger"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalDeleteService"
                                                        onClick={() => {setServiceSelected(service.id)}}
                                                    >
                                                        Eliminar servicio
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Panel>
            <MyServiceCreateModal 
                id="modalCreateService" 
                onCreate={(result) => {if(result){fetchServices()}}}
            />
            <MyServiceDeleteModal 
                id="modalDeleteService" 
                service={serviceSelected}
                onDelete={(result) => {if(result){fetchServices()}}}
            />
        </DashboardLayout>
    );
}

export default MyServiceListPage;