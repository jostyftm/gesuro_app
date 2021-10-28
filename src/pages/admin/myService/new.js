import Modal from "components/Modal";
import React from "react";

const MyServiceCreateModal = ({...rest}) => {
    return(
        <Modal
            {...rest}
            title="Crear servicio"
            subtitle="Crear los servicios que va ofrecer tu empresa"
        >
            <form>
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <select
                                className="form-select"
                            >
                                <option>-Categoria-</option>
                            </select>
                            <label className="form-label">Categoria</label>
                        </div>
                    </div>
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <select
                                className="form-select"
                            >
                                <option>-Tipo-</option>
                            </select>
                            <label>Tipo de servicio</label>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="form-floating">
                        <input 
                            type="text"
                            className="form-control"
                            placeholder="compañia"
                        />
                        <label className="form-label">Nombre</label>
                    </div>
                </div>
                <div className="form-check mb-3">
                    <input 
                        className="form-check-input" 
                        type="checkbox" 
                        value="" 
                        id="flexCheckDefault"
                    />
                    <label 
                        className="form-check-label" 
                        htmlFor="flexCheckDefault"
                    >
                        Usar nombre por defecto
                    </label>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                    >
                        Crear servicio
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

export default MyServiceCreateModal;