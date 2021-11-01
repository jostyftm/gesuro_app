import React, { useRef, useState } from 'react';

// Layout
import DefaultLayout from 'layouts/DefaultLayout';

// Services
import {login} from 'services/AuthService';

// Components
import Spinner from 'components/Spiner';
import Panel from 'components/Panel';

// Helpers
import { saveUserSession } from 'utils/AuthUtil';

// Hooks
import { useHistory } from 'react-router';
import useAuth from 'hooks/UseAuth';

// Constant
import { DASHBOARD } from 'constants/routes';

const LoginPage = (props) => {

    // States
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([]);

    // Ref
    const formLoginRef = useRef(null);

    // Hooks
    const {setUserLogged, setIsLogged} = useAuth();
    const history = useHistory();

    // Functions
    const handleFormlogin = async(e) => {
        e.preventDefault();

        const formDataLogin = new FormData(formLoginRef.current);

        setIsLoading(true);
        setErrors([])
        login(formDataLogin)
        .then(resp => {
            setIsLoading(false);
            
            setUserLogged(resp.data.user)
            setIsLogged(true);

            saveUserSession(resp.data);
            history.push(DASHBOARD)
        })
        .catch(err => {
            setIsLoading(false);

            if(err.status === 422)
                setErrors(err.data.data);
            
            console.log(err)
        });
        
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
                            <form 
                                ref={formLoginRef} 
                                onSubmit={handleFormlogin}
                            >
                                <div className="mb-3">
                                    <label>Correo electronico</label>
                                    <input 
                                        type="text" 
                                        name="email" 
                                        className={errors && errors.email ? `form-control is-invalid` : `form-control`} 
                                    />
                                    {errors && errors.email &&(
                                        <div className="invalid-feedback">
                                            {errors.email}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label>Contraseña</label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        className={errors && errors.password ? `form-control is-invalid` : `form-control`} 
                                    />
                                    {errors && errors.password &&(
                                        <div className="invalid-feedback">
                                            {errors.password}
                                        </div>
                                    )}
                                </div>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? <Spinner /> : 'Iniciar Sesión'}
                                    </button>
                                </div>
                            </form>
                        </Panel>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    )   
}

export default LoginPage;