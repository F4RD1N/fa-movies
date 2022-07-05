import axios from "axios";
import { API_KEY } from "../config/Config";
const discoverService = async (type, genre, lang, release, page) => {
  const response = await axios.get(
    `discover/${type}?api_key=${API_KEY}&with_genres=${genre}&with_original_language=${lang}&year=${release}&page=${page}`
  );
  return response;
};

export { discoverService };
