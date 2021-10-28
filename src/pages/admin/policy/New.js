import React from 'react';

// Layout
import PolicyEditLayout from 'layouts/PolicyEditLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileMedicalAlt, faHandHoldingUsd, faIdCardAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';

// Constants

import { Link } from 'react-router-dom';
import DashboardLayout from 'layouts/DashboardLayout';
import Panel from 'components/Panel';

const PolicyCreatePage = () => {
    return (
        <DashboardLayout title='Crear poliza' >
            <Panel>
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
                                        <div className="form-floating">
                                            <select className="form-select">
                                                <option>- Seleccione un producto -</option>
                                            </select>
                                            <label className="form-label">Producto</label>
                                        </div>
                                    </div>
                                    <div className="mb-3 col">
                                        <div className="form-floating">
                                            <select className="form-select">
                                                <option>- Seleccione un producto -</option>
                                            </select>
                                            <label className="form-label">Producto</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input 
                                                type="text"
                                                name="identification_number"
                                                className="form-control"
                                                placeholder="Perez"
                                            />
                                            <label>Cliente</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input 
                                                type="text"
                                                name="identification_number"
                                                className="form-control"
                                                placeholder="Perez"
                                            />
                                            <label>Objeto asegurado</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating">
                                            <select className="form-select">
                                                <option>- Seleccione una vigencia -</option>
                                            </select>
                                            <label className="form-label">Vigencia</label>
                                        </div>
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
                                <div className="row mb-3">
                                    <div className="col">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                name="prima"
                                                className="form-control"
                                                placeholder="10000"
                                            />
                                            <label className="form-label">Valor</label>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                name="prima"
                                                className="form-control"
                                                placeholder="10000"
                                            />
                                            <label className="form-label">Otros gastos</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                name="prima"
                                                className="form-control"
                                                placeholder="10000"
                                            />
                                            <label className="form-label">IVA 19%</label>
                                        </div>
                                    </div>
                                    <div className="mb-3 col">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                name="prima"
                                                className="form-control"
                                                placeholder="10000"
                                            />
                                            <label className="form-label">Valor IVA </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                name="prima"
                                                className="form-control"
                                                placeholder="10000"
                                            />
                                            <label className="form-label">% Comisión agencia</label>
                                        </div>
                                    </div>
                                    <div className="mb-3 col">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                name="prima"
                                                className="form-control"
                                                placeholder="10000"
                                            />
                                            <label className="form-label">Valor commisión agencia</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                name="prima"
                                                className="form-control"
                                                placeholder="10000"
                                            />
                                            <label className="form-label">Total</label>
                                        </div>
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
                                        <div className="form-floating">
                                            <select className="form-select">
                                                <option>- Seleccione un empleado -</option>
                                            </select>
                                            <label className="form-label">Empleado</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col mb-3">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                className="form-control"
                                                placeholder="40"
                                            />
                                            <label className="form-label">% Comisión empleado</label>
                                        </div>
                                    </div>
                                    <div className="col mb-3">
                                        <div className="form-floating">
                                            <input 
                                                type="number"
                                                className="form-control"
                                                placeholder="40"
                                            />
                                            <label className="form-label">Comisión empleado</label>
                                        </div>
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
                                        <div className="form-floating">
                                            <textarea className="form-control">
                                            </textarea>
                                            <label className="form-label">Observación</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-primary mx-3"
                            >
                                Crear poliza
                            </button>
                            <Link
                                to=""
                                className="btn btn-light border"
                            >
                                Cancelar
                            </Link>
                        </div>
                    </form>
                </div>
            </Panel>
        </DashboardLayout>
    )
}

export default PolicyCreatePage;