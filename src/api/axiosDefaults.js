import axios from "axios";

axios.defaults.baseURL = 'https://wanderhub-api-backend-8af792a9ebf9.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;

export const axiosReq = axios.create();
export const axiosRes = axios.create();