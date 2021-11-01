import React from 'react';
import { 
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';

// 
import PublicRoute from './public';
import PrivateRoute from './private';

// Constants
import { 
    DASHBOARD, 
    DASHBOARD_CLIENT_EDIT, 
    DASHBOARD_CLIENT_LIST,
    DASHBOARD_CLIENT_POLICY, 
    DASHBOARD_EMPLOYEE_EDIT, 
    DASHBOARD_EMPLOYEE_LIST, 
    DASHBOARD_INSURANCE_COMPANY_LIST, 
    DASHBOARD_MY_COMPANY, 
    DASHBOARD_MY_HEADQUARTER_DETAIL, 
    DASHBOARD_MY_HEADQUARTER_EMPLOYEES, 
    DASHBOARD_MY_HEADQUARTER_LIST,
    DASHBOARD_MY_SERVICES_EDIT,
    DASHBOARD_MY_SERVICES_LIST,
    DASHBOARD_PAYMENT_LIST,
    DASHBOARD_POLICY_EDIT,
    DASHBOARD_POLICY_LIST,
    DASHBOARD_POLICY_NEW,
    DASHBOARD_POLICY_PAYMENT_LIST,
    DASHBOARD_SERVICE_CATEGORY_LIST,
    DASHBOARD_SERVICE_LIST,
    LOGIN_PAGE
} from 'constants/routes';

//
import LoginPage from 'pages/auth/LoginPage';

// Pages
import DASHBOARD_HOME_PAGE from 'pages/admin/home/index';
import DASHBOARD_MY_COMPANY_PAGE from 'pages/admin/myCompany/index';

import HeadquaterListPage from 'pages/admin/headquarter/list';
import HeadquarterDetailPage from 'pages/admin/headquarter/detail';
import HeadquarterEmployeeListPage from 'pages/admin/headquarter/employee';

import EmployeeListPage from 'pages/admin/employee/list';
import EmployeeEditPage from 'pages/admin/employee/edit';

import ClientListPage from 'pages/admin/client/list';
import ClientEditPage from 'pages/admin/client/edit';
import ClientPolicyPage from 'pages/admin/client/policies';

import PolicyListPage from 'pages/admin/policy/list';
import PolicyCreatePage from 'pages/admin/policy/new';
import PolicyEditPage from 'pages/admin/policy/edit';
import PolicyPaymentPage from 'pages/admin/policy/payment/list';

import PaymentListPage from 'pages/admin/payment/list';
import MyServiceListPage from 'pages/admin/myService/list';
import MyServiceEditPage from 'pages/admin/myService/edit';

import ServiceCategoryListPage from 'pages/admin/serviceCategory/list';

import ServiceListPage from 'pages/admin/service/list';

import InsuranceCompanyListPage from 'pages/admin/insuranceCompany/list';




const Routes = () => {
    
    return (
        <Router>
            <Switch>
                {/* Home */}
                <PrivateRoute exact path={DASHBOARD} component={DASHBOARD_HOME_PAGE} />
                
                {/* Login page */}
                <PublicRoute exac path={LOGIN_PAGE} component={LoginPage} />

                {/* My company */}
                <PrivateRoute exact path={DASHBOARD_MY_COMPANY} component={DASHBOARD_MY_COMPANY_PAGE} />

                {/* Headquarters */}
                <PrivateRoute exact path={DASHBOARD_MY_HEADQUARTER_LIST} component={HeadquaterListPage} />
                <PrivateRoute exact path={DASHBOARD_MY_HEADQUARTER_DETAIL} component={HeadquarterDetailPage} />
                <PrivateRoute exact path={DASHBOARD_MY_HEADQUARTER_EMPLOYEES} component={HeadquarterEmployeeListPage} />
                
                {/* Employees */}
                <PrivateRoute exact path={DASHBOARD_EMPLOYEE_LIST} component={EmployeeListPage} />
                <PrivateRoute exact path={DASHBOARD_EMPLOYEE_EDIT} component={EmployeeEditPage} />
            
                {/* Clients */}
                <PrivateRoute exact path={DASHBOARD_CLIENT_LIST} component={ClientListPage} />
                <PrivateRoute exact path={DASHBOARD_CLIENT_EDIT} component={ClientEditPage} />
                <PrivateRoute exact path={DASHBOARD_CLIENT_POLICY} component={ClientPolicyPage} />

                {/* Policies */}
                <PrivateRoute exact path={DASHBOARD_POLICY_LIST} component={PolicyListPage} />
                <PrivateRoute exact path={DASHBOARD_POLICY_NEW} component={PolicyCreatePage} />
                <PrivateRoute exact path={DASHBOARD_POLICY_EDIT} component={PolicyEditPage} />
                <PrivateRoute exact path={DASHBOARD_POLICY_PAYMENT_LIST} component={PolicyPaymentPage} />

                {/* My services */}
                <PrivateRoute exact path={DASHBOARD_MY_SERVICES_LIST} component={MyServiceListPage} />
                <PrivateRoute exact path={DASHBOARD_MY_SERVICES_EDIT} component={MyServiceEditPage} />


                {/* Payments */}
                <PrivateRoute exact path={DASHBOARD_PAYMENT_LIST} component={PaymentListPage} />
                
                {/* Service category */}
                <PrivateRoute exact path={DASHBOARD_SERVICE_CATEGORY_LIST} component={ServiceCategoryListPage} />
                
                {/* Service */}
                <PrivateRoute exact path={DASHBOARD_SERVICE_LIST} component={ServiceListPage} />
                
                {/* Insurance Company */}
                <PrivateRoute exact path={DASHBOARD_INSURANCE_COMPANY_LIST} component={InsuranceCompanyListPage} />
            </Switch>
        </Router>
    );
}

export default Routes;