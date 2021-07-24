import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>
                    {/* <img 
                        src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg" 
                        alt="" 
                        width="30" 
                        height="24" 
                        className="d-inline-block align-text-top" 
                    /> */}
                    GESURO
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;