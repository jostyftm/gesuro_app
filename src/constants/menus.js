import { 
    faBuilding,
    faCog,
    faFileContract,
    faFileInvoiceDollar,
    faFileMedicalAlt,
    faHome,
    faHospital,
    faTag,
    faTags,
    faUsers,
    faUserTie
} from "@fortawesome/free-solid-svg-icons";

import { 
    DASHBOARD, 
    DASHBOARD_CLIENT_LIST, 
    DASHBOARD_EMPLOYEE_LIST, 
    DASHBOARD_INSURANCE_COMPANY_LIST, 
    DASHBOARD_MY_COMPANY,
    DASHBOARD_MY_HEADQUARTER_LIST,
    DASHBOARD_MY_SERVICES_LIST,
    DASHBOARD_PAYMENT_LIST,
    DASHBOARD_POLICY_LIST,
    DASHBOARD_SERVICE_CATEGORY_LIST,
    DASHBOARD_SERVICE_LIST
} from "./routes";

export const menuSidebarDashboard = [
    {
        name: 'tu',
        links: [
            {
                exact: true,
                label: 'inicio',
                to: DASHBOARD,
                icon: faHome
            },
            {
                exact: false,
                label: 'clientes',
                to: DASHBOARD_CLIENT_LIST,
                icon: faUsers
            },
            {
                exact: false,
                label: 'pólizas',
                to: DASHBOARD_POLICY_LIST,
                icon: faFileContract
            },
            {
                exact: false,
                label: 'Pagos',
                to: DASHBOARD_PAYMENT_LIST,
                icon: faFileInvoiceDollar
            }
        ]
    },
    {
        name: 'tu empresa',
        links: [
            {
                exact: true,
                label: 'Empresa',
                to: DASHBOARD_MY_COMPANY,
                icon: faCog
            },
            {
                exact: false,
                label: 'sedes',
                to: DASHBOARD_MY_HEADQUARTER_LIST,
                icon: faBuilding
            },
            {
                exact: false,
                label: 'empleados',
                to: DASHBOARD_EMPLOYEE_LIST,
                icon: faUserTie
            },
            {
                exact: false,
                label: 'Mis servicios',
                to: DASHBOARD_MY_SERVICES_LIST,
                icon: faFileMedicalAlt
            }
        ]
    },
    {
        name:"Sistema",
        links:[
            {
                exact:false,
                label:'Categoria servicios',
                to:DASHBOARD_SERVICE_CATEGORY_LIST,
                icon:faTags
            },
            {
                exact:false,
                label:'Servicios',
                to:DASHBOARD_SERVICE_LIST,
                icon:faTag
            },
            {
                exact:false,
                label:'Aseguradoras',
                to:DASHBOARD_INSURANCE_COMPANY_LIST,
                icon:faHospital
            }
        ]
    }
];
