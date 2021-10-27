import React from "react";

// 
import DashboardLayout from "./DashboardLayout";

// 
import { NavLink } from "react-router-dom";

// 
import { DASHBOARD_MY_HEADQUARTER_DETAIL_ROUTE, DASHBOARD_MY_HEADQUARTER_EMPLOYEES_ROUTE } from "constants/routes";

// 
import { useParams } from "react-router";
import Panel from "components/Panel";

const HeadquarterDetailLayout = ({children}) => {

    const params = useParams();

    return (
        <DashboardLayout title="Sede detalle">
            <Panel className="bg-white">
                <nav className="nav justify-content-center">
                    <NavLink
                        className="nav-link"
                        to={DASHBOARD_MY_HEADQUARTER_DETAIL_ROUTE(params.id)}
                        activeClassName="border-2 border-bottom border-primary"
                        exact
                    >
                        Detalle
                    </NavLink>
                    <NavLink
                        className="nav-link"
                        to={DASHBOARD_MY_HEADQUARTER_EMPLOYEES_ROUTE(params.id)}
                        activeClassName="border-2 border-bottom border-primary"
                        exact
                    >
                        Empleados
                    </NavLink>
                </nav>
                <div className="container py-3 mt-4">
                    {children}
                </div>
            </Panel>
        </DashboardLayout>
    )
}

export default HeadquarterDetailLayout;