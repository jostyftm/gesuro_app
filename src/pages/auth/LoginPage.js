import React, { useRef, useState } from 'react';

// Layout
import DefaultLayout from 'layouts/DefaultLayout';
import { Link } from 'react-router-dom';
import useAuth from 'hooks/UseAuth';

// Services
import {Login} from 'services/AuthService';
import Panel from 'components/Panel';

const LoginPage = (props) => {

    // States
    const [isLoading, setIsLoading] = useState(false);

    // Hooks
    const {setIsLogged} = useAuth();

    // Ref
    const formLoginRef = useRef(null);

    // Functions
    const handleFormlogin = async(e) => {
        e.preventDefault();

        const formDataLogin = new FormData(formLoginRef.current);

        let data = {
            email: formDataLogin.get('email'),
            password: formDataLogin.get('password'),
        };

        setIsLoading(true);
        await Login(data)
        .then(resp => {
            setIsLogged(true);
            setIsLoading(false);
            
            window.location = '/dashboard';
        })
        .catch(err => {
            console.error(err)
        })
    }

    return(
        <DefaultLayout>
            <div className="row">
                <div className="col-md-5 col-lg-4 mx-auto">
                    <div className="my-5">
                        <Panel>
                            <div className="text-center">
                                <img 
                                    src="https://via.placeholder.com/100" 
                                    className ="rounded-circle"
                                    alt="imgagen de inicio de sesión"
                                />
                                <h5 className="my-3">Iniciar Sesión</h5>
                            </div>
                            <form ref={formLoginRef} onSubmit={handleFormlogin}>
                                <div className="mb-3">
                                    <label>Correo electronico</label>
                                    <input 
                                        type="text" 
                                        name="email" 
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label>Contraseña</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        className="form-control"
                                    />
                                </div>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Iniciando sesión' : 'Iniciar Sesión'}
                                    </button>
                                </div>
                            </form>
                            {/* <div className="text-center mt-3">
                                <Link to={'forgotPassword'}>
                                    ¿Olvidastes tu contraseña?
                                </Link>
                            </div> */}
                        </Panel>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )   
}

export default LoginPage;