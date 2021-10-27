import React from 'react';
import { Link } from 'react-router-dom';

// Icons
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell} from '@fortawesome/free-solid-svg-icons';

const NavbarDashboard = () => {

    const handleLogout = async(e) => {
        e.preventDefault();
    } 

    return (
        <nav className="nav justify-content-between pe-4 mt-3">
            <div></div>
            <div className="d-flex align-items-center">
                <div className="mx-3 dropdown">
                    <div 
                        className="" 
                        to="#" 
                        id="navbarNotification" 
                        role="button" 
                        data-bs-toggle="dropdown" 
                        aria-expanded="false"
                    >
                        <span 
                            className="badge bg-primary rounded-circle position-absolute mx-3"
                        >
                            5
                        </span>
                        <FontAwesomeIcon 
                            // style={{marginTop:5}}
                            className="mt-2 ms-2"
                            icon={faBell} size="lg" 
                        />
                    </div>
                    <div
                        className="dropdown-menu" 
                        aria-labelledby="navbarNotification"
                        style={{width:250}}
                    >
                        <span>
                            Aqui va la notificación 1
                        </span>
                    </div>
                </div>
                <div>
                    <img 
                        src='http://via.placeholder.com/30' 
                        alt='logo'
                        className="rounded-circle mx-2"
                    />
                </div>
                <div>
                    <nav className="navbar-nav">
                        <div className="nav-item dropdown">
                            <Link 
                                className="nav-link text-dark dropdown-toggle" 
                                to="#" 
                                id="navbarScrollingDropdown" 
                                role="button" 
                                data-bs-toggle="dropdown" 
                                aria-expanded="false"
                            >
                                john doe
                            </Link>
                            <nav 
                                className="dropdown-menu" 
                                aria-labelledby="navbarScrollingDropdown"
                            >
                                <Link 
                                    className="dropdown-item" 
                                    to={'/'}
                                >
                                    Configurar cuenta
                                </Link>
                                <hr className="dropdown-divider" />
                                <Link 
                                    className="dropdown-item" 
                                    to={'/'}
                                    onClick={handleLogout}
                                >
                                    Cerrar sesión
                                </Link>
                            </nav>
                        </div>
                    </nav>
                </div>
            </div>
        </nav>
    );
}

export default NavbarDashboard;