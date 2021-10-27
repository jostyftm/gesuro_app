import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faFingerprint, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Panel from "components/Panel";
import DashboardLayout from "layouts/DashboardLayout";
import React from "react";

const EmployeeEditPage = () => {

    return(
    <DashboardLayout title="Editar empleado">
        <Panel>
            <div className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faIdCard} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Información básica</h6>
                        <span className="text-muted">
                            Configura la información de tu cliente.
                        </span>
                    </div>
                    <div className="col-md-7">
                        <form className="w-75 mx-auto">
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text"
                                            name="name"
                                            className="form-control is-invalid"
                                            placeholder="Pepito"
                                        />
                                        <label>Nombre</label>
                                        <div className="invalid-feedback">
                                            El nombre es requerido
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text"
                                            name="last_name"
                                            className="form-control"
                                            placeholder="Perez"
                                        />
                                        <label>Apellidos</label>
                                        <div className="invalid-feedback">
                                            Please enter a message in the textarea.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <select 
                                            className="form-select" 
                                            name="identification_type_id"
                                        >
                                            <option className="text-muted">- Seleccione uno -</option>
                                        </select>
                                        <label>Tipo de documento</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text"
                                            name="identification_number"
                                            className="form-control"
                                            placeholder="Perez"
                                        />
                                        <label>Número de documento</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    name="identification_number"
                                    className="form-control"
                                    placeholder="Perez"
                                />
                                <label>Correo electrónico</label>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                >
                                    Actualizar información
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faFingerprint} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Cambiar contraseña</h6>
                        <span className="text-muted">
                            Asignale una cotraseña temporal a tu empleado.
                        </span>
                    </div>
                    <div className="col-md-7">
                        <form className="w-75 mx-auto">
                            <div className="form-floating mb-3">
                                <input 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="******"
                                />
                                <label>Nueva contraseña</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="******"
                                />
                                <label>Confirmar contraseña</label>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                >
                                    Cambiar contraseña
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faUserTie} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Información laboral</h6>
                        <span className="text-muted">
                            Configura la información laboral de tu empleado.
                        </span>
                    </div>
                    <div className="col-md-7">
                        <form className="w-75 mx-auto">
                            <div className="form-floating mb-3">
                                <select 
                                    className="form-select" 
                                    name="identification_type_id"
                                >
                                    <option className="text-muted">- Seleccione uno -</option>
                                </select>
                                <label>Cargo</label>
                            </div>
                            <div className="form-floating mb-3">
                                <select 
                                    className="form-select" 
                                    name="identification_type_id"
                                >
                                    <option className="text-muted">- Seleccione uno -</option>
                                </select>
                                <label>Oficina</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    name="comission"
                                    className="form-control"
                                />
                                <label>Comisión</label>
                            </div>
                            <div>
                                <button 
                                    className="btn btn-primary "
                                >
                                    Actualizar información
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </Panel>
    </DashboardLayout>
    );
}

export default EmployeeEditPage;