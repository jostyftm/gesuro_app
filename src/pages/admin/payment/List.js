import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Panel from 'components/Panel';
import DashboardLayout from 'layouts/DashboardLayout';
import React from 'react';
import { Link } from 'react-router-dom';
import PaymentEditModal from './edit';

const PaymentListPage = () => {
    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Pagos</h1>
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
                                <th># Pago</th>
                                <th>Valor a pagar</th>
                                <th>Comisión a recibir</th>
                                <th>Tipo de recaudo</th>
                                <th>Estado</th>
                                <th>Fecha limite pago</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1234</td>
                                <td>$ 300.000</td>
                                <td>$ 50.000</td>
                                <td>N/A</td>
                                <td>Pendiente</td>
                                <td>22/06/2021</td>
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
                                                    to=""
                                                    className="dropdown-item"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalEditPayment"
                                                >
                                                    Editar pago
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Panel>
            <PaymentEditModal id="modalEditPayment" />
        </DashboardLayout> 
    );
}

export default PaymentListPage;