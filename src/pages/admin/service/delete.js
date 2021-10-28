import Modal from "components/Modal";
import React from "react";

const ServiceDeleteModal = ({...rest}) => {
    
    return(
        <Modal
            title="Eliminar servicio"
            subtitle="¿Esta seguro de eliminar este servicio?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga en cuenta que al eliminarla tambien se borranrán todos los registros asociados a este servicio.
            </div>
           <div className="d-grid my-2">
                <button className="btn btn-danger mb-2">Eliminar servicio</button>
                <button 
                    className="btn btn-default border"
                    data-bs-dismiss="modal"
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    );
}

export default ServiceDeleteModal;