import Modal from "components/Modal";
import React, { useEffect, useRef, useState } from "react";
import { allCharges } from "services/chargeService";
import { allITypes } from "services/identificationTypeService";
import { cathErrors } from "utils/errors";

const EmployeeCreateModal = ({onCreate, withHeadquarter,...rest}) => {

    const [identifications, setIdentifications] = useState([]);
    const [charges, setCharges] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErros] = useState([]);
    const [headquarters, setHeadquarters] = useState([]);

    const formCreateEmployeeRef = useRef(null);

    const fetchData = async () => {

        setIsLoading(true);
        try{
            const identificationsResponse = await allITypes();
            const chargesResponse = await allCharges();

            if(withHeadquarter) {
                // const headquarterResponse = await 
            }

            setIdentifications(identificationsResponse.data);
            setCharges(chargesResponse.data);
            
        }catch(err){
            cathErrors(err);
        }
        setIsLoading(false);
    }
    
    const handleCreateEmployee = (e) => {
        e.preventDefault();

        const formData = new FormData(formCreateEmployeeRef.current);

        setErros([]);
        setIsLoading(true);

    }

    useEffect(() => {

        fetchData();

        return () => {
            setIdentifications([])
            setCharges([])
        }
    }, [])

    return(
        <Modal
            {...rest}
            title="Crear empleado"
            subtitle="Crea a tus empleados para que comiecen a trabajas en las sedes de tu empresa"
        >
            <form 
                className="mt-3"
                ref={formCreateEmployeeRef}
                onSubmit={(e) => {handleCreateEmployee(e)}}
            >
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="name"
                                className="form-control"
                                placeholder="Pepito"
                            />
                            <label>Nombre</label>
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="last_name"
                                className="form-control"
                                placeholder="Perez"
                            />
                            <label>Apellidos</label>
                            <div className="invalid-feedback">
                                Please enter a message in the textarea.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="identification_type_id"
                            >
                                <option className="text-muted">- Seleccione uno -</option>
                                {identifications && identifications.map((identification, index) => (
                                    <option 
                                        key={index}
                                        value={identification.id}
                                    >
                                        {identification.name}
                                    </option>
                                ))}
                            </select>
                            <label>Tipo de documento</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="identification_number"
                                className="form-control"
                                placeholder="Perez"
                            />
                            <label>Número de documento</label>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-floating mb-3">
                            <select 
                                className="form-select" 
                                name="charge_id"
                            >
                                <option className="text-muted">- Seleccione uno -</option>
                                {charges && charges.map((charge, index) =>(
                                    <option
                                        key={index}
                                        value={charge.id}
                                    >
                                        {charge.name}
                                    </option>
                                ))}
                            </select>
                            <label>Cargo</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating mb-3">
                            <input 
                                type="text"
                                name="identification_number"
                                className="form-control"
                                placeholder="pepito@mail.com"
                            />
                            <label>Correo electrónico</label>
                        </div>
                    </div>
                </div>  
                <div className="d-grid">
                    <button className="btn btn-primary  mb-2">Crear empleado</button>
                    <button 
                        className="btn btn-default border"
                        data-bs-dismiss="modal"
                    >Cancelar</button>
                </div>
            </form>
        </Modal>
    );
}

export default EmployeeCreateModal;