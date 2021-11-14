import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { allServiceCategory } from "services/serviceCategoryService";
import { createService } from "services/serviceService";
import { cathErrors } from "utils/errors";

const ServiceCreateModal = ({onCreate,...rest}) => {
    
    const [errors, setErrors] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const [categories, setCategories] = useState([]);

    const formCreateServiceRef = useRef(null);

    const fetchCategories = async () => {

        try{
            const response = await allServiceCategory();
            setCategories(response.data);

        }catch(err){
            cathErrors(err)
        }
    }

    useEffect(() => {

        fetchCategories();

        return () => {
            setCategories([])
        }
    }, [])

    const handleCreateServicec = (e) => {
        e.preventDefault();

        const formData = new FormData(formCreateServiceRef.current);

        setIsSaving(true);
        setErrors([])
        createService(formData)
        .then(resp => {
            setIsSaving(false)
            toast("Servicio creado")
            onCreate(true)
            document.querySelector("#btnCacelCreateService").click();
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
            title="Crear servicio"
            subtitle="Crear los servicios que van a ofrecer las empresas aseguradoras"
        >
            <form
                ref={formCreateServiceRef}
                onSubmit={(e) => {handleCreateServicec(e)}}
            >
                <div className="row">
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
                            <select
                                className={errors.service_category_id ? 'form-select is-invalid' : 'form-select'}
                                name="service_category_id"
                            >
                                {categories && categories.map((category, index)=>(
                                    <option
                                        key={index}
                                        value={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                            <label className="form-label">Categoria</label>
                            {errors && errors.service_category_id && (
                                <div className="invalid-feedback">
                                    {errors.service_category_id}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mb-3 col">
                    <div className="form-floating">
                        <textarea 
                            className={errors.description ? 'form-control is-invalid' : 'form-control'}
                            style={{height:'100px'}} 
                            name="description"
                        />
                        <label className="form-label">Descripción</label>
                        {errors && errors.description && (
                            <div className="invalid-feedback">
                                {errors.description}
                            </div>
                        )}
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary mb-2"
                        disabled={isSaving}
                    >
                        {isSaving ? <Spinner /> : 'Crear servicio'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCacelCreateService"
                        disabled={isSaving}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default ServiceCreateModal;