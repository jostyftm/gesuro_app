import API from './axiosServices';

const endpoint = '/phone';

export const createPhone = (data) => {
    return new Promise((resolve, reject) => {
        API.post(endpoint,data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))        
    })
}


export const updatePhone = (id, data) => {
    return new Promise((resolve, reject) =>{
        API.put(`${endpoint}/${id}`, data)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}

export const deletePhone = (id) => {
    return new Promise((resolve, reject) =>{
        API.delete(`${endpoint}/${id}`)
        .then(resp => resolve(resp.data))
        .catch(err => reject(err.response))
    })
}