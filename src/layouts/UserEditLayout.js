import React from 'react';

// Layout
import DashboardLayout from './DashboardLayout';

// Components
import Panel from 'components/Panel';
import { NavLink } from 'react-router-dom';

import {
    USER as USER_ROUTE,
    CLIENT as CLIENT_ROUTE,
    EMPLOYEE as EMPLOYEE_ROUTE
} from 'constants/routes';

const UserEditLayout = ({children}) => {

    const tabs = [
        {
            title: 'Información personal',
            to: `${USER_ROUTE}/1/edit`,
        },
        {
            title: 'Información adicional',
            to: `${CLIENT_ROUTE}/1/aditional_information`,
        },
        {
            title: 'Información Laboral',
            to: `${EMPLOYEE_ROUTE}/1/workin_information`,
        },
        {
            title: 'Polizas',
            to: `${USER_ROUTE}/1/policies`
        },
        // {
        //     title: 'Comisiones',
        //     to: `${EMPLOYEE_ROUTE}/1/commissions`
        // }
    ];

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>Editar cliente</h1>
            </div>
            <Panel>
                <div className="conatiner mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="nav">
                                {tabs.map((tab, index) => (
                                    <NavLink
                                        key={index}
                                        className="nav-link"
                                        to={tab.to}
                                        activeClassName="border-2 border-bottom border-primary"
                                    >
                                        {tab.title}
                                    </NavLink>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>
                {children}
            </Panel>
        </DashboardLayout>
    );
}

export default UserEditLayout; 