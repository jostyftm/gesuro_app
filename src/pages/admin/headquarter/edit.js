import Modal from 'components/Modal';
import React from 'react'

const HeadquarterEditPage = ({headquarter, ...rest}) => {

    return (
        <Modal 
            title="Editar Sede" 
            subtitle="Editas las oficias con sus direcciones para tener una buena categorización"
            {...rest}
        >
            <form className="mt-3">
                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        name="name"
                        className="form-control is-invalid"
                        placeholder="Seguros don pepito S.A.S"
                    />
                    <label>Nombre</label>
                    <div class="invalid-feedback">
                        Please enter a message in the textarea.
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="124547-9"
                    />
                    <label>Dirección</label>
                </div>
                <div className="form-floating mb-3">
                    <input 
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="3012345678"
                    />
                    <label>Teléfono</label>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                            >
                                <option className="text-muted">- Seleccione uno -</option>
                            </select>
                            <label>Departamento</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="city_id"
                            >
                                <option className="text-muted">- Seleccione uno -</option>
                            </select>
                            <label>Ciudad</label>
                        </div>
                    </div>
                </div>  
                <div className="d-grid">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Actualizar sede
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default HeadquarterEditPage;