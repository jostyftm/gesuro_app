import React, { createContext, useEffect, useState } from 'react';
import { getSession } from 'utils/AuthUtil';

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {

    const [isLogged, setIsLogged] = useState(false);
    const [userLogged, setUserLogged] = useState({});

    const getUserAuth = async () => {

        const data = await getSession();

        if(data.user){
            setIsLogged(true);
            setUserLogged(data.user);
        }
    }

    useEffect(() => {

        getUserAuth();

        return () => {
            setUserLogged({})
        }
    }, [])

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