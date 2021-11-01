import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useState } from "react";
import { deleteClient } from "services/clientService";

const ClientDeleteModal = ({clientId, onDelete,...rest}) => {
    
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteClient = () => {

        setIsLoading(true)
        deleteClient(clientId)
        .then(resp => {
            setIsLoading(false)
            document.querySelector("#deleteClient").click();
            onDelete(true)
        })
        .catch(err => {
            setIsLoading(false)
            onDelete(true)
            console.log(err)
        })
    }

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
                <button 
                    className="btn btn-danger"
                    disabled={isLoading}
                    onClick={(e) => {handleDeleteClient(e)}}
                >
                    {isLoading ? <Spinner /> : 'Eliminar'}
                </button>
                <button 
                    className="btn btn-default"
                    data-bs-dismiss="modal"
                    id="deleteClient"
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    );
}

export default ClientDeleteModal;