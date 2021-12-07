import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});


export const get = (url, config={}) => api.get(url, config);