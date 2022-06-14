import API from './axiosServices';

const endpoint = '/headquarters';

export const createHeadquarter = (data) => {
    return new Promise((resolve, reject) => {
        API.post(endpoint, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}