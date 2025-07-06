const baseURL = 'http://projetos.farroupilha.ifrs.edu.br:35010/' 
const axios = require('axios');
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSIsInN1YiI6MSwiaWF0IjoxNzQ4MTgxMDk3LCJleHAiOjE3NDgxODQ2OTd9.CgCETLkz3PwuwQwNI4ox6tWJ2LSscG06e7q79dhy0Zo'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
});

instance.interceptors.request.use(
  config =>{
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => Promise.reject(error)
)

module.exports = instance;