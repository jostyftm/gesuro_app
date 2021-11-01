import Modal from "components/Modal";
import Spinner from "components/Spiner";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { deletePhone } from "services/phoneService";
import { cathErrors } from "utils/errors";

const PhoneDeleteModal = ({phone, onDelete,...rest}) => {

    const [isSaving, setIsSaving] = useState(false);

    const handleDeletePhone = (e) => {

        setIsSaving(true)
        deletePhone(phone.id)
        .then(resp => {
            setIsSaving(false)
            toast("Teléfono eliminado");
            document.querySelector("#btnCancelDeletePhone").click();
            onDelete(true)
        })
        .catch(err => {
            onDelete(false)
            setIsSaving(false)
            cathErrors(err)
        })
    }

    return(
        <Modal
            {...rest}
            title="Eliminar empleado"
            subtitle="¿Esta seguro de eliminar este número teléfonico?"
        >
           <div className="d-grid my-2">
                <button 
                    className="btn btn-danger mb-2"
                    onClick={(e)=>{handleDeletePhone()}}
                    disabled={isSaving}
                >
                    {isSaving ? <Spinner /> : 'Eliminar teléfono'}
                </button>
                <button 
                    className="btn btn-default"
                    data-bs-dismiss="modal"
                    id="btnCancelDeletePhone"
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    )
}

export default PhoneDeleteModal;