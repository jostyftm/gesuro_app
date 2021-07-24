import Panel from 'components/Panel';
import DashboardLayout from 'layouts/DashboardLayout';
import React from 'react';
import { Link } from 'react-router-dom';

const PaymentList = () => {
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
            </Panel>
        </DashboardLayout> 
    );
}

export default PaymentList;