import React from 'react';

// Layout
import DashboardLayout from './DashboardLayout';

// Components
import Panel from 'components/Panel';
import { NavLink } from 'react-router-dom';

const PolicyEditLayout = ({title, tabs, children}) => {

    return (
        <DashboardLayout>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{ title }</h1>
            </div>
            <Panel>
                <div className="conatiner mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="nav">
                                {tabs.map((tab, index) => (
                                    <NavLink
                                        key={index}
                                        className={tab.disabled ? 'nav-link disabled' : 'nav-link'}
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

export default PolicyEditLayout; 