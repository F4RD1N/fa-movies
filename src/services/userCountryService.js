import axios from "axios";

const userCountryService = async () => {
  const response = await axios.get(`https://api.db-ip.com/v2/free/self?timestamp=${new Date().getTime()}`);
  return response;
};

export { userCountryService };
