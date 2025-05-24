import { useEffect, useState } from "react";
import { fetchNews } from "../services/newsApi";
import NewsCard from "../components/NewsCard";

const Dashboard = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const articles = await fetchNews();
      setNews(articles);
    };

    getNews();
  }, []);

  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-6">Últimas Notícias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {news.map((article, index) => (
          <NewsCard key={index} title={article.title} description={article.description} url={article.url} />
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
