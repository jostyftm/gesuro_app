import React from 'react';

// Layout 
import DashboardLayout from 'layouts/DashboardLayout';

// Components
import Panel from 'components/Panel';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

// Constants
import {
    COMPANY as COMPANY_ROUTE
} from 'constants/routes';

const CompanyNew = () => {
    return(
        <DashboardLayout>
            <div>
                <h1>Crear empresa</h1>
            </div>
            <Panel>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <form className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Razon social</label>
                                    <input 
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Correo electronico</label>
                                    <input 
                                        name="email"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Teléfono</label>
                                    <input 
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Sitio web</label>
                                    <input 
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary" type="submit">Crear empresa</button>
                                    <Link 
                                        className="btn btn-light" 
                                        to={COMPANY_ROUTE}
                                    >
                                        Cancelar
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 text-center p-4">
                            <FontAwesomeIcon icon={faBuilding} size="5x" />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </Panel>
        </DashboardLayout>
    );
}

export default CompanyNew;