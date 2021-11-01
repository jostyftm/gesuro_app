import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import { createPhone, updatePhone } from "services/phoneService";
import { cathErrors } from "utils/errors";

const PhoneCreateModal = ({address, onCreate,...rest}) => {

    const [isSaving, setIsSaving] = useState(false);
    const [errors, setErrors] = useState([]);

    const formCreatePhoneRef = useRef(null);

    const handleCreatePhone = (e) => {
        e.preventDefault();

        const formData = new FormData(formCreatePhoneRef.current);
        
        setIsSaving(true)
        setErrors([])
        createPhone(formData)
        .then(resp => {
            setIsSaving(false)
            onCreate(true)
            toast("Teléfono creado")
            document.querySelector("#btnCancelCreatePhone").click();
            formCreatePhoneRef.current.reset();
        })
        .catch(err => {
            setIsSaving(false)
            onCreate(false)

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
                onSubmit={(e) => {handleCreatePhone(e)}}
                ref={formCreatePhoneRef}
            >
                <div className="form-floating mb-3">
                    <input type="hidden" value={address.id} name="address_id"/>
                    <input 
                        type="text"
                        name="phone"
                        className="form-control is-invalid"
                        placeholder="Pepito"
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
                        {isSaving ? <Spinner /> : 'Crear teléfono'}
                    </button>
                    <button 
                        className="btn btn-default" 
                        data-bs-dismiss="modal"
                        id="btnCancelCreatePhone"
                        disabled={isSaving}
                        >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default PhoneCreateModal;