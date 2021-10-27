import React from 'react';

// Components
import Panel from 'components/Panel';
import { faEllipsisH, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';
import MyServiceCreateModal from './new';
import MyServiceDeleteModal from './delete';

import { DASHBOARD_MY_SERVICES_EDIT_ROUTE } from 'constants/routes';
import { Link } from 'react-router-dom';

// Constants


const MyServiceListPage = () => {

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
                            <tr>
                                <td>SOAT</td>
                                <td>Seguro</td>
                                <td>hoy</td>
                                <td>hoy </td>
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
                                                    to={DASHBOARD_MY_SERVICES_EDIT_ROUTE(1)}
                                                >
                                                    Editar servicio
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalDeleteService"
                                                >
                                                    Eliminar servicio
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Panel>
            <MyServiceCreateModal id="modalCreateService" />
            <MyServiceDeleteModal id="modalDeleteService" />
        </DashboardLayout>
    );
}

export default MyServiceListPage;