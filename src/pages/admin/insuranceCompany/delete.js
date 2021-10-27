import Modal from "components/Modal";
import React from "react";

const InsuraceCompnayDeleteModal = ({...rest}) => {
    
    return(
        <Modal
            title="Eliminar aseguradora"
            subtitle="¿Esta seguro de eliminar esta aseguradora?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga en cuenta que al eliminarla tambien se borranrán todos los registros asociados a esta aseguradora.
            </div>
           <div className="d-grid my-2">
                <button className="btn btn-danger mb-2">Eliminar aseguradora</button>
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

export default InsuraceCompnayDeleteModal;