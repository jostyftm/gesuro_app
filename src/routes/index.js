import React from 'react';
import { 
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';

// Pages when user is unAuthenticate
import LoginPage from 'pages/auth/LoginPage';
import ForgotPasswordPage from 'pages/auth/ForgotPasswordPage';

// Pages when user is auhtenticated
import AdminHome from 'pages/admin';

import CompanyList from 'pages/admin/company/List';
import CompanyNew from 'pages/admin/company/New';
import CompanyEdit from 'pages/admin/company/Edit';

import CategoryList from 'pages/admin/category/List';
import CategoryNew from 'pages/admin/category/New';
import CategoryEdit from 'pages/admin/category/Edit';

import UserList from 'pages/admin/user/List';
import UserNew from 'pages/admin/user/New';
import UserPersonalInformation from 'pages/admin/user/PersonalInformation';

import ClientList from 'pages/admin/client/List';
import ClientPolicy from 'pages/admin/client/Policy';
import ClientAditionalInformationPage from 'pages/admin/client/AditionalInformation';

import EmployeeListPage from 'pages/admin/employee/List';
import EmployeeWorkinglInformationPage from 'pages/admin/employee/WorkingInformation';

import PolicyListPage from 'pages/admin/policy/List';
import PolicyNewPage from 'pages/admin/policy/New';
import PolicyEditPage from 'pages/admin/policy/Edit';
import PolicyPaymentPage from 'pages/admin/policy/Payment';

import PaymentListPage from 'pages/admin/payment/List';

// Constants
import {
    COMPANY,
    CATEGORY,
    PATH,
    USER,
    CLIENT,
    EMPLOYEE,
    POLICY,
    PAYMENT
} from 'constants/routes';

// Pages Unauhtenticated
export const UnAuthenticateRoutes = () => {
    
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route exact path="/forgotPassword" component={ForgotPasswordPage} />
            </Switch>
        </Router>
    );
}

export const AuthenticateRoutes = (props) => {

    return (
        <Router>
            <Switch>
                <Route exact path='/' component={AdminHome} />
                <Route exact path={`${PATH}`} component={AdminHome} />
                {/* Companies */}
                <Route exact path={`${COMPANY}`} component={CompanyList} />
                <Route exact path={`${COMPANY}/new`} component={CompanyNew} />
                <Route exact path={`${COMPANY}/:id/edit`} component={CompanyEdit} />
                {/* Categories */}
                <Route exact path={`${CATEGORY}`} component={CategoryList} />
                <Route exact path={`${CATEGORY}/new`} component={CategoryNew} />
                <Route exact path={`${CATEGORY}/:id/edit`} component={CategoryEdit} />
                {/* User*/}
                <Route exact path={`${USER}`} component={UserList} />
                <Route exact path={`${USER}/new`} component={UserNew} />
                <Route exact path={`${USER}/:id/edit`} component={UserPersonalInformation} />
                <Route exact path={`${USER}/:id/policies`} component={ClientPolicy} />
                {/* Client */}
                <Route exact path={`${CLIENT}`} component={ClientList} />
                <Route exact path={`${CLIENT}/:id/aditional_information`} component={ClientAditionalInformationPage} />
                {/* Employee */}
                <Route exact path={`${EMPLOYEE}`} component={EmployeeListPage} />
                <Route exact path={`${EMPLOYEE}/:id/workin_information`} component={EmployeeWorkinglInformationPage} />
                {/* Policies */}
                <Route exact path={`${POLICY}`} component={PolicyListPage} />
                <Route exact path={`${POLICY}/new`} component={PolicyNewPage} />
                <Route exact path={`${POLICY}/1/edit`} component={PolicyEditPage} />
                <Route exact path={`${POLICY}/1/payments`} component={PolicyPaymentPage} />
                {/* Payments */}
                <Route exact path={`${PAYMENT}`} component={PaymentListPage} />
            </Switch>
        </Router>
    );
}