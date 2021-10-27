import React from 'react';

// Components
import Navbar from 'components/NavbarDashboard';
import SidebarDashboard from 'components/SidebarDashboard';
import Breadcum from 'components/Breadcum';

// Constants

const DashboardLayout = ({title, breadcumLinks, children}) => {

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <SidebarDashboard />
                    </div>
                    <main className="col-md-10">
                        <Navbar />
                        {title && (
                            <>
                            <div>
                                <h1 className="fs-2">{title}</h1>
                            </div>
                            <Breadcum links={breadcumLinks}/>
                            </>
                        )}
                        <div className="container-fluid px-0">
                            {children}
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default DashboardLayout;