import axios from 'axios';

export function getAll(resource) {
    return axios.get(`http://localhost:3006/${resource}`)
}

export function getById(resource, id) {
    return axios.get(`http://localhost:3006/${resource}/${id}`)
}

export function userRequestLogOrReg(resource, loginOrRegister, formInputs) {
    return axios.post(`http://localhost:3006/${resource}/${loginOrRegister}`, formInputs)
}

export function searchingByKey(resource) {
    return axios.get(`http://localhost:3006/books/search/${resource}`);
}

export function contactUs(formInputs){
    return axios.post(`http://localhost:3006/books/send`, formInputs);
}

// export function blogInfo(){
//     return axios.get(`http://localhost:3006/${resource}`)
// }

