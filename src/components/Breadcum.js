import React from "react";
import { Link } from "react-router-dom";

const BreadcumItem = ({item}) => {

    if(item.active){
        return(
            <li 
                className={item.active ? 'breadcrumb-item active': 'breadcrumb-item'}
                aria-current="page"
            >
                {item.label}
            </li>
        );
    }

    return (
        <li 
            className={item.active ? 'breadcrumb-item active': 'breadcrumb-item'}
        >
            <Link 
                to={item.to}
            >
                {item.label}
            </Link>
        </li>
    );
}

const Breadcum = ({links}) => {

    return (
        <nav 
            aria-label="breadcrumb"
        >
            <ol className="breadcrumb">
                {links && links.map((link, index) =>(
                    <BreadcumItem item={link} key={index} /> 
                ))}
            </ol>
        </nav>
    );
}

export default Breadcum;