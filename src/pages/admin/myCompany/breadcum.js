import { DASHBOARD, DASHBOARD_MY_COMPANY } from "constants/routes";

export const myCompanyBreadcum = [
    {
        label: 'Inicio',
        active: false,
        to: DASHBOARD
    },
    {
        label: 'Mi empresa',
        active: true,
        to: DASHBOARD_MY_COMPANY
    },
];