import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { saveServiceCompany } from "services/companyServicesService";
import { allServiceCategory, serviceCategoryGetServices } from "services/serviceCategoryService";
import { cathErrors } from "utils/errors";

const MyServiceCreateModal = ({onCreate, ...rest}) => {
    
    const [isLoading, setIsLoading] = useState([])
    const [errors, setErrors] = useState([])
    const [categories, setCategories] = useState([])
    const [services, setServices] = useState([])

    const formCreateServiceRef = useRef(null);

    const fetchCategories = async () => {
        setIsLoading(true)        
        
        try{
            const responseCategories = await allServiceCategory();
            setCategories(responseCategories.data)
        }catch(err){
            cathErrors(err)
        }
        
        setIsLoading(false)
    }

    useEffect(() => {

        fetchCategories()

        return () => {
            setCategories([])
            setServices([])
        } 
    }, []);

    const handleSearchService = async (category_id) => {

        setIsLoading(true)

        try{
            const responseServices = await serviceCategoryGetServices(category_id);
            setServices(responseServices.data);

        }catch(err){
            cathErrors(err);
        }

        setIsLoading(false)
    }

    const handleCopyNameService = (e) => {

        const el = document.getElementById('service_id');
        const checkEl = e.target;

        let nameService = services.filter((service, index) => service.id == el.value);

        if(checkEl.checked){
            formCreateServiceRef.current.name.value = nameService[0].name;
            formCreateServiceRef.current.name.focus();  
        }else{
            formCreateServiceRef.current.name.value = '';
        }
    }

    const handleCreateService = (e) => {
        e.preventDefault();

        const formData = new FormData(formCreateServiceRef.current);

        setIsLoading(true)
        setErrors([])
        saveServiceCompany(formData)
        .then(resp => {
            setIsLoading(false)
            toast("Servicio agregado")
            document.querySelector("#btnCanceCreateService").click();
            onCreate(true)
        })
        .catch(err => {
            setIsLoading(false)
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
            subtitle="Crear los servicios que va ofrecer tu empresa"
        >
            <form
                ref={formCreateServiceRef}
                onSubmit={(e) => {handleCreateService(e)}}
            >
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <select
                                className="form-select"
                                onChange={(e) => {handleSearchService(e.target.value)}}
                            >
                                <option>-Categoria-</option>
                                {categories && categories.map((category, index) =>(
                                    <option
                                        key={index}
                                        value={category.id}
                                    >{category.name}</option>
                                ))}
                            </select>
                            <label className="form-label">Categoria</label>
                        </div>
                    </div>
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <select
                                className={errors.name ? 'form-select is-invalid' : 'form-select'}
                                name="service_id"
                                id="service_id"
                            >
                                <option>-Tipo-</option>
                                {services && services.map((service, index) =>(
                                    <option
                                        key={index}
                                        value={service.id}
                                    >{service.name}</option>
                                ))}
                            </select>
                            <label>Tipo de servicio</label>
                            {errors && errors.service_id && (
                                <div className="invalid-feedback">
                                    {errors.service_id}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="form-floating">
                        <input type="hidden" name="company_id" value="1" />
                        <input 
                            type="text"
                            className={errors.name ? 'form-control is-invalid' : 'form-control'}
                            placeholder="compañia"
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
                <div className="form-check mb-3">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="flexCheckDefault"
                        onChange={(e) => {handleCopyNameService(e)}}
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault"
                    >
                        Usar nombre por defecto
                    </label>
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary mb-2"
                        disabled={isLoading}
                    >
                        {isLoading ? <Spinner /> : 'Crear servicio'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCanceCreateService"
                        disabled={isLoading}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default MyServiceCreateModal;