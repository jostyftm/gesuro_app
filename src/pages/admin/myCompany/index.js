import React from "react";

// Layout
import DashboardLayout from "layouts/DashboardLayout";

// Breadcum
import { myCompanyBreadcum } from "./breadcum";

// Components
import Panel from "components/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";

const MyCompanyIndex = () => {

    return(
        <DashboardLayout title="Mi empresa" breadcumLinks={myCompanyBreadcum}>
            <Panel>
                <form className="container">
                    <div className="row">
                        <div className="col-md-5">
                            <FontAwesomeIcon 
                                icon={faBuilding} 
                                size="2x" 
                            />
                            <h6 className="fs-5 my-2">Información básica</h6>
                            <span className="text-muted">
                                Configura la información sobre tu empresa de tu empresa.
                            </span>
                        </div>
                        <div className="col-md-7">
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    name="name"
                                    className="form-control is-invalid"
                                    placeholder="Seguros don pepito S.A.S"
                                    id="nameCompany"
                                />
                                <label htmlFor="nameCompany">Nombre</label>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    name="nit"
                                    className="form-control"
                                    placeholder="124547-9"
                                    id="nitCompany"
                                />
                                <label htmlFor="nitCompany">Nit</label>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    id="emailCompany"
                                    placeholder="email@mail.com"
                                />
                                <label htmlFor="emailCompany">Correo electronico</label>
                                <div className="invalid-feedback">
                                    Please enter a message in the textarea.
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
        </DashboardLayout>
    );
}

export default MyCompanyIndex;