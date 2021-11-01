import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { saveClient } from "services/clientService";
import { allITypes } from "services/identificationTypeService";
import { allProvinces, departamentsGetCities } from "services/provinceService";
import { cathErrors } from "utils/errors";

const ClientCreateModal = ({onCreate,...rest}) => {
    
    // State
    const [iTypes, setITypes] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    // Hooks
    const formCreateClientRef = useRef(null);

    const fetchITypes = async () => {

        try{

            const responseTypes = await allITypes();
            const responseProvince = await allProvinces();
            
            setITypes(responseTypes.data)
            setProvinces(responseProvince.data)
        }catch(err){
            cathErrors(err)
        }
    }

    useEffect(()=> {

        fetchITypes();

        return () => {
            setITypes([])
        } 
    },[])

    const handleChangeSelect = async (e) => {
        
        let value = e.target.value;

        setIsLoading(true)
        const responseCities = await departamentsGetCities(value);
        setCities(responseCities.data);
        setIsLoading(false)
    }

    const handleCreateClient = (e) => {
        e.preventDefault();

        const formData = new FormData(formCreateClientRef.current);

        setErrors([]);
        setIsLoading(true);
        saveClient(formData)
        .then(resp => {
            setIsLoading(false)

            // Return true in the function 
            onCreate(true)
            
            // Close modal
            document.querySelector("#createClientCloseBtn").click();

            // Reset form
            formCreateClientRef.current.reset();
            
        })
        .catch(err => {
            setIsLoading(false)
            onCreate(false)

            console.log(err)
            if(err.status === 422)
                setErrors(err.data.data);
            else
                cathErrors(err)
        })
    }

    return(
        <Modal
            title="Registrar cliente"
            subtitle="¿Esta seguro de eliminar este empleado?"
            {...rest}
        >
            <form 
                className="mx-auto"
                onSubmit={(e) => {handleCreateClient(e)}}
                ref={formCreateClientRef}
            >
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="name"
                                className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Pepito"
                            />
                            <label>Nombre</label>
                            {errors && errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="last_name"
                                className={errors.last_name ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Perez"
                            />
                            <label>Apellidos</label>
                            {errors && errors.last_name && (
                                <div className="invalid-feedback">
                                    {errors.last_name}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="identification_type_id"
                                className={errors.identification_type_id ? 'form-select is-invalid' : 'form-select'}
                            >
                                <option disabled>-Seleccine un tipo-</option>
                                {iTypes && iTypes.map((type, index) =>(
                                    <option
                                        key={index}
                                        value={type.id}
                                    >
                                        {type.name}
                                    </option>
                                ))}
                            </select>
                            <label>Tipo de documento</label>
                            {errors && errors.identification_type_id && (
                                <div className="invalid-feedback">
                                    {errors.identification_type_id}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="identification_number"
                                className={errors.identification_number ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Perez"
                            />
                            <label>Número de documento</label>
                            {errors && errors.identification_number && (
                                <div className="invalid-feedback">
                                    {errors.identification_number}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="text"
                                name="email"
                                className={errors.email ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Perez"
                            />
                            <label>Correo electrónico</label>
                            {errors && errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="number"
                                name="phone"
                                className={errors.phone ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Perez"
                            />
                            <label>Teléfono</label>
                            {errors && errors.phone && (
                                <div className="invalid-feedback">
                                    {errors.phone}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="address"
                                className={errors.address ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Pepito"
                            />
                            <label>Dirección</label>
                            {errors && errors.address && (
                                <div className="invalid-feedback">
                                    {errors.address}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="neighborhood"
                                className={errors.neighborhood ? 'form-control is-invalid' : 'form-control'}
                                placeholder="Perez"
                            />
                            <label>Barrio</label>
                            {errors && errors.neighborhood && (
                                <div className="invalid-feedback">
                                    {errors.neighborhood}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="province_id"
                                onChange={(e) => {handleChangeSelect(e)}}
                            >
                                <option className="text-muted">- Seleccione uno -</option>
                                {provinces && provinces.map((province, index)=>(
                                    <option
                                        key={index}
                                        value={province.id}
                                    >
                                        {province.name}
                                    </option>
                                ))}
                            </select>
                            <label>Departamento</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="city_id"
                                className={errors.city_id ? 'form-select is-invalid' : 'form-select'}
                            >
                                <option className="text-muted" disabled>- Seleccione uno -</option>
                                {cities && cities.map((city, index) =>(
                                    <option
                                        key={index}
                                        value={city.id}
                                    >
                                        {city.name}
                                    </option>
                                ))}
                            </select>
                            <label>Ciudad</label>
                            {errors && errors.city_id && (
                                <div className="invalid-feedback">
                                    {errors.city_id}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary"
                    >
                        {isLoading ? <Spinner /> : 'Registrar cliente'}
                    </button>
                    <button
                        className="btn btn-default my-2 border"
                        data-bs-dismiss="modal"
                        id="createClientCloseBtn"
                    >
                        Cancelar
                    </button>
                </div>
            </form> 
        </Modal>
    );
}

export default ClientCreateModal;