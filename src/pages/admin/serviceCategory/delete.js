import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { deleteServiceCategory } from "services/serviceCategoryService";
import { cathErrors } from "utils/errors";

const ServiceCategoryDeleteModal = ({category:categorySelected, onDelete,...rest}) => {
    
    const [category, setcategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setcategory(categorySelected);    
    }, [categorySelected]);


    const handleDeleteCategiry = () => {

        setIsLoading(true)
        deleteServiceCategory(category.id)
        .then(resp => {
            setIsLoading(false)
            onDelete(true)
            toast("Catgoria elimianda");
            document.querySelector("#btnCanceDeleteCategory").click();
        })
        .catch(err => {
            setIsLoading(false)
            onDelete(false)
            cathErrors(err)
        })
    }

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
                <button 
                    className="btn btn-danger mb-2"
                    onClick={() => {handleDeleteCategiry()}}
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner /> : 'Eliminar categoria'}
                </button>
                <button 
                    className="btn btn-default border"
                    data-bs-dismiss="modal"
                    id="btnCanceDeleteCategory"
                    disabled={isLoading} 
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    );
}

export default ServiceCategoryDeleteModal;