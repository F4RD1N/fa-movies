import axios from 'axios'
import { API_URL } from './Config'

const setAxiosConfig = () => {
  axios.defaults.baseURL = API_URL;
  axios.defaults.timeout = 10000;
  axios.defaults.timeoutErrorMessage = 'axios timeout';
}

export default setAxiosConfig()