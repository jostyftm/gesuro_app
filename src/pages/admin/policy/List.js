import React from 'react';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Panel from 'components/Panel';
import { Link } from 'react-router-dom';

// Constants
import {
    POLICY as POLICY_ROUTE
} from 'constants/routes';

const PolicyList = () => {
    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Polizas</h1>
                <Link 
                    className="btn btn-sm btn-primary"
                    to={`${POLICY_ROUTE}/new`}
                >
                    Crear poliza
                </Link>
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
            </Panel>
        </DashboardLayout>
    );
}

export default PolicyList;