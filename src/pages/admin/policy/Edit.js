import React from 'react';

// Layout
import PolicyEditLayout from 'layouts/PolicyEditLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedicalAlt, faHandHoldingUsd, faIdCardAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

// Constants
import {
    POLICY as POLICY_ROUTE
} from 'constants/routes';
import { Link } from 'react-router-dom';

const PolicyEdit = () => {

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
            <div className="container">
                <form>
                    {/* Policy information */}
                    <div className="row my-5">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faFileMedicalAlt} size="2x" />
                            <h3>Información de la poliza</h3>
                            <p>
                                Rellena la información de la poliza
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Producto</label>
                                    <select className="form-select">
                                        <option>- Seleccione un producto -</option>
                                    </select>
                                </div>
                                <div className="mb-3 col">
                                    <label className="form-label">Aseguradora</label>
                                    <select className="form-select">
                                        <option>- Seleccione una aseguradora -</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Cliente</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="jhon doe"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">
                                        Objeto asegurado
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="11122233"
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label className="form-label">Vigencia</label>
                                    <select className="form-select">
                                        <option>- Seleccione una vigencia -</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Fecha de expedición</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label className="form-label">Fecha de recepción</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Fecha de inicio</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label className="form-label">Fecha de finalización</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Pirima and comissions */}
                    <div className="row my-5">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" />
                            <h3>Prima y comisiones</h3>
                            <p>
                                Rellena la información de la prima y las comisión
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Prima</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="50.000"
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label className="form-label">Otros gastos</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="0"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">% IVA</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="19%"
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label className="form-label">Valor IVA</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="9500"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">% Comision agencia</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="20%"
                                    />
                                </div>
                                <div className="mb-3 col">
                                    <label className="form-label">Valor comisión agencia</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="10.000"
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Total</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="69.500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Seller Information */}
                    <div className="row my-5">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faIdCardAlt} size="2x" />
                            <h3>Información del vendedor</h3>
                            <p>
                                Rellena la información del vendedor
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col mb-3">
                                    <label className="form-label">Empleado</label>
                                    <select className="form-select">
                                        <option>- Seleccione un empleado -</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mb-3">
                                    <label className="form-label">% Comisión empleado</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="40"
                                    />
                                </div>
                                <div className="col mb-3">
                                    <label className="form-label">% Valor comisión empleado</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="40"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Observation */}
                    <div className="row my-5">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faEye} size="2x" />
                            <h3>Observaciones</h3>
                            <p>
                                Describe si tiene alguna Observación
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col mb-3">
                                    <label className="form-label">Observación</label>
                                    <textarea className="form-control">
                                    </textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-primary mx-3"
                        >
                            Actualizar poliza
                        </button>
                        <Link
                            to={POLICY_ROUTE}
                            className="btn btn-light"
                        >
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </PolicyEditLayout>
    )
}

export default PolicyEdit;