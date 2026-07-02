import { Moon, Sun, UserCircle2 } from "lucide-react";
import { useTheme } from "../context/ThemeProvider/ThemeProvider";
import { NavLink, useNavigate } from "react-router-dom";
import { useItem } from "../context/ItemsProvidor/ItemsProvider";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { dispatch } = useItem();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "SEARCH", payload: inputValue });
    }, 300);

    return () => clearTimeout(timer);
  });

  return (
    <nav className="fixed top-5 left-12 right-12 z-50 flex justify-between items-center p-3.5 sm:px-8 md:px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="max-w-7xl cursor-pointer" onClick={() => navigate("/")}>
        <h1 className="text-xl font-bold">
          Re:<span className="text-red-500">Interest</span>
        </h1>
      </div>

      <input
        type="text"
        placeholder="Search for Inspiration..."
        onChange={(e) => setInputValue(e.target.value)}
        className="flex justify-center p-2 px-4 w-full max-w-250 sm:mx-w-xs md:mx-w-xl mx-4 x-4 y-4 border border-gray-400 text-gray-800 outline-gray-600
      dark:text-white rounded-3xl text-xs text-left"
      />

      <div className="flex items-center gap-2 ">
        {location.pathname !== "/profile" && (
          <NavLink to="/profile">
            <UserCircle2 size={20} />
          </NavLink>
        )}

        <button className="cursor-pointer" onClick={toggleTheme}>
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
