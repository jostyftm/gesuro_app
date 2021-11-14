import API from './axiosServices';

const endpoint = '/insuranceCompany';

export const allInsuranceCompany = (config) => {
    return new Promise((resolve, reject) => {
        API.get(endpoint, config)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const createInsuranceCompany = (data) => {
    return new Promise((resolve, reject) => {
        API.post(endpoint, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const showInsuranceCompany = (id) => {
    return new Promise((resolve, reject) => {
        API.post(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const updateInsuranceCompany = (id, data) => {
    return new Promise((resolve, reject) => {
        API.put(`${endpoint}/${id}`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const deleteInsuranceCompany = (id) => {
    return new Promise((resolve, reject) => {
        API.delete(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}