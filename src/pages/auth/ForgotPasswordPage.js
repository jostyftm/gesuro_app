import React, { useRef, useState } from 'react';

// Layout
import DefaultLayout from 'layouts/DefaultLayout';
import { Link } from 'react-router-dom';
import Panel from 'components/Panel';

const ForgotPasswordPage = (props) => {

    const [emailSended,setEmailSended] = useState(false);

    const formPassworReset = useRef(null);

    const handleSendEmail = (e) => {
        e.preventDefault();

        setEmailSended(true);
        console.log(formPassworReset.current);
    }

    return (
        <DefaultLayout>
            <div className="row">
                <div className="col-md-7 col-lg-5 mx-auto">
                    {/* Form password reset */}
                    <div className={`my-5 ${emailSended ? 'd-none' : ''}`}>
                        <Panel>
                            <div className="my-3 text-center">
                                <img 
                                    src="https://via.placeholder.com/100" 
                                    className ="rounded-circle"
                                    alt="recuperar contraseña"
                                />
                                <h5 className="my-3">Recuperar contraseña</h5>
                                <span>
                                    Ingresa tu dirección de correo electronico y te enviaremos instrucciones para restablecer tu contraseña.
                                </span>
                            </div>
                            <form ref={formPassworReset} onSubmit={handleSendEmail}>
                                <div className="mb-3">
                                    <label>Correo electronico</label>
                                    <input 
                                        type="text" 
                                        name="email" 
                                        className="form-control"
                                    />
                                </div>
                                <div className="d-grid">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Continuar
                                    </button>
                                </div>
                            </form>
                            <div className="text-center mt-3">
                            <span>
                                ¿Tiene cuenta? inicia sesión 
                                <Link className="mx-2" to='/'>
                                    <b>aqui</b>
                                </Link>
                            </span>
                        </div>
                        </Panel>
                    </div>

                    {/* Message when email was sended */}
                    <div className={`my-5 ${ !emailSended ? 'd-none' : ''}`}>
                        <Panel>
                            <div className="my-3 text-center">
                                <img 
                                    src="https://via.placeholder.com/100" 
                                    className ="rounded-circle"
                                    alt="recuperar contraseña"
                                />
                                <h5 className="my-3">Verifica tu bandeja de correo</h5>
                                <span>
                                    Por favor verifica la bandeja de entrada del correo electronico <b>correo@mail.com</b> para obtener instrucciones sobre como restrablecer tu contraseña.
                                </span>
                            </div>
                            <form>
                                <input type="hidden" value="correo@mail.com" />
                                <div className="d-grid gap-2">
                                    <button 
                                        type="submit"
                                        className="btn border bg-white py-2"
                                    >
                                        Reenviar correo
                                    </button>
                                    <Link 
                                        to='/'
                                        className="btn btn-primary py-2"
                                    >
                                        Iniciar sesion
                                    </Link>
                                </div>
                            </form>
                        </Panel>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default ForgotPasswordPage;