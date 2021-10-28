import React from 'react';

const Panel = ({children}) => {

    return (
        <div className="p-4 bg-white shadow-sm rounded mb-4">
            {children}
        </div>
    );
}

export default Panel;