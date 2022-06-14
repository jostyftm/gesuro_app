import React from "react";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import {  faCog, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Panel from "components/Panel";
import DashboardLayout from "layouts/DashboardLayout";
import { Link } from "react-router-dom";
import { headquarterListBreadcum } from "./breadcum";
import HeadquarterEditPage from "./edit";
import { DASHBOARD_MY_HEADQUARTER_DETAIL_ROUTE } from "constants/routes";
import HeadquarterDeleteModal from "./delete";
import HeadquarterNewModal from "./new";

const HeadQuaterListPage = () => {

    const handleEditHeadquarter = (e) => {
        e.preventDefault();
    }

    return(
        <DashboardLayout title="Sedes" breadcumLinks={headquarterListBreadcum}>
            <Panel>
                <div 
                className="d-flex flex-column align-items-center w-50 mx-auto mt-3 mb-5"
                >
                    <FontAwesomeIcon 
                        icon={faBuilding} 
                        size="2x"
                    />
                    <span className="fs-4 fw-bold">Sedes</span>
                    <span>Estas son las sedes de <b>Tu empresa</b>, a las que puedes asignarles empleados</span>
                    <Link
                        to="#"
                        className="btn btn-sm btn-primary mt-2"
                        data-bs-toggle="modal" 
                        data-bs-target="#modalCreateHeadquarter"
                    >
                        Nuevo empleado
                    </Link>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="border rounded">
                                <div className="p-4 d-flex justify-content-between align-items-center">
                                    <span className="badge rounded-pill bg-primary">Principal</span>
                                    <div className="dropdown">
                                        <button 
                                            className="bg-white border rounded-circle"
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                            id="dropdownOffie"
                                        >
                                            <FontAwesomeIcon icon={faCog} color="#b9b9b9" />
                                        </button>
                                        <ul 
                                            className="dropdown-menu shadow border-0 rounded"
                                            aria-labelledby="dropdownOffie"
                                        >
                                            <li>
                                                <Link 
                                                    className="dropdown-item"
                                                    to="#"
                                                    onClick={handleEditHeadquarter}
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalEditHeadquarter"
                                                >
                                                    Editar sede
                                                </Link>
                                            </li>
                                            <li>
                                                <Link 
                                                    className="dropdown-item text-danger"
                                                    to="#"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalDeleteHeadquarter"
                                                >
                                                    Eliminar sede
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex flex-column align-items-center my-3">
                                    <span className="fs-5 fw-bold">Nombre sede</span>
                                    <span>3 empleados</span>
                                </div>
                                <div className="p-2 text-center border-top">
                                    <Link
                                        to={DASHBOARD_MY_HEADQUARTER_DETAIL_ROUTE(1)}
                                        className="nav-link"
                                    >
                                        <span className="me-3">Ver sede</span>
                                        <FontAwesomeIcon icon={faLongArrowAltRight} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </Panel>
            <HeadquarterNewModal id="modalCreateHeadquarter" />
            <HeadquarterEditPage  id="modalEditHeadquarter" />
            <HeadquarterDeleteModal id="modalDeleteHeadquarter" />
        </DashboardLayout>
    );
}

export default HeadQuaterListPage;