import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Board from "./components/Board/Board";
import Footer from "./components/Footer";
import ItemProvider from "./context/ItemsProvidor/ItemsProvider";
import ThemeProvider from "./context/ThemeProvider/ThemeProvider";
import RootLayout from "./layout/RootLayout";
import Profile from "./components/Profile";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Board />} />
        <Route path="profile" element={<Profile />} />
      </Route>,
    ),
  );

  return (
    <ThemeProvider>
      <ItemProvider>
        <div className="bg-white dark:bg-gray-800 dark:text-white">
          <RouterProvider router={router} />
        </div>
        <Footer />
      </ItemProvider>
    </ThemeProvider>
  );
};

export default App;
