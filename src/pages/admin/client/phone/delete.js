import Modal from "components/Modal";
import React from "react";

const PhoneDeleteModal = ({...rest}) => {
    return(
        <Modal
            {...rest}
            title="Eliminar empleado"
            subtitle="¿Esta seguro de eliminar este número teléfonico?"
        >
           <div className="d-grid my-2">
                <button className="btn btn-danger mb-2">Eliminar</button>
                <button 
                    className="btn btn-default"
                    data-bs-dismiss="modal"
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    )
}

export default PhoneDeleteModal;