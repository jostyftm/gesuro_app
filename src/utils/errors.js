import { error404, error429, error500 } from "constants/errors";
import { toast } from "react-toastify";

export const cathErrors = (errorResponse, message = null) => {
    switch(errorResponse.status){
        case 404:
            toast.error(message ? message : error404, {icon:false})
            break;
        case 429:
            toast.error(message ? message : error429, {icon:false})
            break;
        case 500:
            toast.error(message ? message : error500, {icon:false})
            break;
    }
}