import { 
    DASHBOARD_POLICY_EDIT_ROUTE, 
    DASHBOARD_POLICY_PAYMENT_LIST_ROUTES
} from "constants/routes";


export const getTabs = (id) => {
    return [
        {
            title: 'Información de la poliza',
            to: DASHBOARD_POLICY_EDIT_ROUTE(id),
        },
        {
            title: 'Pagos',
            to: DASHBOARD_POLICY_PAYMENT_LIST_ROUTES(id),
        }
    ];
}