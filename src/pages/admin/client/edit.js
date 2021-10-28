import { 
    faEllipsisH, 
    faIdCard, 
    faMapMarked, 
    faPhoneAlt 
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ClientEditLayout from "./layout/editLayout";
import PhoneDeleteModal from "./phone/delete";
import PhoneEditModal from "./phone/edit";

const ClientEditPage = () => {
    return(
        <ClientEditLayout>
            <div className="container">
                {/* Personal Information */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faIdCard} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Información básica</h6>
                        <span className="text-muted">
                            Configura la información de tu empleado.
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
                {/* Location Information */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faMapMarked} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Información de ubicación</h6>
                        <span className="text-muted">
                            Configura la dirección de tu cliente.
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
                                        <label>Dirección</label>
                                        <div className="invalid-feedback">
                                            La dirección es requerida
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
                                        <label>Barrio</label>
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
                                        <label>Departamento</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <select 
                                            className="form-select" 
                                            name="identification_type_id"
                                        >
                                            <option className="text-muted">- Seleccione uno -</option>
                                        </select>
                                        <label>Ciudad</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                >
                                    Actualizar dirección
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Phones Information */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faPhoneAlt} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Teléfono</h6>
                        <span className="text-muted">
                            Configura los teléfonos de tu cliente para mantenerte en contacto con el.
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
                                        <label>Teléfono</label>
                                        <div className="invalid-feedback">
                                            El telefono es requerido
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                >
                                    Agregar teléfono
                                </button>
                            </div>
                        </form>
                        <div className="mt-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Número</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
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
                                                        <button
                                                            className="dropdown-item"
                                                            data-bs-toggle="modal" 
                                                            data-bs-target="#modalEditPhone"
                                                        >
                                                            Editar teléfono
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <button
                                                            to="#"
                                                            className="dropdown-item text-danger"
                                                            data-bs-toggle="modal" 
                                                            data-bs-target="#modalDeletePhone"
                                                        >
                                                            Eliminar telefono
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <PhoneEditModal id="modalEditPhone" />
            <PhoneDeleteModal id="modalDeletePhone" />
        </ClientEditLayout>
    );
}

export default ClientEditPage;