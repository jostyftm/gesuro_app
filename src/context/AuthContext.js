import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false);
    const [userLogged, setUserLogged] = useState({});

    const data = {
        isLogged,
        setIsLogged,
        userLogged,
        setUserLogged
    };

     return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;