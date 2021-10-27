import Modal from "components/Modal";
import React from "react";

const EmployeeDeleteModal = ({...rest}) => {
    
    return(
        <Modal
            title="Eliminar empleado"
            subtitle="¿Esta seguro de eliminar este empleado?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga en cuenta que al eliminarla tambien se borranrán todos los registros asociados al empleado
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

export default EmployeeDeleteModal;