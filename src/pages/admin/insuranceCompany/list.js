import React from 'react';

// Components
import Panel from 'components/Panel';
import { 
    faEllipsisH, 
    faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';
import InsuraceCompnayCreateModal from './new';
import InsuraceCompnayEditModal from './edit';
import InsuranceCompanyDeleteModal from './delete';

// Constants


const InsuranceListPage = () => {

    return (
        <DashboardLayout>
            <Panel>
                <div className="d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-sm btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCreateInsuraceCompany"
                        >
                            Nueva aseguradora
                        </button>
                    </div>
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
                                <th>Nombre</th>
                                <th>Correo electrónico</th>
                                <th>Teléfono</th>
                                <th>Sitio web</th>
                                <th>Fecha de creacion</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SURA S.A.S</td>
                                <td>info@sura.com</td>
                                <td>032145875</td>
                                <td>
                                    <a
                                        href="https://google.com"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <FontAwesomeIcon icon={faExternalLinkAlt} />
                                    </a>
                                </td>
                                <td>hoy</td>
                                <td>hoy </td>
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
                                                <button
                                                    className="dropdown-item"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalEditInsuranceConpany"
                                                >
                                                    Editar aseguradora
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalDeleteInsuranceCompany"
                                                >
                                                    Eliminar aseguradora
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Panel>
            <InsuraceCompnayCreateModal id="modalCreateInsuraceCompany" />
            <InsuraceCompnayEditModal id="modalEditInsuranceConpany" />
            <InsuranceCompanyDeleteModal id="modalDeleteInsuranceCompany" />
        </DashboardLayout>
    );
}

export default InsuranceListPage;