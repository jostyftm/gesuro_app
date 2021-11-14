import Modal from "components/Modal";
import React from "react";

const EmployeeCreateModal = ({...rest}) => {

    return(
        <Modal
            {...rest}
            title="Crear empleado"
            subtitle="Crea a tus empleados para que comiecen a trabajas en las sedes de tu empresa"
        >
            <form className="mt-3">
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Pepito"
                            />
                            <label>Nombre</label>
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
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
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="charge_id"
                            >
                                <option className="text-muted">- Seleccione uno -</option>
                            </select>
                            <label>Cargo</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="identification_number"
                                className="form-control"
                                placeholder="pepito@mail.com"
                            />
                            <label>Correo electrónico</label>
                        </div>
                    </div>
                </div>  
                <div className="d-grid">
                    <button className="btn btn-primary  mb-2">Crear empleado</button>
                    <button 
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                    >Cancelar</button>
                </div>
            </form>
        </Modal>
    );
}

export default EmployeeCreateModal;