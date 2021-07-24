import React from 'react';

// Layout
import UserEditLayout from 'layouts/UserEditLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Constants
import {
    POLICY as POLICY_ROUTE
} from 'constants/routes';

const ClientPolicy = () => {

    return (
        <UserEditLayout>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faInfoCircle} size="1x" className="me-2" />
                <div>
                    Esta información se le mostrará a los usuarios que posean el rol de <b>cliente</b>. 
                </div>
            </div>
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Fecha de creacion</th>
                            <th>Fecha de actualización</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Seguro</td>
                            <td>a qui va la descripcripción, pero cortada..</td>
                            <td>hoy</td>
                            <td>hoy </td>
                            <td>
                                <Link
                                    className="btn btn-sm btn-outline-primary"
                                    to={`${POLICY_ROUTE}/1/edit`}
                                >
                                    <FontAwesomeIcon icon={faEye} />
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </UserEditLayout>
    );
}

export default ClientPolicy;