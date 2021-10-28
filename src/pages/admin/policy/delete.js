import Modal from "components/Modal";
import React from "react";

const PolicyDeleteModal = ({...rest}) => {
    
    return(
        <Modal
            title="Eliminar póliza"
            subtitle="¿Esta seguro de eliminar esta poliza?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga en cuenta que al eliminarla tambien se borranrán todos los registros asociados a la poliza.
            </div>
           <div className="d-grid my-2">
                <button className="btn btn-danger mb-2">Eliminar póliza</button>
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

export default PolicyDeleteModal;