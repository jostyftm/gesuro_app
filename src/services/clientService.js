import API from './axiosServices';

const endpoint = '/clients';

export const allClients = (config) => {
    return new Promise((resolve, reject) => {
        API.get(endpoint, config)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const getClient = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const saveClient = (data) => {
    return new Promise((resolve, reject) => {
        API.post(endpoint, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const deleteClient = (id) => {
    return new Promise((resolve, reject) => {
        API.delete(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}