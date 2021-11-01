import React from "react";

import useAuth from 'hooks/UseAuth';
import { Redirect, Route, useLocation } from "react-router";
import { DASHBOARD } from "constants/routes";

const PublicRoute = ({component: Component, ...rest}) =>{

    const {isLogged} = useAuth();

    let location = useLocation();

    if(location.pathname === '/login' && isLogged){
        return <Redirect to={DASHBOARD} />
    }

    return(
        <Route {...rest} component={Component} />
    );
}

export default PublicRoute;