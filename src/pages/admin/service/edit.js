import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { allServiceCategory } from "services/serviceCategoryService";
import { updateService } from "services/serviceService";
import { cathErrors } from "utils/errors";

const ServiceEditModal = ({service: serviceSelected, onUpdate, ...rest}) => {

    const [errors, setErrors] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const [categories, setCategories] = useState([]);
    const [service, setService] = useState({})

    const formUpdateServiceRef = useRef(null)

    const fetchCategories = async () => {

        try{
            const response = await allServiceCategory();
            setCategories(response.data);

        }catch(err){
            cathErrors(err)
        }
    }

    const handleUpdateService = (e) => {
        e.preventDefault();

        const formData = new FormData(formUpdateServiceRef.current);

        let data = {
            name: formData.get('name'),
            description: formData.get('description'),
            service_category_id: formData.get('service_category_id')
        }

        setIsSaving(true);
        setErrors([])
        updateService(serviceSelected.id, data)
        .then(resp => {
            setIsSaving(false)
            toast("Servicio actualizado")
            onUpdate(true)
            document.querySelector("#btnCacelEditService").click();
            formUpdateServiceRef.current.reset();
        })
        .catch(err => {
            setIsSaving(false)
            onUpdate(false)

            if(err.status === 422)
                setErrors(err.data.data)
            else
                cathErrors(err)
        })
    }

    useEffect(() => {
        setService(serviceSelected);
    }, [serviceSelected])

    useEffect(() => {

        fetchCategories();

        return () => {
            setCategories([])
            setErrors([])
        }
    }, [])

    return(
        <Modal
            {...rest}
            title="Editar servicio"
            subtitle="Crear los servicios que van a ofrecer las empresas aseguradoras"
        >
            <form
                ref={formUpdateServiceRef}
                onSubmit={(e) => {handleUpdateService(e)}}
            >
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="text"
                                className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                placeholder=""
                                name="name"
                                defaultValue={service.name}
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
                                value={service.service_category_id}
                                onChange={(e) => {setService({...service, service_category_id:e.target.value})}}
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
                            defaultValue={service.description}
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
                        {isSaving ? <Spinner /> : 'Actualizar servicio'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCacelEditService"
                        disabled={isSaving}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default ServiceEditModal;