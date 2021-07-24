import React from 'react';

// Layout
import UserEditLayout from 'layouts/UserEditLayout';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderPlus, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Constants
import {
    USER as USER_ROUTE
} from 'constants/routes';

const AditionalInformation = () => {

    return (
        <UserEditLayout>
            <div className="alert alert-primary d-flex align-items-center" role="alert">
                <FontAwesomeIcon icon={faInfoCircle} size="1x" className="me-2" />
                <div>
                    Esta información se le mostrará a los usuarios que posean el rol de <b>cliente</b>. 
                </div>
            </div>
            <div className="container">
                <form>
                    {/* Persona information */}
                    <div className="row my-5">
                        <div className="col-md-6">
                            <FontAwesomeIcon icon={faFolderPlus} size="2x" />
                            <h3>Información adicional</h3>
                            <p>
                                Rellena la información adicional
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="mb-3 col">
                                    <label className="form-label">Ocupación</label>
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="Software developer"
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

export default AditionalInformation;