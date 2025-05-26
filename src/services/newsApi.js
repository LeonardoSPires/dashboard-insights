import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY; // Usa variável de ambiente corretamente
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNews = async () => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: "br",
        category: "technology",
        apiKey: API_KEY
      }
    });
    return response.data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
