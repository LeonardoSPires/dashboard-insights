import { useEffect, useState, useContext } from "react";
import { fetchNews } from "../services/newsApi";
import NewsCard from "../components/NewsCard";
import { ThemeContext } from "../context/ThemeContext"; // Importa o tema global

const Dashboard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para armazenar o termo de busca

  const { darkMode } = useContext(ThemeContext); // Acessa o estado de Dark Mode

  useEffect(() => {
    const getNews = async () => {
      try {
        const articles = await fetchNews();
        console.log("Dados da API:", articles);
        setNews(articles || []);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    getNews();
  }, []);

  // Filtra notícias com base no termo de busca
  const filteredNews = news.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description.toLowerCase().includes(searchTerm.toLowerCase()) // Agora busca também na descrição!
  );

  return (
    <section className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} min-h-screen p-8`}>
      <h2 className="text-3xl font-bold mb-6">Últimas Notícias</h2>

      {/* Campo de busca */}
      <input
        type="text"
        placeholder="Buscar notícias por palavra-chave..."
        className="mb-4 p-2 border rounded w-full bg-gray-100 dark:bg-gray-800 dark:text-white"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Exibição condicional de notícias */}
      {loading ? (
        <p className="text-center text-lg">Carregando notícias...</p>
      ) : filteredNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredNews.map((article, index) => (
            <NewsCard key={index} title={article.title} description={article.description} url={article.url} />
          ))}
        </div>
      ) : (
        <p className="text-center text-lg text-red-500">Nenhuma notícia encontrada.</p>
      )}
    </section>
  );
};

export default Dashboard;
