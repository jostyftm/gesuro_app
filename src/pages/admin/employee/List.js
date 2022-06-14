import React, { useEffect, useState } from 'react';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';

// Components
import Panel from 'components/Panel';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { DASHBOARD_EMPLOYEE_EDIT_ROUTE } from 'constants/routes';
import EmployeeCreateModal from './new';
import EmployeeDeleteModal from './delete';
import useAuth from 'hooks/UseAuth';
import { cathErrors } from 'utils/errors';
import { companyEmployees } from 'services/companyService';


const EmployeeListPage = () => {

    const [employees, setEmployees] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const {companyId} = useAuth();


    const fetchEmployees = async() => {

        setIsLoading(true);
        
        try{
            const employeesResponse = await companyEmployees(companyId);
            setEmployees(employeesResponse.data);
        }catch(err){
            cathErrors(err);
        }

        setIsLoading(false);
    }

    useEffect(() => {

        fetchEmployees();

        return () => {
            setEmployees([]);
        }
    }, [])
    return (
        <DashboardLayout title="Empleados">
            <Panel>
                <div className="d-flex justify-content-between">
                    <div>
                    <Link
                        to="#"
                        className="btn btn-sm btn-primary mt-2"
                        data-bs-toggle="modal" 
                        data-bs-target="#modalCreateEmployee"
                    >
                        Nuevo empleado
                    </Link>
                    </div>
                    <div className="input-group mb-3 w-25">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="seguro..." 
                            aria-label="seguro..." 
                            aria-describedby="button-addon2" 
                        />
                        <button 
                            className="btn btn-outline-secondary" 
                            type="button" 
                        >
                            Buscar
                        </button>
                    </div>
                </div>
                <div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Cargo</th>
                                <th>Correo electronico</th>
                                <th>Teléfono</th>
                                <th>Fecha de creación</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Joe Valencia</td>
                                <td>Vendedor</td>
                                <td>jsvalencia55@misena.edu.co</td>
                                <td>3011234567</td>
                                <td>hoy</td>
                                <td>hoy </td>
                                <td>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-sm rounded-pill btn-primary"
                                            data-bs-toggle="dropdown" 
                                            aria-expanded="false"
                                            type="button"
                                            id="employee"
                                        >
                                            <FontAwesomeIcon 
                                                icon={faEllipsisH}
                                            />
                                        </button>
                                        <ul
                                            className="dropdown-menu shadow border-0 rounded"
                                        >
                                            <li>
                                                <Link
                                                    to={DASHBOARD_EMPLOYEE_EDIT_ROUTE(1)}
                                                    className="dropdown-item"
                                                >
                                                    Ver empleado
                                                </Link>
                                            </li>
                                            <li>
                                                <button
                                                    to="#"
                                                    className="dropdown-item text-danger"
                                                    data-bs-toggle="modal" 
                                                    data-bs-target="#modalDeleteEmployee"
                                                >
                                                    Eliminar empleado
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Panel>
            <EmployeeCreateModal id="modalCreateEmployee" />
            <EmployeeDeleteModal id="modalDeleteEmployee" />
        </DashboardLayout>
    );
}

export default EmployeeListPage;