import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { updatePhone } from "services/phoneService";
import { cathErrors } from "utils/errors";

const PhoneEditModal = ({phone, onUpdate,...rest}) => {

    const [isSaving, setIsSaving] = useState(false);
    const [errors, setErrors] = useState([]);

    const formUpdatePhoneRef = useRef(null);

    const handlePpdatePhone = (e) => {
        e.preventDefault();

        const formData = new FormData(formUpdatePhoneRef.current);

        let data = {
            phone: formData.get('phone'),
        }

        setIsSaving(true)
        setErrors([])
        updatePhone(phone.id, data)
        .then(resp => {
            setIsSaving(false)
            onUpdate(true)
            toast("Teléfono actualizado")
            document.querySelector("#btnCancelUpdatePhone").click();
            formUpdatePhoneRef.current.reset();
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

    return(
        <Modal
            title="Editar telefono"
            {...rest}
        >
            <form
                onSubmit={(e) => {handlePpdatePhone(e)}}
                ref={formUpdatePhoneRef}
            >
                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        name="phone"
                        className="form-control is-invalid"
                        placeholder="Pepito"
                        defaultValue={phone.phone}
                    />
                    <label>Teléfono</label>
                    <div className="invalid-feedback">
                        El telefono es requerido
                    </div>
                </div>
                <div className="d-grid">
                    <button 
                        className="btn btn-primary"
                        disabled={isSaving}
                    >
                        {isSaving ? <Spinner /> : 'Actualizar teléfono'}
                    </button>
                    <button 
                        className="btn btn-default" 
                        data-bs-dismiss="modal"
                        id="btnCancelUpdatePhone"
                        disabled={isSaving}
                        >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default PhoneEditModal;