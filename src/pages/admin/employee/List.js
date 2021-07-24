import React from 'react';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';

// Components
import Panel from 'components/Panel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

import {
    USER    as USER_ROUTE
} from 'constants/routes'

const EmployeeList = () => {
    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Empleados</h1>
            </div>
            <Panel>
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
                                <th>Cargo</th>
                                <th>Correo electronico</th>
                                <th>Teléfono</th>
                                <th>Fecha de creación</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joe Valencia</td>
                                <td>Vendedor</td>
                                <td>jsvalencia55@misena.edu.co</td>
                                <td>3011234567</td>
                                <td>hoy</td>
                                <td>hoy </td>
                                <td>
                                    <Link
                                        className="btn btn-sm btn-outline-primary"
                                        to={`${USER_ROUTE}/1/edit`}
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Panel>
        </DashboardLayout>
    );
}

export default EmployeeList;