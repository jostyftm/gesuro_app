import React from 'react';
import { NavLink } from 'react-router-dom';

// Components
import Navbar from 'components/NavbarDashboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookMedical, faFileInvoiceDollar, faHome, faTags, faUsers, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faBuilding, faIdBadge } from '@fortawesome/free-regular-svg-icons';

// Hooks
import useAuth from 'hooks/UseAuth';

// Services
import {Logout} from 'services/AuthService';

// Constants
import {
    COMPANY,
    CATEGORY,
    PATH,
    USER,
    CLIENT,
    EMPLOYEE,
    POLICY,
    PAYMENT
} from 'constants/routes';


const DashboardLayout = ({children}) => {

    // State

    // Hooks
    const {userLogged} = useAuth();
    
    const links = [
        {
            exact: true,
            to: `${PATH}`,
            icon: faHome,
            title: 'Inicio'
        },
        {
            exact: false,
            to: `${COMPANY}`,
            icon: faBuilding,
            title: 'Empresas'
        },
        {
            exact:false,
            to: `${CATEGORY}`,
            icon: faTags,
            title: 'Categorias'
        },
        {
            exact:false,
            to: `${USER}`,
            icon: faUsers,
            title: 'Usuarios'
        },
        {
            exact:false,
            to: `${CLIENT}`,
            icon: faUserTie,
            title: 'Clientes'
        },
        {
            exact:false,
            to: `${EMPLOYEE}`,
            icon: faIdBadge,
            title: 'Empleados'
        },
        {
            exact:false,
            to: `${POLICY}`,
            icon: faBookMedical,
            title: 'Polizas'
        },
        {
            exact:false,
            to: `${PAYMENT}`,
            icon: faFileInvoiceDollar,
            title: 'Pagos'
        }
    ];
    console.log(`userLogged:`, userLogged);
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-2 bg-white">
                        <div className="vh-100">
                            <div className="position-fixed">
                                <div className="fw-bold text-center w-100 my-3">GESURO</div>
                                <nav className="nav flex-column nav-pills nav-fill">
                                    {links.map((link, index) => (
                                        <NavLink 
                                            key={index}
                                            to={link.to} 
                                            className="nav-link text-start"
                                            activeClassName="active"
                                            exact={link.exact}
                                        >
                                            <FontAwesomeIcon className="ms-4 me-3" icon={link.icon} />
                                            <span>{link.title}</span>
                                        </NavLink>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                    <main className="col-lg-10">
                        <Navbar user={userLogged} logout={Logout} />
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;