import Modal from "components/Modal";
import React from "react";

const ServiceCategoryEditModal = ({policy,...rest}) => {
    return(
        <Modal
            {...rest}
            title="Editar categoria"
            subtitle="Especifica las categorias de tus servicios"
        >
            <form>
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
                        <textarea className="form-control" style={{height:'100px'}} />
                        <label className="form-label">Descripción|</label>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                    >
                        Actualizar categoria
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

export default ServiceCategoryEditModal;