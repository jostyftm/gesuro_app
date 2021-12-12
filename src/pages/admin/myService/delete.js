import React, {useState, useEffect} from "react";
import Modal from "components/Modal";
import Spinner from "components/Spiner";
import { toast } from "react-toastify";
import { deleteServiceCompany } from "services/companyServicesService";
import { cathErrors } from "utils/errors";

const MyServiceDeleteModal = ({service:serviceSelected, onDelete,...rest}) => {
    
    const [service, setService] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setService(serviceSelected);    
    }, [serviceSelected]);

    const handleDeleteService = () => {

        setIsLoading(true)
        deleteServiceCompany(serviceSelected)
        .then(resp => {
            setIsLoading(false)
            toast("Servicio eliminado")
            onDelete(true);
            document.querySelector("#btnCanceDeleteService").click();
        })
        .catch(err => {
            setIsLoading(false)
            onDelete(true);
            cathErrors(err)
        });

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
                    disabled={isLoading}
                    onClick={() =>{handleDeleteService()}}
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

export default MyServiceDeleteModal;