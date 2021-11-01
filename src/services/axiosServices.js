import axios from "axios";
import {
    API_URL
} from 'constants/enviroments';
import { TOKEN_AUTH } from "constants/session";
import { getValue, removeUserSession } from "utils/AuthUtil";

const URL_BASE = `${API_URL}/${process.env.REACT_APP_STABLE_VERSION}`;

const service = axios.create({
    baseURL:URL_BASE,
    withCredentials: true
});

service.interceptors.request.use(
    config => {

        const token = getValue(TOKEN_AUTH);

        if(token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        config.headers['Content-Type'] = 'application/json';

        return config;
    }
)

// service.interceptors.response.use(
//     resp => resp,
//     err => {

//         if(err.response.status === 401){
//             removeUserSession();
//             window.location.reload();
//         }

//         return Promise.reject(err)
//     }
// )

export default service;