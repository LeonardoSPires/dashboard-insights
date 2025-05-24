import { useEffect, useState, useContext } from "react";
import { fetchNews } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import { ThemeContext } from "../context/ThemeContext"; // Import global theme

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // State for storing the search term

  const { darkMode } = useContext(ThemeContext); // Access Dark Mode state

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchNews();
        console.log("API Data:", articles);
        setNews(articles || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  // Filter news based on the search term
  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) // Now searches in the description too!
  );

  return (
    <section className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-8`}>
      <h2 className="text-3xl font-bold mb-6">Latest News</h2>

      {/* Search field */}
      <input
        type="text"
        placeholder="Search news by keyword..."
        className="mb-4 p-2 border rounded w-full bg-gray-100 dark:bg-gray-800 dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Conditional news display */}
      {loading ? (
        <p className="text-center text-lg">Loading news...</p>
      ) : filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((article, index) => (
            <NewsCard key={index} title={article.title} description={article.description} url={article.url} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-red-500">No news found.</p>
      )}
    </section>
  );
};

export default Dashboard;
// This code defines a Dashboard component that fetches and displays news articles. It includes a search field to filter articles by title or description. The component uses the ThemeContext to apply dark mode styles and handles loading states and error messages. The filtered news is displayed in a grid layout using the NewsCard component.