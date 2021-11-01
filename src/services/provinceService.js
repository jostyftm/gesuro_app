import API from './axiosServices';

const endpoint = '/provinces';

export const allProvinces = (config) => {
    return new Promise((resolve, reject) => {
        API.get(endpoint, config)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const departamentsGetCities = (id) => {
    return new Promise((resolve, reject) =>{
        API.get(`${endpoint}/${id}/cities`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}