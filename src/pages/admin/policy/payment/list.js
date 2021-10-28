import React from 'react';

// Layout
import EditPolicyLayout from '../layout/editLayout';


// Components
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import PaymentCreateModal from './new';
import PaymentEditModal from './edit';
import PaymentDeleteModal from './delete';


const PolicyPaymentPage = () => {

    return (
        <EditPolicyLayout >
            <div className="d-flex justify-content-between align-items-center">
                <span> </span>
                <button 
                    className="btn btn-sm btn-primary"
                    data-bs-toggle="modal" 
                    data-bs-target="#modalCreatePayment"
                >
                    Crear pago
                </button>
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
                                        <li>
                                            <button
                                                to="#"
                                                className="dropdown-item text-danger"
                                                data-bs-toggle="modal" 
                                                data-bs-target="#modalDeletePayment"
                                            >
                                                Eliminar pago
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <PaymentCreateModal id="modalCreatePayment" />
            <PaymentEditModal id="modalEditPayment" />
            <PaymentDeleteModal id="modalDeletePayment" />
        </EditPolicyLayout>
    )
}

export default PolicyPaymentPage;