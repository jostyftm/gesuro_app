import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { addCompanyServiceCompany } from "services/companyServicesService";
import { allInsuranceCompany } from "services/insuranceCompany";
import { cathErrors } from "utils/errors";

const MyServiceAddInsuranceCompanyModal = ({serviceId, onCreate, ...rest}) => {

    const [companies, setCompanies] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const [errors, setErrors] = useState([]);

    const formAddCompanyRef = useRef(null);

    const fetchCompanies = async () => {
        
        try{
            const responseCompanies = await allInsuranceCompany();
            setCompanies(responseCompanies.data);
        }catch(err){
            cathErrors(err)
        }
    }

    useEffect(() => {

        fetchCompanies();

        return () => {
            setCompanies([])
        }
    }, [])

    const handleAddInsurraceCompany = (e) => {
        e.preventDefault();

        const formData = new FormData(formAddCompanyRef.current);
        formData.append('company_service_id', serviceId)

        setIsSaving(true);
        setErrors([])
        addCompanyServiceCompany(serviceId, formData)
        .then(resp => {
            setIsSaving(false);
            toast("Aseguradora agregada")
            document.querySelector("#btnCancelAddCompany").click();
            formAddCompanyRef.current.reset();
            onCreate(true);
        })
        .catch(err => {
            setIsSaving(false);
            onCreate(false);

            if(err && err.status === 422)
                setErrors(err.data.data)
            else
                cathErrors(err, err.data.message)
        })
    }

    return(
        <Modal
            {...rest}
            title="Agregar aseguradora"
            subtitle="Determina los precios y las comisiones de las aseguradoras"
        >
            <form
                ref={formAddCompanyRef}
                onSubmit={(e) => {handleAddInsurraceCompany(e)}}
            >
                <div className="mb-3 col">
                    <div className="form-floating">
                        <select
                            className="form-select"
                            name="insurance_company_id"
                        >
                            {companies && companies.map((company, index) =>(
                                <option
                                    key={index}
                                    value={company.id}
                                >{company.name}</option>
                            ))}
                        </select>
                        <label className="form-label">Aseguradora</label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="text"
                                className={errors.price ? 'form-control is-invalid' : 'form-control'}
                                placeholder="25%"
                                name="price"
                            />
                            <label className="form-label">Precio</label>
                            {errors && errors.price && (
                                <div className="invalid-feedback">
                                    {errors.price}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="text"
                                className={errors.percentage_commission ? 'form-control is-invalid' : 'form-control'}
                                placeholder="IVA"
                                name="percentage_commission"
                            />
                            <label className="form-label">Comisión %</label>
                            {errors && errors.percentage_commission && (
                                <div className="invalid-feedback">
                                    {errors.percentage_commission}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        type="submit"
                        className="btn btn-primary mb-2"
                        disabled={isSaving}
                    >
                        {isSaving ? <Spinner /> : 'Agregar aseguradora'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCancelAddCompany"
                        disabled={isSaving}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default MyServiceAddInsuranceCompanyModal;