import API from './axiosServices';

const endpoint = '/identificationTypes';

export const allITypes = (config) => {
    return new Promise((resolve, reject) =>{
        API.get(endpoint, config)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}