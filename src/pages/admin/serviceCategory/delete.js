import Modal from "components/Modal";
import React from "react";

const ServiceCategoryDeleteModal = ({...rest}) => {
    
    return(
        <Modal
            title="Eliminar categoria"
            subtitle="¿Esta seguro de eliminar esta poliza?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga en cuenta que al eliminarla tambien se borranrán todos los registros asociados a la categoria.
            </div>
           <div className="d-grid my-2">
                <button className="btn btn-danger mb-2">Eliminar categoria</button>
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

export default ServiceCategoryDeleteModal;