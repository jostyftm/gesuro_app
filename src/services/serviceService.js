import API from './axiosServices';

const endpoint = "/services";

export const allServices = (config) => {
    return new Promise((resolve, reject) => {
        API.get(endpoint, config)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const createService = (data) => {
    return new Promise((resolve, reject) => {
        API.post(endpoint, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const showService = (id) => {
    return new Promise((resolve, reject) => {
        API.post(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const updateService = (id, data) => {
    return new Promise((resolve, reject) => {
        API.put(`${endpoint}/${id}`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const deleteService = (id) => {
    return new Promise((resolve, reject) => {
        API.delete(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}