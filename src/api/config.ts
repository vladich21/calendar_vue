import axios, { AxiosResponse } from 'axios'

export const mainApi = axios.create({
  baseURL: 'http://127.0.0.1:5173/api'
})
type PostRegistration = {
  email: string
  password: string
  First_name: string
  Last_name: string
}
export const fetchPostRegistration = async (
  requestBody: PostRegistration
): Promise<AxiosResponse<void>> => {
  return await mainApi.post('/registration', requestBody)
}
