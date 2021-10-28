import { faBuilding, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadquarterDetailLayout from "layouts/HeadquarterDetailLayout";
import React from "react";

const HeadquarterDetailPage = ({headquarter,...rest}) => {

    return(
        <HeadquarterDetailLayout>
            <div className="row mb-5">
                <div className="col-md-5 px-5">
                    <FontAwesomeIcon 
                        icon={faBuilding} 
                        size="2x" 
                    />
                    <h6 className="fs-5 my-2">Información básica</h6>
                    <span className="text-muted">
                        Configura la información sobre tu empresa de tu sede.
                    </span>
                </div>
                <div className="col-md-7">
                    <form className="w-75 mx-auto">
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
                        <div className="mb-3">
                            <button
                                className="btn btn-primary"
                            >
                                Actualizar información
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col-md-5 px-5">
                    <FontAwesomeIcon 
                        icon={faMapMarkedAlt} 
                        size="2x" 
                    />
                    <h6 className="fs-5 my-2">Información de ubicación</h6>
                    <span className="text-muted">
                        Configura la información de ubicación sobre tu sede.
                    </span>
                </div>
                <div className="col-md-7">
                    <form className="w-75 mx-auto">
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
                        <div>
                            <button
                                className="btn btn-primary"
                                type="submit"
                            >
                                Actualizar dirección
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </HeadquarterDetailLayout>
    )
}

export default HeadquarterDetailPage;