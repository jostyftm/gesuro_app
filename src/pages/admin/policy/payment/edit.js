import Modal from "components/Modal";
import React from "react";

const PaymentEditModal = ({policy,...rest}) => {
    return(
        <Modal
            {...rest}
            title="Editar pago"
            subtitle="Lleva el control de los pagos de tus clientes"
        >
            <div className="alert alert-info">
                Tenga encuenta que al editar un pago puede afectar resultados en la contabilidad.
            </div>
            <form>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <select className="form-select">
                                <option>- Seleccione un tipo -</option>
                            </select>
                            <label className="form-label">Tipo de recaudo</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <select className="form-select">
                                <option>- Seleccione un tipo -</option>
                            </select>
                            <label className="form-label">Estado</label>
                        </div>
                    </div>
                </div>
                <div className="mb-3 col">
                    <div className="form-floating">
                        <input 
                            className="form-control"
                            type="date"
                        />
                        <label className="form-label">Fecha limite de pago</label>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input 
                                type="number"
                                className="form-control"
                            />
                            <label className="form-label">Total a pagar</label>
                        </div>
                    </div>
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input 
                                type="number"
                                className="form-control"
                            />
                            <label className="form-label">Comisión</label>
                        </div>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                    >
                        Actualizar pago
                    </button>
                    <button
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default PaymentEditModal;