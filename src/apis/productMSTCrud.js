
import axios from 'axios'
const productMSTCruds = {

    all : () => {
        return axios.get(`/productMST/all/`)
            .then(res => res ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        
    getAllActive : () => {
        return axios.get(`/productMST/allActive/`)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        

   /**
     * @param {{param:{},body:{categoryId:undefined, groupId:undefined, subGroupId:undefined}}} data
     */
    getAllProducts : (data) => {
        return axios.post(`/productMST/allDTO/`,data.body)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        

   /**
     * @param {{param:{},body:{productMST:undefined, propertyId:undefined}}} data
     */
    create : (data) => {
        return axios.post(`/productMST/create/`,data.body)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        
    delete : ({ id }) => {
        return axios.delete(`/productMST/delete/${id}`)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        
    byId : ({ id }) => {
        return axios.get(`/productMST/id/${id}`)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        
    byIdDTO : ({ id }) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        
    allNew : () => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts`)
            .then(res => res ? Promise.resolve(res.data) : Promise.reject({message:res.data,status:res}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        

   /**
     * @param {{param:{},body:{productMST:undefined, propertyId:undefined}}} data
     */
    summary : (data) => {
        return axios.post(`/productMST/summary/`,data.body)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        
    update : (data) => {
        return axios.put(`/productMST/update/`, data.body)
            .then(res => res.data.status ? Promise.resolve(res.data.data) : Promise.reject({message:res.data,status:res.status}))
            .catch(err => Promise.reject({message:err.message,status:err?.response?.status}))
    },
        
}

export default productMSTCruds;
    