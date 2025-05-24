import { motion } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NewsCard = ({ title, description, url }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 shadow-lg rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-black"}`}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2">{description}</p>
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Read more
      </a>
    </motion.div>
  );
};

export default NewsCard;
