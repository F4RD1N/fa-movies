import axios from "axios";
import { API_KEY } from "../config/Config";

const userCountryService = async () => {
    const response = await axios.get('http://ip-api.com/json')
    return response
}

export {userCountryService}