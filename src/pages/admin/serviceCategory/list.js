import React, { useEffect, useState } from 'react';

// Components
import Panel from 'components/Panel';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';
import ServiceCategoryCreateModal from './new';
import ServiceCategoryEditModal from './edit';
import ServiceCategoryDeleteModal from './delete';
import { allServiceCategory } from 'services/serviceCategoryService';
import { cathErrors } from 'utils/errors';
import Pagination from 'components/Pagination';
import Spinner from 'components/Spiner';
import Moment from 'react-moment';

// Constants


const ServiceCategoryListPage = () => {

    const [categories, setCategories] = useState([]);
    const [links, setLinks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [categorySelected, setCategorySeledted] = useState({});

    const fetchCategories = async () => {

        try{
            setIsLoading(true)
            const responseCategories = await allServiceCategory({
                params:{
                    paginate:true,
                    page:currentPage,
                    limit: 10
                }
            });
            setIsLoading(false)
            setCategories(responseCategories.data.data);
            setLinks(responseCategories.data.links);
        }catch(err){
            setIsLoading(false)
            cathErrors(err)
        }
    }

    useEffect(() => {

        fetchCategories();

        return () => {
            setCategories([])
            setLinks([])
            setCategorySeledted({})
        }
    }, [currentPage])
    return (
        <DashboardLayout>
            <Panel>
            <div className="d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-sm btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCreateCategory"
                        >
                            Nueva categoria
                        </button>
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
                                <th>Fecha de creacion</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (
                                <tr>
                                    <td colSpan="5">
                                        <Spinner color="primary" />
                                    </td> 
                                </tr>
                            )}
                            {categories && categories.map((category, index) => (
                                <tr>
                                    <td>{category.name}</td>
                                    <td>
                                        <Moment format="LL">
                                            {category.created_at}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="LL">
                                            {category.updated_at}
                                        </Moment>
                                    </td>
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
                                                    <button
                                                        className="dropdown-item"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalEditCategory"
                                                        onClick={(e)=>{setCategorySeledted(category)}}
                                                    >
                                                        Editar categoria
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item text-danger"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalDeleteCategory"
                                                        onClick={(e)=>{setCategorySeledted(category)}}
                                                    >
                                                        Eliminar categoria
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div>
                        <Pagination
                            links={links} 
                            handleClickPagination={
                                (e, page) => {
                                    e.preventDefault();
                                    setCurrentPage(page)
                                }
                            } 
                        />
                    </div>
                </div>
            </Panel>
            <ServiceCategoryCreateModal 
                onCreate={(result) => {if(result)fetchCategories()}}
                id="modalCreateCategory" />
            <ServiceCategoryEditModal 
                category={categorySelected}
                onUpdate={(result) => {if(result)fetchCategories()}}
                id="modalEditCategory" />
            <ServiceCategoryDeleteModal 
                category={categorySelected}
                onDelete={(result) => {if(result)fetchCategories()}}
                id="modalDeleteCategory" />
        </DashboardLayout>
    );
}

export default ServiceCategoryListPage;