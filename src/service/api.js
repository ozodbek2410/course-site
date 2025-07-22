import axios from 'axios'
import { getItem } from '../helpers/paresistance-storaga'

axios.defaults.baseURL = 'http://localhost:3000/api'
axios.interceptors.request.use(config => {
  const token = getItem('token')
  const authrization = token ? `Token ${token}` : ''
  config.headers.Authorization = authrization
  return config
})

export default axios
