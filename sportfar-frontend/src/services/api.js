import axios from 'axios';

const api = axios.create({
    baseURL: 'http://projetos.farroupilha.ifrs.edu.br:35010/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('accesstoken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    response => response, 
    error => {
        if (error.response && error.response.status === 401) {
            console.warn('Token expirado ou inválido. Redirecionando para login.');

            localStorage.removeItem('accesstoken');

            window.location.href = '/login'; 
        }
        return Promise.reject(error);
    }
);


export default api;
