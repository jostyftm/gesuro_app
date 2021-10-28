import { 
    DASHBOARD, 
    DASHBOARD_MY_HEADQUARTER_LIST, 
    DASHBOARD_MY_HEADQUARTER_NEW
} from "constants/routes";

export const headquarterListBreadcum = [
    {
        label: 'Inicio',
        active: false,
        to: DASHBOARD
    },
    {
        label: 'Sedes',
        active: true,
        to: DASHBOARD_MY_HEADQUARTER_LIST
    },
];

export const headquarterCreateBreadcum = [
    {
        label: 'Inicio',
        active: false,
        to: DASHBOARD
    },
    {
        label: 'Sedes',
        active: false,
        to: DASHBOARD_MY_HEADQUARTER_LIST
    },
    {
        label: 'Crear sede',
        active: true,
        to: DASHBOARD_MY_HEADQUARTER_NEW
    },
];

export const headquarterEditBreadcum = [
    {
        label: 'Inicio',
        active: false,
        to: DASHBOARD
    },
    {
        label: 'Sedes',
        active: false,
        to: DASHBOARD_MY_HEADQUARTER_LIST
    },
    {
        label: 'Editar sede',
        active: true,
        to: DASHBOARD_MY_HEADQUARTER_NEW
    },
];