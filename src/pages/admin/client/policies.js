import React from 'react';

// Layout
import ClientEditLayout from './layout/editLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisH, 
    faInfoCircle 
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

// Constants


const ClientPolicyPage = () => {

    return (
        <ClientEditLayout>
            <div 
                className="alert alert-primary d-flex align-items-center" 
                role="alert">
                <FontAwesomeIcon 
                    icon={faInfoCircle} 
                    size="1x" 
                    className="me-2" 
                />
                <div>
                    Esta información se le mostrará a los usuarios que posean el rol de <b>cliente</b>. 
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Cliente</th>
                            <th>Servicio</th>
                            <th>Valor</th>
                            <th>Estado</th>
                            <th>Fecha de creacion</th>
                            <th>Fecha de actualización</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Joe Stwart</td>
                            <td>Seguro</td>
                            <td>$ 350.000</td>
                            <td>Activo</td>
                            <td>hoy</td>
                            <td>hoy </td>
                            <td>
                                <div className="dropdown">
                                    <button
                                        className="btn btn-sm rounded-pill btn-primary"
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                        type="button"
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
                                                to="#"
                                                className="dropdown-item"
                                            >
                                                Ver poliza
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ClientEditLayout>
    );
}

export default ClientPolicyPage;