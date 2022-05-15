import axios from 'axios'
import { API_KEY } from '../config/Config'
const movieDetailsService = async (path, id, type = '') => {
  
  const response = await axios.get(`${path}${id}${type}?api_key=${API_KEY}`)
  return response
}


export { movieDetailsService }