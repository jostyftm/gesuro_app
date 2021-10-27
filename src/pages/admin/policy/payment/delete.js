import Modal from "components/Modal";
import React from "react";

const PaymentDeleteModal = ({...rest}) => {
    
    return(
        <Modal
            title="Eliminar pago"
            subtitle="¿Esta seguro de eliminar este pago?"
            {...rest}
        >
            <div className="alert alert-info">
                Tenga encuenta que al editar un pago puede afectar resultados en la contabilidad.
            </div>
           <div className="d-grid my-2">
                <button className="btn btn-danger mb-2">Eliminar pago</button>
                <button 
                    className="btn btn-default"
                    data-bs-dismiss="modal"
                >
                    Cancelar
                </button>
            </div> 
        </Modal>
    );
}

export default PaymentDeleteModal;