import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { updateInsuranceCompany } from "services/insuranceCompany";
import { cathErrors } from "utils/errors";

const InsuraceCompnayEditModal = ({company: companySelectd, onUpdate,...rest}) => {

    const [isSaving, setIsSaving] = useState(false);
    const [errors, setErrors] = useState([]);
    const [company, setCompany] = useState({});

    const formUpdateCompany = useRef(null);

    useEffect(() => {
        setCompany(companySelectd);
    }, [companySelectd])
    const handleUpdateCompany = (e) => {
        e.preventDefault();

        const formData = new FormData(formUpdateCompany.current);

        let data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            website: formData.get('website'),
        }

        setIsSaving(true)
        setErrors([])
        updateInsuranceCompany(company.id, data)
        .then(resp  => {
            setIsSaving(false)
            toast("Aseguradora actualizada");
            onUpdate(true)
            document.querySelector("#btnCancelUpdateCompany").click();
            formUpdateCompany.current.reset();

        })
        .catch(err => {
            setIsSaving(false)

            if(err.status === 422)
                setErrors(err.data.data)
            else
                cathErrors(err)
        })
    }

    return(
        <Modal
            {...rest}
            title="Editar aseguradora"
            subtitle="Actualiza las aseguradoras con las cuales vas a trabajar"
        >
            <form
                ref={formUpdateCompany}
                onSubmit={(e) => {handleUpdateCompany(e)}}
            >
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="text"
                                className={errors.name ? 'form-control is-invalid' : 'form-control'}
                                placeholder=""
                                name="name"
                                defaultValue={company.name}
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
                                className={errors.email ? 'form-control is-invalid' : 'form-control'}
                                placeholder=""
                                name="email"
                                defaultValue={company.email}
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
                                className={errors.phone ? 'form-control is-invalid' : 'form-control'}
                                placeholder=""
                                name="phone"
                                defaultValue={company.phone}
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
                                className={errors.website ? 'form-control is-invalid' : 'form-control'}
                                placeholder=""
                                name="website"
                                defaultValue={company.website}
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
                        disabled={isSaving}
                        type="submit"
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

export default InsuraceCompnayEditModal;