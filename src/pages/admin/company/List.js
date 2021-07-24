import React from 'react';

// Layout 
import DashboardLayout from 'layouts/DashboardLayout';
import Panel from 'components/Panel';
import { Link } from 'react-router-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';

// Constants
import {
    COMPANY as  COMPANY_ROUTE
} from 'constants/routes';

const CompanyList = () => {

    return(
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Empresas</h1>
                <Link 
                    className="btn btn-sm btn-primary"
                    to={`${COMPANY_ROUTE}/new`}
                >
                    Crear empresa
                </Link>
            </div>
            <Panel>
                    <div className="d-flex justify-content-between">
                        <div></div>
                        <div className="input-group mb-3 w-25">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="sura..." 
                                aria-label="sura..." 
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
                                <td>Nombre</td>
                                <td>Correo electronico</td>
                                <td>Teléfono</td>
                                <td>Sitio web</td>
                                <td>Acción</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sura S.A.S</td>
                                <td>info@sura.com.co</td>
                                <td>01 8000 51 8888</td>
                                <td>
                                    <Link
                                        to="#"
                                        target="_blank"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            window.open("https://www.segurossura.com.co/paginas/default.aspx", '_blank')
                                        }}
                                    >
                                        <span className="me-2">Ver Sitio</span>
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </Link>
                                </td>
                                <td>
                                    <Link 
                                        to={`${COMPANY_ROUTE}/1/edit`}
                                        className="btn btn-sm btn-outline-primary"
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Panel>
        </DashboardLayout>
    );
}

export default CompanyList;