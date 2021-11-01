import { faEllipsisH, faFileMedicalAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Panel from "components/Panel";
import DashboardLayout from "layouts/DashboardLayout";
import React from "react";
import MyServiceAddInsuranceCompanyModal from "./insuranceCompany/add";
import MyServiceDeleteInsuranceCompanyModal from "./insuranceCompany/delete";
import MyServiceEditInsuranceCompanyModal from "./insuranceCompany/edit";

const MyServiceEditPage = () => {

    return(
        <DashboardLayout>
            <Panel>
                <form className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <FontAwesomeIcon
                                icon={faFileMedicalAlt} 
                                size="2x" 
                            />
                            <h6 className="fs-5 my-2">Información básica</h6>
                            <span className="text-muted">
                                Configura la información sobre tu servicio.
                            </span>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="mb-3 col">
                                    <div className="form-floating">
                                        <select
                                            className="form-select"
                                        >
                                            <option>-Categoria-</option>
                                        </select>
                                        <label className="form-label">Categoria</label>
                                    </div>
                                </div>
                                <div className="mb-3 col">
                                    <div className="form-floating">
                                        <select
                                            className="form-select"
                                        >
                                            <option>-Tipo-</option>
                                        </select>
                                        <label>Tipo de servicio</label>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-floating">
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="nombre"
                                    />
                                    <label className="form-label">Nombre</label>
                                </div>
                            </div>
                            <button
                                className="btn btn-primary"
                            >
                                Actualizar información
                            </button>
                        </div>
                    </div>
                </form>
            </Panel>
            <Panel>
            <div className="d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-sm btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#modalAddInsurance"
                        >
                            Agregar aseguradora
                        </button>
                    </div>
                    <div className="input-group mb-3 w-25">
                        
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Aseguradora</th>
                                <th>% Comisión</th>
                                <th>% IVA</th>
                                <th>Fecha de creación</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>SURA S.A.S</td>
                                <td>25%</td>
                                <td>19%</td>
                                <td>hoy</td>
                                <td>hoy</td>
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
                                                    data-bs-target="#modalEditInsurance"
                                                >
                                                    Editar aseguradora
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    className="dropdown-item text-danger"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalDeleteInsurance"
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
            <MyServiceAddInsuranceCompanyModal id="modalAddInsurance"/> 
            <MyServiceEditInsuranceCompanyModal id="modalEditInsurance" />
            <MyServiceDeleteInsuranceCompanyModal id="modalDeleteInsurance" />
        </DashboardLayout>
    );
}

export default MyServiceEditPage;