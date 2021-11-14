import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { createServiceCategory } from "services/serviceCategoryService";
import { cathErrors } from "utils/errors";

const ServiceCategoryCreateModal = ({onCreate,...rest}) => {
    
    const [isSaving, setIsSaving] = useState(false);
    const [errors, setErrors] = useState([]);

    const formCreateCategoryRef = useRef(null);

    const handleCreateCategory = (e) => {
        e.preventDefault();
        
        const formData = new FormData(formCreateCategoryRef.current);

        setIsSaving(true);
        setErrors([]);
        createServiceCategory(formData)
        .then(resp => {
            setIsSaving(false)
            toast("Categoria creatda")
            document.querySelector("#btnCancelCreateCategory").click();
            onCreate(true)
        })
        .catch(err => {
            setIsSaving(false)
            onCreate(false)

            if(err.status === 422)
                setErrors(err.data.data)
            else
                cathErrors(err)
        })
    }

    return(
        <Modal
            {...rest}
            title="Crear categoria"
            subtitle="Especifica las categorias de tus servicios"
        >
            <form
                ref={formCreateCategoryRef}
                onSubmit={(e) => {handleCreateCategory(e)}}
            >
                <div className="mb-3 col">
                    <div className="form-floating">
                        <input
                            type="text"
                            className={errors.name ? 'form-control is-invalid' : 'form-control'}
                            placeholder=""
                            name="name"
                        />
                        <label className="form-label">Nombre</label>
                        {errors && errors.name && (
                            <div className="invalid-feedback">
                                {errors.name}
                            </div>
                        )}
                    </div>
                </div>
                <div className="mb-3 col">
                    <div className="form-floating">
                        <textarea 
                            className="form-control" 
                            style={{height:'100px'}} 
                            name="description"
                        />
                        <label className="form-label">Descripción|</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                        disabled={isSaving}
                    >
                        {isSaving ? <Spinner /> : 'Crear categoria'}
                    </button>
                    <button
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCancelCreateCategory"
                        disabled={isSaving}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default ServiceCategoryCreateModal;