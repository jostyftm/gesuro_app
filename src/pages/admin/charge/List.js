import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Panel from "components/Panel";
import { 
    DASHBOARD_CHARGE_EDIT_ROUTE, 
    DASHBOARD_CHARGE_NEW 
} from "constants/routes";
import DashboardLayout from "layouts/DashboardLayout";
import React from "react";
import { Link } from "react-router-dom";

const ChargeListPage = () => {

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Cargos</h1>
                <Link 
                    className="btn btn-sm btn-primary"
                    to={DASHBOARD_CHARGE_NEW}
                >
                    Crear cargo
                </Link>
            </div>
            <Panel>
                <div className="d-flex justify-content-between">
                    <div></div>
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
                                <th>Fecha de creación</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>cargo</td>
                                <td>hoy</td>
                                <td>hoy </td>
                                <td>
                                    <Link
                                        className="btn btn-sm btn-outline-primary"
                                        to={DASHBOARD_CHARGE_EDIT_ROUTE(1)}
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
    )
}

export default ChargeListPage;