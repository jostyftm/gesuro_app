import API from './axiosServices';
import {
    WEB_URL
} from 'constants/enviroments';
import axios from 'axios';

const endpoint = '/auth';

export const login = (data) => {
    return new Promise((resolve, reject) =>{
        axios.get(`${WEB_URL}/sanctum/csrf-cookie`)
        .then(resp => {
            API.post(`${endpoint}/login`, data)
            .then(resp => resolve(resp.data))
            .catch(err => reject(err.response))
        })
    })
}