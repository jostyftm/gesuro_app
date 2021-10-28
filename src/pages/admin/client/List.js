import React from 'react';

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


const ClientListPage = () => {
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
                                <th>Correo electronico</th>
                                <th>Identificación</th>
                                <th>Teléfono</th>
                                <th>Fecha de creación</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joe Valencia</td>
                                <td>jsvalencia55@misena.edu.co</td>
                                <td>C.C - 1111222333</td>
                                <td>3011234567</td>
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
                                                    to={DASHBOARD_CLIENT_EDIT_ROUTE(1)}
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
                                                >
                                                    Eliminar cliente
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
            <ClientCreateModal id="modalCreateClient" />
            <ClientDeleteModal id="modalDeleteClient" />
        </DashboardLayout>
    );
};

export default ClientListPage;