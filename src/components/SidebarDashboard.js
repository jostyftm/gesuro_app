import React from 'react';
import {
    menuSidebarDashboard
} from 'constants/menus';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SidebarDashboard = () => {

    return(
        <div className="vh-100">
            <div className="">
                <div className="fw-bold text-center w-100 my-3">GESURO</div>
                <nav className="nav flex-column nav-pills nav-fill">
                    {menuSidebarDashboard.map((section, index) => (
                        <div
                            key={index}
                        >
                            <div>
                                <span>{section.name}</span>
                            </div>
                            <div>
                                {section.links.map((link, indx) =>(
                                    <NavLink 
                                        key={indx}
                                        to={link.to} 
                                        className="nav-link text-secondary px-0 text-sidebar"
                                        activeClassName="active text-white"
                                        exact={link.exact}
                                    >
                                        <FontAwesomeIcon className="ms-4 me-3" icon={link.icon} />
                                        <span>{link.label}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    ))}
                </nav>
            </div>
        </div>
    );
}

export default SidebarDashboard;