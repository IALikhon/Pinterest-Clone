import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider/ThemeProvider";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="bg-white dark:bg-gray-800 dark:text-white shadow-xl/30 rounded flex justify-between p-4 mr-12 ml-12 fixed top-5 left-0 right-0 z-50">
      <div className="max-w-7xl">
        <h1 className="text-xl font-bold">
          Clone<span className="text-blue-600">Terest</span>
        </h1>
      </div>
      <button onClick={toggleTheme}>
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  );
};

export default Navbar;
