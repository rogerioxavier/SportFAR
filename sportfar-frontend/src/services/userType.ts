import {axiosInstance} from '../plugins/axios'

export interface UserType {
  id: number
  type: string
}

`
FUNÇÃO PARA CRIAR UM USUÁRIO ESPECIFICO PARA UM PROFESSOR

export interface User {
  full_name: string
  cpf: string
  birth_date: Date
  email: string
  password_temp: string
  address: string
  city: string
  cep: string
  phone: string
}

export const createUser = async (data: User) => {
  const response = await axiosInstance.post('/user', data)
  return response.data
}
  
`

export const getUsers = async () => {
  const response = await axiosInstance.get(`/users`)
  return response.data
}

export const createUserType = async (data: UserType) => {
  const response = await axiosInstance.post('/user/type', data)
  return response.data
}

export const getUserTypeById = async (id: number) => {
  const response = await axiosInstance.get(`/user/type/${id}`)
  return response.data
}

export const updateUserType = async (id: number, data: {type: string}) => {
  const response = await axiosInstance.patch(`/user/type/${id}`, data)
  return response.data
}

export const deleteUserType = async (id: number) => {
  const response = await axiosInstance.delete(`/user/type/${id}`)
  return response.data
}