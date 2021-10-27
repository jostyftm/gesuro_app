import Modal from "components/Modal";
import React from "react";

const ClientCreateModal = ({...rest}) => {
    
    return(
        <Modal
            title="Registrar cliente"
            subtitle="¿Esta seguro de eliminar este empleado?"
            {...rest}
        >
            <form className="mx-auto">
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
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="text"
                                name="identification_number"
                                className="form-control"
                                placeholder="Perez"
                            />
                            <label>Correo electrónico</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="number"
                                name="identification_number"
                                className="form-control"
                                placeholder="Perez"
                            />
                            <label>Teléfono</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Pepito"
                            />
                            <label>Dirección</label>
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
                <div className="d-grid">
                    <button
                        className="btn btn-primary"
                    >
                        Registrar cliente
                    </button>
                    <button
                        className="btn btn-default my-2 border"
                        data-bs-dismiss="modal"
                    >
                        Cancelar
                    </button>
                </div>
            </form> 
        </Modal>
    );
}

export default ClientCreateModal;