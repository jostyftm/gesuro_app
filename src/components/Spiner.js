import React from "react";

const Spinner = ({color}) => {

    const getClass = () => {

        if(color !== null)
            return 'spinner-border text-'+color;
        else
            return 'spinner-border text-light';
    }

    return(
        <div className="d-flex justify-content-center">
            <div 
                className={getClass()} 
                role="status"
                style={
                    {width:"1rem", height:"1rem"}
                }
            >
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
} 

export default Spinner;