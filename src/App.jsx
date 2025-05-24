import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
