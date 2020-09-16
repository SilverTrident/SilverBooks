import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3001'
});

api.interceptors.request.use(async response=>{
    const token = localStorage.getItem('app-token');
    if(token){
        response.headers.Authorization = token;
    }
    return response;
})


export default api;