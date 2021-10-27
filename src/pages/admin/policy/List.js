import React from 'react';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Panel from 'components/Panel';
import { Link } from 'react-router-dom';
import { 
    DASHBOARD_POLICY_EDIT_ROUTE, DASHBOARD_POLICY_NEW
} from 'constants/routes';
import PolicyDeleteModal from './delete';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Constants


const PolicyListPage = () => {
    return (
        <DashboardLayout title="Crear poliza">
            <Panel>
                <div className="d-flex justify-content-between align-items-center">
                    <Link 
                        className="btn btn-sm btn-primary"
                        to={DASHBOARD_POLICY_NEW}
                    >
                        Crear poliza
                    </Link>
                </div>
                <div className="d-flex justify-content-between">
                    <div></div>
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
                                <th>Identificación</th>
                                <th>Servicio</th>
                                <th>Valor</th>
                                <th>Fecha creacion</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joe Stwart Valecia</td>
                                <td>C.C - 11112233</td>
                                <td>Medicina prepagada</td>
                                <td>$ 150.000</td>
                                <td>Hoy</td>
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
                                                    to={DASHBOARD_POLICY_EDIT_ROUTE(1)}
                                                    className="dropdown-item"
                                                >
                                                    Ver poliza
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    to="#"
                                                    className="dropdown-item text-danger"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalDeletePolicy"
                                                >
                                                    Eliminar poliza
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
            <PolicyDeleteModal id="modalDeletePolicy" />
        </DashboardLayout>
    );
}

export default PolicyListPage;