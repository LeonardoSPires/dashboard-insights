import axios from "axios";

const API_KEY = "860634c42ed74b8ca094da9859ec77f5";
const BASE_URL = "https://newsapi.org/v2/everything?sources=techcrunch&apiKey=860634c42ed74b8ca094da9859ec77f5";

export const fetchNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}&apiKey=${API_KEY}`);
    return response.data.articles;
  } catch (error) {
    console.error("Erro ao buscar notícias:", error);
    return [];
  }
};
// This code defines a function to fetch news articles from the News API using Axios. It constructs the request URL with the base URL and API key, then makes a GET request to retrieve the top headlines in the technology category for Brazil. If successful, it returns the articles; otherwise, it logs an error and returns an empty array.