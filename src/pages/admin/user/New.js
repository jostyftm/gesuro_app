import React from 'react';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';

// Components
import Panel from 'components/Panel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faUser } from '@fortawesome/free-regular-svg-icons';
import { faPhoneAlt, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

// Constants
import {
    USER as USER_ROUTE
} from 'constants/routes';

const UserNew = () => {

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Crear usuario</h1>
            </div>
            <Panel>
                <div className="container">
                    <form>
                        {/* Persona information */}
                        <div className="row my-5">
                            <div className="col-md-6">
                                <FontAwesomeIcon icon={faUser} size="2x" />
                                <h3>Información personal</h3>
                                <p>
                                    Rellena los datos personales
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label className="form-label">Nombres</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Jhon pepito"
                                        />
                                    </div>
                                    <div className="mb-3 col">
                                        <label className="form-label">Apellidos</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Doe Smith"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label className="form-label">Tipo de Identificación</label>
                                        <select className="form-select"> 
                                            <option>- Seleccione un tipo -</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 col">
                                        <label className="form-label">Tipo de Identificación</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="111222336"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="mb-3 col">
                                        <label className="form-label">Correo electronico</label>
                                        <input 
                                            type="email"
                                            className="form-control"
                                            placeholder="johndoe@mail.com"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* Address information */}
                        <div className="row my-5">
                            <div className="col-md-6">
                                <FontAwesomeIcon icon={faAddressCard} size="2x" />
                                <h3>Dirección</h3>
                                <p>
                                    Ingresa los datos de la dirección
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label className="form-label">Dirección</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="CL 4 #56-3"
                                        />
                                    </div>
                                    <div className="mb-3 col">
                                        <label className="form-label">Barrio</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            placeholder="Barrio el cucho"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label className="form-label">Departamento</label>
                                        <select className="form-select">
                                            <option>- Seleccione un departamento -</option>
                                        </select>
                                    </div>
                                    <div className="mb-3 col">
                                        <label className="form-label">Ciudad</label>
                                        <select className="form-select">
                                            <option>- Seleccione una ciudad -</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* Address information */}
                        <div className="row my-5">
                            <div className="col-md-6">
                                <FontAwesomeIcon icon={faPhoneAlt} size="2x" />
                                <h3>Telefonos</h3>
                                <p>
                                    Agrega los números de telefono
                                </p>
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label className="form-label">Telefono (1)</label>
                                        <input 
                                            type="tel"
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        {/* Role information */}
                        <div className="row my-5">
                            <div className="col-md-6">
                                    <FontAwesomeIcon icon={faUserShield} size="2x" />
                                    <h3>Rol</h3>
                                    <p>
                                        Determina el rol del usuario
                                    </p>
                                </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <div className="mb-3 col">
                                        <label className="form-label">Rol</label>
                                        <select className="form-select">
                                            <option>- Seleccione un rol -</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 d-flex justify-content-center">
                            <button
                                type="submit"
                                className="btn btn-primary mx-3"
                            >
                                Crear usuario
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
            </Panel>
        </DashboardLayout>
    );
}

export default UserNew;