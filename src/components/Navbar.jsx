import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <nav className={`${darkMode ? "bg-gray-800" : "bg-purple-900"} text-white p-4 flex justify-between items-center`}>
      <h1 className="text-2xl font-bold">Main headlines from TechCrunch</h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
      >
        {darkMode ? "Modo Claro" : "Modo Escuro"}
      </button>
    </nav>
  );
};

export default Navbar;
