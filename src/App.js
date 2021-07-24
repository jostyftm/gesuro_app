import React, { useEffect } from 'react';

// Css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'App.css';

// Routes
import {
  UnAuthenticateRoutes,
  AuthenticateRoutes
} from 'routes';

// Utils
import {getUserLogged} from 'utils/AuthUtil';

// Hooks
import useAuth from 'hooks/UseAuth';

const App = () => {

  // Hooks
  const {
    isLogged, 
    setIsLogged,
    setUserLogged
  } = useAuth();

  useEffect( () => {

    let user = getUserLogged();

    if(user) {
      setUserLogged(user);
      setIsLogged(true);
    }
  },[setUserLogged, setIsLogged]);

  return isLogged ? 
      <AuthenticateRoutes /> :
      <UnAuthenticateRoutes /> ;
}

export default App;
