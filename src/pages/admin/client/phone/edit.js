import Modal from "components/Modal";
import React from "react";

const PhoneEditModal = ({...rest}) => {
    return(
        <Modal
            title="Editar telefono"
            {...rest}
        >
            <form>
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
                <div className="d-grid">
                    <button className="btn btn-primary">Actualizar teléfono</button>
                    <button className="btn btn-default" data-bs-dismiss="modal">Cancelar</button>
                </div>
            </form>
        </Modal>
    );
}

export default PhoneEditModal;