import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { createInsuranceCompany } from "services/insuranceCompany";
import { cathErrors } from "utils/errors";

const InsuraceCompnayCreateModal = ({onCreate,...rest}) => {

    const [isSaving, setIsSaving] = useState(false);
    const [errors, setErrors] = useState([]);

    // 
    const formCreateInsuranceCompanyRef = useRef(null);

    const handleCreateInsuranceCompany = (e) => {
        e.preventDefault();

        const data = new FormData(formCreateInsuranceCompanyRef.current);

        setIsSaving(true);
        createInsuranceCompany(data)
        .then(resp => {
            setIsSaving(false)
            toast("Aseguradora creada")
            onCreate(true);
            document.querySelector("#createInsuranceCloseBtn").click();
            formCreateInsuranceCompanyRef.current.reset();
        })
        .catch(err => {
            setIsSaving(false)
            onCreate(false);
            
            if(err.status === 422)
                setErrors(err.data.data)
            else
                cathErrors(err)
        })
    }

    return(
        <Modal
            {...rest}
            title="Crear aseguradora"
            subtitle="Crea las aseguradoras con las cuales vas a trabajar"
        >
            <form
                ref={formCreateInsuranceCompanyRef}
                onSubmit={(e) => {handleCreateInsuranceCompany(e)}}
            >
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="name"
                                className={errors.name ? 'form-control is-invalid' : 'form-control'}
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
                            <input
                                type="email"
                                className="form-control"
                                placeholder=""
                                name="email"
                                className={errors.email ? 'form-control is-invalid' : 'form-control'}
                            />
                            <label className="form-label">Correo electrónico</label>
                            {errors && errors.email && (
                                <div className="invalid-feedback">
                                    {errors.email}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="tel"
                                className="form-control"
                                placeholder=""
                                name="phone"
                                className={errors.phone ? 'form-control is-invalid' : 'form-control'}
                            />
                            <label className="form-label">Teléfono</label>
                            {errors && errors.phone && (
                                <div className="invalid-feedback">
                                    {errors.phone}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                                name="website"
                                className={errors.website ? 'form-control is-invalid' : 'form-control'}
                            />
                            <label className="form-label">Sitio web</label>
                            {errors && errors.website && (
                                <div className="invalid-feedback">
                                    {errors.website}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                    >
                        {isSaving ? <Spinner /> : 'Crear aseguradora'}
                    </button>
                    <button
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                        id="createInsuranceCloseBtn"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default InsuraceCompnayCreateModal;