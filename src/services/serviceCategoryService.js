import API from './axiosServices';

const endpoint = '/serviceCategories';

export const allServiceCategory = (config) => {
    return new Promise((resolve, reject) => {
        API.get(endpoint, config)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const createServiceCategory = (data) => {
    return new Promise((resolve, reject) => {
        API.post(endpoint, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const showServiceCategory = (id) => {
    return new Promise((resolve, reject) => {
        API.post(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const updateServiceCategory = (id, data) => {
    return new Promise((resolve, reject) => {
        API.put(`${endpoint}/${id}`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const deleteServiceCategory = (id) => {
    return new Promise((resolve, reject) => {
        API.delete(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const serviceCategoryGetServices = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${id}/services`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}