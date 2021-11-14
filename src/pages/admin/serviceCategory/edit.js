import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { updateServiceCategory } from "services/serviceCategoryService";
import { cathErrors } from "utils/errors";

const ServiceCategoryEditModal = ({category: categorySelected, onUpdate,...rest}) => {
    
    const [category, setCategory] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    const formUpdateCategoryRef = useRef(null);

    useEffect(() => {
        setCategory(categorySelected);
    }, [categorySelected])

    const handleUpdateCategory = (e) => {
        e.preventDefault();

        const formdata = new FormData(formUpdateCategoryRef.current);

        let data = {
            name: formdata.get('name'),
            description: formdata.get('description')
        };

        setErrors([])
        setIsLoading(true)
        updateServiceCategory(category.id, data)
        .then(resp => {
            setIsLoading(false);
            onUpdate(true)
            toast("Categoria actualizada");
            document.querySelector("#btnCancelUpdateCategory").click();
            formUpdateCategoryRef.current.reset();
        })
        .catch(err => {
            setIsLoading(false);
            onUpdate(false)

            if(err.status === 422)
                setErrors(err.data.data)
            else
                cathErrors(err)
        })

    }

    return(
        <Modal
            {...rest}
            title="Editar categoria"
            subtitle="Especifica las categorias de tus servicios"
        >
            <form
                ref={formUpdateCategoryRef}
                onSubmit={(e) => {handleUpdateCategory(e)}}
            >
                <div className="mb-3 col">
                    <div className="form-floating">
                        <input
                            type="text"
                            className={errors.name ? 'form-control is-invalid' : 'form-control'}
                            placeholder=""
                            name="name"
                            defaultValue={categorySelected.name}
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
                            defaultValue={categorySelected.description}
                        />
                        <label className="form-label">Descripción</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                        disabled={isLoading}
                    >
                        {isLoading ? <Spinner /> : 'Actualizar categoria'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCancelUpdateCategory"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default ServiceCategoryEditModal;