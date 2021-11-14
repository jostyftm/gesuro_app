import React, { useEffect, useState } from 'react';

// Components
import Panel from 'components/Panel';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';
import ServiceCreateModal from './new';
import ServiceEditModal from './edit';
import ServiceDeleteModal from './delete';

// Service
import { allServices } from 'services/serviceService';
import { cathErrors } from 'utils/errors';
import Moment from 'react-moment';
import Spinner from 'components/Spiner';

const ServiceListPage = () => {

    const [services, setServices] = useState([]);
    const [links, setLinks] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [serviceSelected, setServiceSelected] = useState({});

    const fetchServices = async() => {

        try{
            setIsLoading(true)
            const response = await allServices();
            setServices(response.data.data);
            setLinks(response.data.links)
        }catch(err){
            cathErrors(err);
        }
        
        setIsLoading(false)
    }

    useEffect(() => {

        fetchServices();

        return () => {
            setServices([])
            setLinks([])
            setServiceSelected({})
        }
    }, [])
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
                                <th>Nombre</th>
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
                                    <td>{service.category.name || ''}</td>
                                    <td>
                                        <Moment format="LLL">
                                            {service.created_at}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="LLL">
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
                                                    <button
                                                        className="dropdown-item"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalEditService"
                                                        onClick={() => {setServiceSelected(service)}}
                                                    >
                                                        Editar servicio
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item text-danger"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalDeleteService"
                                                        onClick={() => {setServiceSelected(service)}}
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
            <ServiceCreateModal 
                id="modalCreateService" 
                onCreate={(result) => {if(result) fetchServices()}}
            />
            <ServiceEditModal 
                id="modalEditService" 
                service={serviceSelected}
                onUpdate={(result) => {if(result) fetchServices()}}
            />
            <ServiceDeleteModal 
                id="modalDeleteService" 
                service={serviceSelected}
                onDelete={(result) => {if(result) fetchServices()}}
            />
        </DashboardLayout>
    );
}

export default ServiceListPage;