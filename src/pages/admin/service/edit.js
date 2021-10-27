import Modal from "components/Modal";
import React from "react";

const ServiceEditModal = ({policy,...rest}) => {
    return(
        <Modal
            {...rest}
            title="Editar servicio"
            subtitle="Crear los servicios que van a ofrecer las empresas aseguradoras"
        >
            <form>
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                            <label className="form-label">Nombre</label>
                        </div>
                    </div>
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
                </div>
                <div className="mb-3 col">
                    <div className="form-floating">
                        <textarea className="form-control" style={{height:'100px'}} />
                        <label className="form-label">Descripción</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                    >
                        Actualizar servicio
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

export default ServiceEditModal;