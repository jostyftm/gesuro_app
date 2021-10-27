import Modal from "components/Modal";
import React from "react";

const MyServiceEditInsuranceCompanyModal = ({...rest}) => {
    return(
        <Modal
            {...rest}
            title="Editar aseguradora"
            subtitle="Manten actualizada los precios y las comisiones de las aseguradoras"
        >
            <form>
                <div className="mb-3 col">
                    <div className="form-floating">
                        <select
                            className="form-select"
                        >
                            <option>-Seleccione una aseguradora-</option>
                        </select>
                        <label className="form-label">Aseguradora</label>
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="25%"
                            />
                            <label className="form-label">% Comisión</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="IVA"
                            />
                            <label className="form-label">% IVA</label>
                        </div>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                    >
                        Editar aseguradora
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

export default MyServiceEditInsuranceCompanyModal;