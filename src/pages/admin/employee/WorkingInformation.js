import React from 'react';

// Layout
import UserEditLayout from 'layouts/UserEditLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faInfoCircle, faUserTag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Constants
import {
    USER as USER_ROUTE
} from 'constants/routes';

const WorkingInformation = () => {

    return (
        <UserEditLayout>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faInfoCircle} size="1x" className="me-2" />
                <div>
                    Esta información se le mostrará a los usuarios que posean el rol de <b>empleado</b>. 
                </div>
            </div>
            <div className="container">
                <form>
                    {/* Persona information */}
                    <div className="row my-5">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faUserTag} size="2x" />
                            <h3>Cargo</h3>
                            <p>
                                Escoge el cargo
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Cargo</label>
                                    <select className="form-select">
                                        <option>- Seleccione el cargo -</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    {/* Commission information */}
                    <div className="row my-5">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faHandHoldingUsd} size="2x" />
                            <h3>Comisión</h3>
                            <p>
                                Determina la comisión del usuario
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Cargo</label>
                                    <input 
                                        type="number"
                                        className="form-control"
                                        placeholder="15"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-primary mx-3"
                        >
                            Actualizar información
                        </button>
                        <Link
                            to={USER_ROUTE}
                            className="btn btn-light"
                        >
                            Cancelar
                        </Link>
                    </div>
                </form>
            </div>
        </UserEditLayout>
    );
}

export default WorkingInformation;