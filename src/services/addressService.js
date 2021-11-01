import API from './axiosServices';

const endpoint = '/address';

export const getPhonesByAddress = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${id}/phones`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const updateAddress = (id, data) => {
    return new Promise((resolve, reject) => {
        API.put(`${endpoint}/${id}`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}