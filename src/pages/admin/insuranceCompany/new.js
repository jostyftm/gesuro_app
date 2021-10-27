import Modal from "components/Modal";
import React from "react";

const InsuraceCompnayCreateModal = ({policy,...rest}) => {
    return(
        <Modal
            {...rest}
            title="Crear aseguradora"
            subtitle="Crea las aseguradoras con las cuales vas a trabajar"
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
                            <input
                                type="email"
                                className="form-control"
                                placeholder=""
                            />
                            <label className="form-label">Correo electrónico</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="tel"
                                className="form-control"
                                placeholder=""
                            />
                            <label className="form-label">Teléfono</label>
                        </div>
                    </div>
                    <div className="mb-3 col">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                placeholder=""
                            />
                            <label className="form-label">Sitio web</label>
                        </div>
                    </div>
                </div>
                <div className="d-grid">
                    <button
                        className="btn btn-primary mb-2"
                    >
                        Crear aseguradora
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

export default InsuraceCompnayCreateModal;