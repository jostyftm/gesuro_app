import React from 'react';

// Layout
import PolicyEditLayout from 'layouts/PolicyEditLayout';
import { Link } from 'react-router-dom';

// Components

import {
    POLICY as POLICY_ROUTE
} from 'constants/routes';
const PolicyPayment = () => {

    const tabs = [
        {
            title: 'Información de la poliza',
            to: `${POLICY_ROUTE}/1/edit`,
            disabled:false,
        },
        {
            title: 'Pagos',
            to: `${POLICY_ROUTE}/1/payments`,
            disabled:false,
        }
    ];

    return (
        <PolicyEditLayout tabs={tabs} title='Editar poliza'>
            <div className="d-flex justify-content-between align-items-center">
                <span> </span>
                <Link 
                    className="btn btn-sm btn-primary"
                    to='#'
                >
                    Crear pago
                </Link>
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
                                <div className="btn-group">
                                    <button 
                                        type="button" 
                                        className="btn btn-primary dropdown-toggle" 
                                        data-bs-toggle="dropdown" 
                                        aria-expanded="false"
                                    >
                                        Acción
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" to="#">Opcion 1</Link></li>
                                        <li><Link className="dropdown-item" to="#">Opcion 2</Link></li>
                                        <li><Link className="dropdown-item" to="#">Opcion 3</Link></li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </PolicyEditLayout>
    )
}

export default PolicyPayment;