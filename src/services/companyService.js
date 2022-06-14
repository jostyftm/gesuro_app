import API from './axiosServices';

const endpoint = '/companies';

export const companyEmployees = (company) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${company}/employees`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const companyHeadquarters = (company) => {
    return new Promise((resolve, reject) => {
        API.get(`${endpoint}/${company}/headquarters`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}