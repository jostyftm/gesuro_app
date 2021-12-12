import API from './axiosServices';

const endpoint = '/companyService';

export const allServiceCompany = () => {
    return new Promise((resolve, reject) => {
        API.get(endpoint)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const allServiceByCompany = (company_id) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${company_id}/getServiceByCompany`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const allInsurrancesByServiceCompany = (company_id) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${company_id}/getInsurrancesByCompany`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const saveServiceCompany = (data) => {
    return new Promise((resolve, reject) => {
        API.post(endpoint, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const getServiceCompany = (id) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const updateServiceCompany = (id, data) => {
    return new Promise((resolve, reject) => {
        API.put(`${endpoint}/${id}`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const deleteServiceCompany = (id) => {
    return new Promise((resolve, reject) => {
        API.delete(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const addCompanyServiceCompany = (id, data) => {
    return new Promise((resolve, reject) => {
        API.post(`${endpoint}/${id}/addInsurranceCompany`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const updateCompanyServiceCompany = (id, data) => {
    return new Promise((resolve, reject) => {
        API.put(`${endpoint}/${id}/updateInsurranceCompany`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const deleteCompanyServiceCompany = (id, insurrance) => {
    return new Promise((resolve, reject) => {
        API.delete(`${endpoint}/${id}/${insurrance}/deleteInsurranceCompany`,)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}