import React, { useEffect, useRef, useState } from 'react';

import Modal from 'components/Modal';
import { cathErrors } from 'utils/errors';
import { allProvinces, departamentsGetCities } from 'services/provinceService';
import { createHeadquarter } from 'services/headquarterService';

const HeadquarterNewModal = ({...rest}) => {

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);

    const formCreateHeadquarterRef = useRef(null);

    const fetchProvinces = async () => {

        try{
            const provinceResponse = await allProvinces();
            setProvinces(provinceResponse.data);
        }catch(err){
            cathErrors(err)
        }
    }  

    const fetchCitieByProvince = async (province) => {

        try{
            const citiesResponse = await departamentsGetCities(province);
            setCities(citiesResponse.data);
        }catch(err){
            cathErrors(err);
        }
    }

    const handleCreateHeadquarter = (e) => {
        e.preventDefault();

        const formData = new FormData(formCreateHeadquarterRef.current);

        setErrors([])
        setIsLoading(true);

        createHeadquarter(formData)
        .then(resp => {
            setIsLoading(false);

        })
        .catch(err => {
            setIsLoading(false);

            if(err.status === 422){
                setErrors(err.data.data)
            }else{
                cathErrors(err, err.data.message)
            }
        })
    }

    useEffect(() => {
        fetchProvinces();

        return () => {
            setProvinces([])
            setCities([])
        }
    }, [])

    return (
        <Modal
            {...rest}
            title="Crear sede"
            subtitle="Crea a tus sedes o sucursales de tu empresa"
        >
            <form
                ref={formCreateHeadquarterRef}
                onSubmit={(e) =>{handleCreateHeadquarter(e)}}
            >
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="name"
                                className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                placeholder=" "
                            />
                            <label>Nombre</label>
                            {errors && errors.name && (
                                <div className="invalid-feedback">
                                    {errors.name}
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
                                placeholder="Cra 12"
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
                                className="form-control"
                                placeholder="El jorge"
                            />
                            <label>Barrio</label>
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="departament_id"
                                onChange={(e) => {fetchCitieByProvince(e.target.value)}}
                            >
                                <option className="text-muted">- Seleccione uno -</option>
                                {provinces && provinces.map((province, index) => (
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
                                className={errors.city_id ? 'form-select is-invalid' : 'form-select'}
                                name="city_id"
                            >
                                {cities && cities.map((city, index) => (
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
                <div 
                    className="form-check form-switch mb-3"
                >
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        role="switch" 
                        name="is_principal"
                        id="isprincipalHeadquarter" 
                        
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="isprincipalHeadquarter"
                    >
                        Principal
                    </label>
                </div>
                <div className="d-grid">
                    <button 
                        type="submit"
                        className="btn btn-primary  mb-2"
                    >
                        Crear sede
                    </button>
                    <button 
                        type="button"
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCancelCreateHeadquarter"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default HeadquarterNewModal;