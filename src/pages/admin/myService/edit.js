import { faEllipsisH, faFileMedicalAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Panel from "components/Panel";
import Spinner from "components/Spiner";
import DashboardLayout from "layouts/DashboardLayout";
import React, { useState, useEffect, useRef } from "react";
import Moment from "react-moment";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { allInsurrancesByCompany, allInsurrancesByServiceCompany, getServiceCompany, updateServiceCompany } from "services/companyServicesService";
import { allServiceCategory, serviceCategoryGetServices } from "services/serviceCategoryService";
import { cathErrors } from "utils/errors";
import MyServiceAddInsuranceCompanyModal from "./insuranceCompany/add";
import MyServiceDeleteInsuranceCompanyModal from "./insuranceCompany/delete";
import MyServiceEditInsuranceCompanyModal from "./insuranceCompany/edit";

const MyServiceEditPage = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);
    const [companyService, setCompanyService] = useState({});
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState('');
    const [services, setServices] = useState([]);
    const [insurrances, setInsurrances] = useState([]);
    const [insurranceSelected, setInsurranceSelected] = useState({});
    
    // 
    const params = useParams();

    //
    const formUpdateServiceRef = useRef(null); 

    const fetchData = async () => {

        setIsLoading(true);
        try{

            const responseCategory = await allServiceCategory();
            setCategories(responseCategory.data);

            const responseService = await getServiceCompany(params.id);
            setCompanyService(responseService.data);

            const {service} = responseService.data;
            setCategoryId(service.service_category_id)
            const responseServices = await serviceCategoryGetServices(service.service_category_id);
            setServices(responseServices.data);

            
        }catch(err){
            cathErrors(err)
        }

        setIsLoading(false);
    }

    const fetchInsurrances = async () => {
        const responseInsurrances = await allInsurrancesByServiceCompany(params.id);
        setInsurrances(responseInsurrances.data);
    }

    useEffect(() => {

        fetchData();
        fetchInsurrances();

        return () => {
            setCompanyService({})
            setInsurrances([])
            setCategories([])
            setServices([])
        }
    }, [])

    const handleSearchService = async (category_id) => {

        setCategoryId(category_id);

        setIsLoading(true)

        try{
            const responseServices = await serviceCategoryGetServices(category_id);
            setServices(responseServices.data);

        }catch(err){
            cathErrors(err);
        }

        setIsLoading(false)
    }

    const handleUpdateCompanyService = (e) => {
        e.preventDefault();

        const formData = new FormData(formUpdateServiceRef.current);

        let data = {
            service_id: formData.get('service_id'),
            name: formData.get('name')
        }

        setIsLoading(true)
        setErrors([])
        updateServiceCompany(params.id, data)
        .then(resp => {
            setIsLoading(false)
            toast("Servici actualizado")
        })
        .catch(err =>{
            setIsLoading(false)

            if(err.status === 422)
                setErrors(err.data.data)
            else
                cathErrors(err)
        })
    }
    return(
        <DashboardLayout>
            <Panel>
                <form 
                    className="container"
                    ref={formUpdateServiceRef}
                    onSubmit={(e) => {handleUpdateCompanyService(e)}}
                >
                    <div className="row">
                        <div className="col-md-5">
                            <FontAwesomeIcon
                                icon={faFileMedicalAlt} 
                                size="2x" 
                            />
                            <h6 className="fs-5 my-2">Información</h6>
                            <span className="text-muted">
                                Configura la información sobre tu servicio.
                            </span>
                        </div>
                        <div className="col-md-7">
                            <div className="row">
                                <div className="mb-3 col">
                                    <div className="form-floating">
                                        <select
                                            className="form-select"
                                            value={categoryId}
                                            onChange={(e)=>{handleSearchService(e.target.value)}}
                                        >
                                            {categories && categories.map((category, index) => (
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
                                            className={errors.service_id ? 'form-select is-invalid' : 'form-select'}
                                            value={companyService.service_id}
                                            onChange={(e)=>{setCompanyService({...companyService, service_id:e.target.value})}}
                                            name="service_id"
                                        >
                                            {services && services.map((service, index)=>(
                                                <option
                                                    key={index}
                                                    value={service.id}
                                                >
                                                    {service.name}
                                                </option>
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
                            <div className="mb-3">
                                <div className="form-floating">
                                    <input 
                                        type="text"
                                        className="form-control"
                                        placeholder="nombre"
                                        name="name"
                                        defaultValue={companyService.name || ''}
                                    />
                                    <label className="form-label">Nombre</label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary"
                                disabled={isLoading}
                            >
                                {isLoading ? <Spinner /> : 'Actualizar información'}
                            </button>
                        </div>
                    </div>
                </form>
            </Panel>
            <Panel>
            <div className="d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-sm btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#modalAddInsurance"
                        >
                            Agregar aseguradora
                        </button>
                    </div>
                    <div className="input-group mb-3 w-25">
                        
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Aseguradora</th>
                                <th>Precio</th>
                                <th>Comisión %</th>
                                <th>Fecha de creación</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (
                                <tr>
                                    <td colSpan="6">
                                        <Spinner color="primary" />
                                    </td>
                                </tr>
                            )}
                            {!isLoading && insurrances && insurrances.map((insurrance, index) =>(
                                <tr
                                    key={index}
                                >
                                    <td>{insurrance.name}</td>
                                    <td>$ {insurrance.pivot.price || 0}</td>
                                    <td>{insurrance.pivot.percentage_commission || 0}%</td>
                                    <td>
                                        <Moment format="LLL">
                                            {insurrance.created_at}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="LLL">
                                            {insurrance.updated_at}
                                        </Moment>
                                    </td>
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
                                                        data-bs-target="#modalEditInsurance"
                                                        onClick={(e)=>{setInsurranceSelected(insurrance)}}
                                                    >
                                                        Editar aseguradora
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item text-danger"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalDeleteInsurance"
                                                        onClick={(e)=>{setInsurranceSelected(insurrance)}}
                                                    >
                                                        Eliminar aseguradora
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
            </Panel>
            <MyServiceAddInsuranceCompanyModal 
                id="modalAddInsurance"
                serviceId={params.id}
                onCreate={(result) =>{if(result)fetchInsurrances()}}
            /> 
            <MyServiceEditInsuranceCompanyModal 
                id="modalEditInsurance" 
                insurrance={insurranceSelected}
                onUpdate={(result) => {if(result)fetchInsurrances()}}
            />
            <MyServiceDeleteInsuranceCompanyModal 
                id="modalDeleteInsurance" 
                insurrance={insurranceSelected}
                onDelete={(result) => {if(result)fetchInsurrances()}}
            />
        </DashboardLayout>
    );
}

export default MyServiceEditPage;