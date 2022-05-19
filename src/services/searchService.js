import axios from 'axios'
import { API_KEY } from '../config/Config'
const searchService = async (path) => {
  
  const response = await axios.get(`search/movie?${path}&api_key=${API_KEY}`)
  return response
}


export { searchService }