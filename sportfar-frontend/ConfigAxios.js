import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://projetos.farroupilha.ifrs.edu.br:35010',
  timeout: 1000
});

instance.interceptors.request.use(config => {
  const token = sessionStorage.getItem('accesstoken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

const instanceAuth = axios.create({
  baseURL: 'http://projetos.farroupilha.ifrs.edu.br:35010/api',
  timeout: 1000
});

export { instance, instanceAuth };
