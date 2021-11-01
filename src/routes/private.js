import React from "react";

import useAuth from 'hooks/UseAuth';
import { Redirect, Route } from "react-router";
import { LOGIN_PAGE } from "constants/routes";

const PrivateRoute = ({component: Component, ...rest}) =>{

    const {isLogged} = useAuth();

    if(!isLogged){
        return <Redirect to={LOGIN_PAGE} />
    }

    return(
        <Route {...rest} component={Component} />
    );
}

export default PrivateRoute;