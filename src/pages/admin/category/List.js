import React from 'react';

// Components
import Panel from 'components/Panel';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';

import { Link } from 'react-router-dom';

// Constants
import {
    CATEGORY as CATEGORY_ROUTE
} from 'constants/routes';

const CategoryList = () => {

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Categorias</h1>
                <Link 
                    className="btn btn-sm btn-primary"
                    to={`${CATEGORY_ROUTE}/new`}
                >
                    Crear categoria
                </Link>
            </div>
            <Panel>
                <div className="d-flex justify-content-between">
                    <div></div>
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
                                <th>Descripción</th>
                                <th>Fecha de creacion</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Seguro</td>
                                <td>a qui va la descripcripción, pero cortada..</td>
                                <td>hoy</td>
                                <td>hoy </td>
                                <td>
                                    <Link
                                        className="btn btn-sm btn-outline-primary"
                                        to={`${CATEGORY_ROUTE}/1/edit`}
                                    >
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Panel>
        </DashboardLayout>
    );
}

export default CategoryList;