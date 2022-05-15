import axios from 'axios'
import { API_KEY } from '../config/Config'
export const getJSON = async () => {
  const response = await axios.get('https://x8ki-letl-twmt.n7.xano.io/api:IfVZxnbG/movies')
  return response
}