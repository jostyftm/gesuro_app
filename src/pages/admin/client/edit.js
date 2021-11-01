import React, { useEffect, useState } from "react";
import { 
    faEllipsisH, 
    faIdCard, 
    faMapMarked, 
    faPhoneAlt 
} from "@fortawesome/free-solid-svg-icons";

// Layout
import ClientEditLayout from "./layout/editLayout";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneDeleteModal from "./phone/delete";
import PhoneEditModal from "./phone/edit";

// Hooks
import { useParams } from "react-router";
import { getClient } from "services/clientService";
import { allITypes } from "services/identificationTypeService";
import { allProvinces, departamentsGetCities } from "services/provinceService";
import { getPhonesByAddress } from "services/addressService";
import PhoneCreateModal from "./phone/new";

const ClientEditPage = () => {

    const [client,setClient] = useState({});
    const [iTypes, setITypes] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [cities, setCities] = useState([]);
    const [user, setUser] = useState({});
    const [address, setAddress] = useState({});
    const [province, setProvince] = useState('');
    const [phones, setPhones] = useState([]);
    const [phoneSelected, setPhoneSelected] = useState({});

    const [errors, setErrors] = useState([])

    // Hooks
    const params = useParams();

    const fetchClient = async () => {

        const responseClient = await getClient(params.id);
        const responseTypes = await allITypes();
        const responseProvince = await allProvinces();

        setITypes(responseTypes.data);
        setProvinces(responseProvince.data);
        setClient(responseClient.data);

        if(client){

            const {user} = responseClient.data;
            const {address} = user;
            const {city}    = address;
            const {phones: responsePhones} = address;
            
            setUser(user);
            setAddress(address);
            setPhones(responsePhones);

            setProvince(city.province_id);

            const responseCities = await departamentsGetCities(city.province_id);
            setCities(responseCities.data);
        }
        
    }

    const fetchPhones = async () => {

        try{

            const responsePhone = await getPhonesByAddress(address.id);
            setPhones(responsePhone.data);
        }catch(err){

        }
    }

    useEffect(() => {
        fetchClient();

        return () => {
            setITypes([]);
            setProvinces([]);
            setClient({});
            setCities([]);
        }
    }, [])

    return(
        <ClientEditLayout>
            <div className="container">
                {/* Personal Information */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faIdCard} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Información básica</h6>
                        <span className="text-muted">
                            Configura la información de tu empleado.
                        </span>
                    </div>
                    <div className="col-md-7">
                        <form className="w-75 mx-auto">
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text"
                                            name="name"
                                            className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                            placeholder="Pepito"
                                            defaultValue={user.name}
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
                                            defaultValue={user.last_name}
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
                                            className={errors.last_name ? 'form-select is-invalid' : 'form-select'}
                                            name="identification_type_id"
                                            value={user.identification_type_id}
                                            onChange={(e) => {setUser({...user, identification_type_id:e.target.value})}}
                                        >
                                            <option className="text-muted">- Seleccione uno -</option>
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
                                            className={errors.last_name ? 'form-control is-invalid' : 'form-control'}
                                            placeholder="Perez"
                                            defaultValue={user.identification_number}
                                        />
                                        <label>Número de documento</label>
                                        {errors && errors.identification_type_id && (
                                            <div className="invalid-feedback">
                                                {errors.identification_type_id}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="form-floating mb-3">
                                <input 
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Perez"
                                    defaultValue={user.email}
                                />
                                <label>Correo electrónico</label>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                >
                                    Actualizar información
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Location Information */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faMapMarked} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Información de ubicación</h6>
                        <span className="text-muted">
                            Configura la dirección de tu cliente.
                        </span>
                    </div>
                    <div className="col-md-7">
                        <form className="w-75 mx-auto">
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text"
                                            name="address"
                                            className={errors.last_name ? 'form-control is-invalid' : 'form-control'}
                                            placeholder="Cra 14A"
                                            defaultValue={address.address}
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
                                            placeholder="barrio"
                                            defaultValue={address.neighborhood}
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
                                            value={province}
                                            onChange={(e) => {setProvince(e.target.value)}}
                                        >
                                            <option className="text-muted">- Seleccione uno -</option>
                                        {provinces && provinces.map((province, index) => (
                                            <option
                                                key={index}
                                                value={province.id}
                                            >{province.name}</option>
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
                                            value={address.city_id}
                                            onChange={(e) => {setAddress({...address, city_id: e.target.value})}}
                                        >
                                            <option className="text-muted">- Seleccione uno -</option>
                                            {cities && cities.map((city, index) => (
                                                <option
                                                    key={index}
                                                    value={city.id}
                                                >{city.name}</option>
                                            ))}
                                        </select>
                                        <label>Ciudad</label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button
                                    className="btn btn-primary"
                                >
                                    Actualizar dirección
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* Phones Information */}
                <div className="row mt-5 mb-5">
                    <div className="col-md-5 px-5">
                        <FontAwesomeIcon 
                            icon={faPhoneAlt} 
                            size="2x" 
                        />
                        <h6 className="fs-5 my-2">Teléfono</h6>
                        <span className="text-muted">
                            Configura los teléfonos de tu cliente para mantenerte en contacto con el.
                        </span>
                    </div>
                    <div className="col-md-7">
                        <div>
                            <button
                                className="btn btn-primary"
                                role="button"
                                data-bs-toggle="modal" 
                                data-bs-target="#modalCreatePhone"
                            >
                                Agregar teléfono
                            </button>
                        </div>
                        <div className="mt-4">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Número</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {phones && phones.map((phone, index) =>(
                                        <tr
                                            key={index}
                                        >
                                           <td>{phone.phone}</td> 
                                           <td>
                                            <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm rounded-pill btn-primary"
                                                        data-bs-toggle="dropdown" 
                                                        aria-expanded="false"
                                                        type="button"
                                                        id="employee"
                                                    >
                                                        <FontAwesomeIcon 
                                                            icon={faEllipsisH}
                                                        />
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu shadow border-0 rounded"
                                                    >
                                                        <li>
                                                            <button
                                                                className="dropdown-item"
                                                                data-bs-toggle="modal" 
                                                                data-bs-target="#modalEditPhone"
                                                                onClick={(e) => {setPhoneSelected(phone)}}
                                                            >
                                                                Editar teléfono
                                                            </button>
                                                        </li>
                                                        <li>
                                                            <button
                                                                to="#"
                                                                className="dropdown-item text-danger"
                                                                data-bs-toggle="modal" 
                                                                data-bs-target="#modalDeletePhone"
                                                                onClick={(e) => {setPhoneSelected(phone)}}
                                                            >
                                                                Eliminar telefono
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                           </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <PhoneCreateModal
                address={address}
                id="modalCreatePhone"
                onCreate={(result) => {if(result) fetchPhones()}}
            />
            <PhoneEditModal 
                id="modalEditPhone" 
                phone={phoneSelected}
                onUpdate={(result) => {if(result) fetchPhones()}}
            />
            <PhoneDeleteModal 
                id="modalDeletePhone" 
                phone={phoneSelected}
                onDelete={(result) => {if(result) fetchPhones()}}
            />
        </ClientEditLayout>
    );
}

export default ClientEditPage;