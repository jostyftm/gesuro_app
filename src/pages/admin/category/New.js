import React from 'react';

// Layout 
import DashboardLayout from 'layouts/DashboardLayout';

// Components
import Panel from 'components/Panel';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags } from '@fortawesome/free-solid-svg-icons';

// Constants
import {
    CATEGORY as CATEGORY_ROUTE
} from 'constants/routes';

const CategoryNew = () => {
    return(
        <DashboardLayout>
            <div>
                <h1>Crear categoria</h1>
            </div>
            <Panel>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <form className="row">
                                <div className="col-md-12 mb-3">
                                    <label>Nombre</label>
                                    <input 
                                        name="name"
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-12 mb-3">
                                    <label>Descripción</label>
                                    <textarea
                                        className="form-control"
                                    >

                                    </textarea>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary" type="submit">Crear categoria</button>
                                    <Link 
                                        className="btn btn-light" 
                                        to={CATEGORY_ROUTE}
                                    >
                                        Cancelar
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5 text-center p-4">
                            <FontAwesomeIcon icon={faTags} size="5x" />
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>
            </Panel>
        </DashboardLayout>
    );
}

export default CategoryNew;