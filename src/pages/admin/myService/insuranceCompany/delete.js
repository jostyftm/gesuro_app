import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteCompanyServiceCompany } from "services/companyServicesService";
import { cathErrors } from "utils/errors";

const MyServiceDeleteInsuranceCompanyModal = ({insurrance: insurranceSelected, onDelete,...rest}) => {
    
    const [insurrance, setInsurrance] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setInsurrance(insurranceSelected);    
    }, [insurranceSelected]);

    const handleDelete = () => {

        setIsLoading(true)
        deleteCompanyServiceCompany(insurrance.pivot.company_service_id, insurrance.id)
        .then(resp => {
            setIsLoading(false)
            toast("Aseguradora eliminada");
            onDelete(true);
            document.querySelector("#btnCancelDeleteInsurrance").click();
        })
        .catch(err => {
            setIsLoading(false)
            onDelete(true);
            cathErrors(err)
        });
    }

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
           <button 
                    className="btn btn-danger mb-2"
                    disabled={isLoading}
                    onClick={() => {handleDelete()}}
                >
                    {isLoading ? <Spinner /> : 'Eliminar aseguradora'}
                </button>
                <button 
                    className="btn btn-default border"
                    data-bs-dismiss="modal"
                    id="btnCancelDeleteInsurrance"
                    disabled={isLoading}
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    );
}

export default MyServiceDeleteInsuranceCompanyModal;