import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteService } from "services/serviceService";
import { cathErrors } from "utils/errors";

const ServiceDeleteModal = ({service:serviceSelected, onDelete,...rest}) => {
    
    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setService(serviceSelected);    
    }, [serviceSelected]);


    const handleDeleteService = () => {

        setIsLoading(true)
        deleteService(service.id)
        .then(resp => {
            setIsLoading(false)
            onDelete(true)
            toast("Servicio elimiando")
            document.querySelector("#btnCanceDeleteService").click();
        })
        .catch(err => {
            setIsLoading(false)
            onDelete(false)
            cathErrors(err)
        })
    }

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
                <button 
                    className="btn btn-danger mb-2"
                    onClick={() => {handleDeleteService()}}
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner /> : 'Eliminar servicio'}
                </button>
                <button 
                    className="btn btn-default border"
                    data-bs-dismiss="modal"
                    id="btnCanceDeleteService"
                    disabled={isLoading} 
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    );
}

export default ServiceDeleteModal;