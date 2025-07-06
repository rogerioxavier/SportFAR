import axios from 'axios'
import router from '../router'

const axiosInstance = axios.create({
  baseURL: 'http://projetos.farroupilha.ifrs.edu.br:35010/api',
})

axiosInstance.interceptors.request.use((config) => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGFkbWluLmNvbSIsInN1YiI6MSwiaWF0IjoxNzQ4NjQ4NjA1LCJleHAiOjE3NDg2NTIyMDV9.unK2pDSHSPtB_gm3SO5E5A7KC0uUzKZoHQ5tOrzUMd0'
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(response => response, error => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token')
      router.push({ name: 'Login' })
    }

    return Promise.reject(error)
  }
)

export { axiosInstance }