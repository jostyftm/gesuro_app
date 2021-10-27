import { faEllipsisH, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadquarterDetailLayout from "layouts/HeadquarterDetailLayout";
import React from "react";
import { Link } from "react-router-dom";
import EmployeeCreateModal from "../employee/new";

const HeadquarterEmployeeListPage = () => {

    return(
        <HeadquarterDetailLayout>
           <div 
            className="d-flex flex-column align-items-center w-50 mx-auto"
            >
                <FontAwesomeIcon 
                    icon={faUsers} 
                    size="2x"
                />
                <span className="fs-4 fw-bold">Sedes</span>
                <span>Estos son los empleados que trabajando en <b>Tu empresa</b></span>
                <Link
                    to="#"
                    className="btn btn-sm btn-primary mt-2"
                    data-bs-toggle="modal" 
                    data-bs-target="#modalCreateEmployee"
                >
                    Nuevo empleado
                </Link>
            </div>
            <div className="my-3">
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
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombres</th>
                            <th>Apellidos</th>
                            <th>Número de identificación</th>
                            <th>Cargo</th>
                            <th>Teléfono</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Joe Stwart</td>
                            <td>Valencia renteria</td>
                            <td>1111798455</td>
                            <td>Programador</td>
                            <td>3012345678</td>
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
                                            <Link
                                                to="#"
                                                className="dropdown-item"
                                            >
                                                Ver empleado
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                to="#"
                                                className="dropdown-item text-danger"
                                            >
                                                Eliminar empleado
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <EmployeeCreateModal id="modalCreateEmployee" />
        </HeadquarterDetailLayout>
    );
}

export default HeadquarterEmployeeListPage;