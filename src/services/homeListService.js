import axios from "axios";
import { API_KEY } from "../config/Config";
const homeListService = async (
  type,
  page,
  genre = "",
  query = "",
  originalLanguage = ""
) => {
  const response = await axios.get(
    `${type}language=en-US&page=${page}&with_genres=${genre}&query=${query}&with_original_language=${originalLanguage}&api_key=${API_KEY}`
  );
  return response;
};

export { homeListService };
