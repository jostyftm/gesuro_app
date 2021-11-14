import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { updateCompanyServiceCompany } from "services/companyServicesService";
import { allInsuranceCompany } from "services/insuranceCompany";
import { cathErrors } from "utils/errors";

const MyServiceEditInsuranceCompanyModal = ({insurrance, onUpdate, ...rest}) => {
    
    const [companies, setCompanies] = useState([]);
    const [isSaving, setIsSaving] = useState(false);
    const [errors, setErrors] = useState([]);
    
    const formUpdateCompanyRef = useRef(null)

    const fetchCompanies = async () => {
        
        try{
            const responseCompanies = await allInsuranceCompany();
            setCompanies(responseCompanies.data);
        }catch(err){
            cathErrors(err)
        }
    }

    const handleUpdateInsurraceCompany = (e) => {
        e.preventDefault();

        const formData = new FormData(formUpdateCompanyRef.current);

        const companyServiceId = insurrance.pivot.company_service_id;

        let data = {
            insurance_company_id: insurrance.id,
            price: formData.get('price'),
            percentage_commission: formData.get('percentage_commission'),
        };

        setIsSaving(true);
        setErrors([]);
        updateCompanyServiceCompany(companyServiceId, data)
        .then(resp => {
            setIsSaving(false);
            toast('Aseguradora actualizada');
            document.querySelector("#btnCancelUpdateCompany").click();
            onUpdate(true)
        })
        .catch(err => {
            setIsSaving(false);
            onUpdate(false)
            
            if(err.status === 422){
                setErrors(err.data.data);
            }else{
                cathErrors(err);
            }
        })
    }

    useEffect(() => {
        fetchCompanies();

        return () => {
            setCompanies([])
        }  
    }, [])
    return(
        <Modal
            {...rest}
            title="Editar aseguradora"
            subtitle="Manten actualizada los precios y las comisiones de las aseguradoras"
        >
            <form
                ref={formUpdateCompanyRef}
                onSubmit={(e) => {handleUpdateInsurraceCompany(e)}}
            >
                <div className="mb-3 col">
                    <div className="form-floating">
                        <select
                            className="form-select"
                            name="insurance_company_id"
                            value={insurrance.id}
                            onChange={(e)=>{console.log(e)}}
                            disabled
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
                                defaultValue={insurrance.pivot && insurrance.pivot.price}
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
                                defaultValue={insurrance.pivot && insurrance.pivot.percentage_commission}
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
                        {isSaving ? <Spinner /> : 'Actualizar aseguradora'}
                    </button>
                    <button
                        type="button"
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="btnCancelUpdateCompany"
                        disabled={isSaving}
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default MyServiceEditInsuranceCompanyModal;