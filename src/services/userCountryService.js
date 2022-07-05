import axios from "axios";

const userCountryService = async () => {
  const response = await axios.get("http://ip-api.com/json");
  return response;
};

export { userCountryService };
