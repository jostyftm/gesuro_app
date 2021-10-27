import { faTags } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Panel from "components/Panel";
import { DASHBOARD_CHARGE_LIST } from "constants/routes";
import DashboardLayout from "layouts/DashboardLayout";
import React from "react";
import { Link } from "react-router-dom";

const ChargeCreatePage = () => {

    return (
        <DashboardLayout>
           <div>
                <h1>Crear cargo</h1>
            </div>
            <Panel>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <form className="row">
                                <div className="col-md-12 mb-3">
                                    <label>Nombre</label>
                                    <input 
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="d-grid gap-2">
                                    <button 
                                        className="btn btn-primary" 
                                        type="submit"
                                    >
                                        Crear cargo
                                    </button>
                                    <Link
                                        className="btn btn-light" 
                                        to={DASHBOARD_CHARGE_LIST}
                                    >
                                        Cancelar
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 text-center p-4">
                            <FontAwesomeIcon icon={faTags} size="5x" />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </Panel> 
        </DashboardLayout>
    )
}

export default ChargeCreatePage;