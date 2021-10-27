import Modal from "components/Modal";
import React from "react";

const ClientDeleteModal = ({...rest}) => {
    
    return(
        <Modal
            title="Eliminar cliente"
            subtitle="¿Esta seguro de eliminar este cliente?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga en cuenta que al eliminarla tambien se borranrán todos los registros asociados al cliente.
            </div>
           <div className="d-grid my-2">
                <button className="btn btn-danger">Eliminar</button>
                <button 
                    className="btn btn-default"
                    data-bs-dismiss="modal"
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    );
}

export default ClientDeleteModal;