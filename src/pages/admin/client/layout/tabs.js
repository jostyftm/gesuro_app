import { 
    DASHBOARD_CLIENT_EDIT_ROUTE,
    DASHBOARD_CLIENT_POLICY_ROUTE
} from "constants/routes";

export const getTabs = (id) => {
    return [
        {
            title: 'Información personal',
            to: DASHBOARD_CLIENT_EDIT_ROUTE(id),
        },
        {
            title: 'Mis polizas',
            to: DASHBOARD_CLIENT_POLICY_ROUTE(id)
        },
    ];
}
