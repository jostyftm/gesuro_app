import React from "react";

import { NavLink } from "react-router-dom";
import Panel from "components/Panel";
import { getTabs } from "./tabs";
import { useParams } from "react-router";
// Layout
import DashboardLayout from "layouts/DashboardLayout";

const EditPolicyLayout = ({children}) => {
    
    const params = useParams();

    return(
        <DashboardLayout title="Editar Poliza">
            <Panel>
                <div className="conatiner mb-5">
                    <div className="row">
                        <div className="col-md-12">
                            <nav className="nav">
                                {getTabs(params.id).map((tab, index) => (
                                    <NavLink
                                        key={index}
                                        className="nav-link"
                                        to={tab.to}
                                        activeClassName="border-2 border-bottom border-primary"
                                        exact
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

export default EditPolicyLayout;