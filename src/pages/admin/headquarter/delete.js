import Modal from 'components/Modal';
import React from 'react'

const HeadquarterDeleteModal = ({title, description, headquarter,...rest})  => {

    return(
        <Modal
            title="Eliminar sede"
            subtitle="¿Esta seguro de eliminar esta sede?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga en cuenta que al eliminarla tambien se borranrán todos los registros asociados a esta sede
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

export default HeadquarterDeleteModal;