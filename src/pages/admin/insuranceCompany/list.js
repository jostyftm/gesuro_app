import React, { useEffect, useState } from 'react';

// Components
import Panel from 'components/Panel';
import { 
    faEllipsisH, 
    faExternalLinkAlt 
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Layout
import DashboardLayout from 'layouts/DashboardLayout';
import InsuraceCompnayCreateModal from './new';
import InsuraceCompnayEditModal from './edit';
import InsuranceCompanyDeleteModal from './delete';
import { allInsuranceCompany } from 'services/insuranceCompany';
import { cathErrors } from 'utils/errors';
import Pagination from 'components/Pagination';
import Moment from 'react-moment';
import Spinner from 'components/Spiner';

// Constants


const InsuranceListPage = () => {

    const [companies, setCompanies] = useState([]);
    const [links, setLinks] = useState([]);
    const [query, setQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] =   useState(false);
    const [companySelected, setCompanySelected] = useState({});

    const fetchCompany = () => {

        setIsLoading(true);
        allInsuranceCompany({
            params: {
                paginate:true,
                limit:10,
                page:currentPage
            }
        })
        .then(resp => {
            setIsLoading(false);
            setCompanies(resp.data.data)
            setLinks(resp.data.links)
        })
        .catch(err => {
            setIsLoading(false);

            cathErrors(err);
        })
    }

    useEffect(() => {

        fetchCompany();

        return () => {
            setCompanies([])
            setLinks([])
        }
    }, [query, currentPage])
    return (
        <DashboardLayout>
            <Panel>
                <div className="d-flex justify-content-between">
                    <div>
                        <button 
                            className="btn btn-sm btn-primary"
                            data-bs-toggle="modal" 
                            data-bs-target="#modalCreateInsuraceCompany"
                        >
                            Nueva aseguradora
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
                                <th>Correo electrónico</th>
                                <th>Teléfono</th>
                                <th>Sitio web</th>
                                <th>Fecha de creacion</th>
                                <th>Fecha de actualización</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {isLoading && (
                                <tr>
                                    <td colSpan="7">
                                        <Spinner color="primary" />
                                    </td>
                                </tr>
                            )}
                            {companies && companies.map((company, index) =>(
                                <tr
                                    key={index}
                                >
                                    <td>{company.name}</td>
                                    <td>{company.email}</td>
                                    <td>{company.phone}</td>
                                    <td>
                                        <a
                                            href={company.website}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FontAwesomeIcon 
                                                icon={faExternalLinkAlt} 
                                            />
                                        </a>
                                    </td>
                                    <td>
                                        <Moment format="LLL">
                                            {company.created_at}
                                        </Moment>
                                    </td>
                                    <td>
                                        <Moment format="LLL">
                                            {company.updated_at}
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
                                                        data-bs-target="#modalEditInsuranceConpany"
                                                        onClick={(e) => {setCompanySelected(company)}}
                                                    >
                                                        Editar aseguradora
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        className="dropdown-item text-danger"
                                                        data-bs-toggle="modal" 
                                                        data-bs-target="#modalDeleteInsuranceCompany"
                                                        onClick={(e) => {setCompanySelected(company)}}
                                                    >
                                                        Eliminar aseguradora
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
            <InsuraceCompnayCreateModal 
                id="modalCreateInsuraceCompany" 
                onCreate={(result) =>{if(result) fetchCompany()}}
            />
            <InsuraceCompnayEditModal 
                id="modalEditInsuranceConpany" 
                company={companySelected}
                onUpdate={(result) => {if(result) fetchCompany()}}
            />
            <InsuranceCompanyDeleteModal 
                id="modalDeleteInsuranceCompany" 
                company={companySelected}
                onDelete={(result) => {if(result) fetchCompany()}}
            />
        </DashboardLayout>
    );
}

export default InsuranceListPage;