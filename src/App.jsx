import Board from "./components/Board/Board";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ItemProvider from "./context/ItemsProvidor/ItemsProvider";
import ThemeProvider from "./context/ThemeProvider/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <div className="bg-blue-200 dark:bg-gray-800 dark:text-white">
        <ItemProvider>
          <Navbar />
          <Board />
        </ItemProvider>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
