import React from 'react';

// Components
import Navbar from 'components/Navbar';

const DefaultLayout = ({children}) => {
    return (
        <>
            <Navbar />
            <div className="container">
                {children}
            </div>
        </>
    )
}

export default DefaultLayout;