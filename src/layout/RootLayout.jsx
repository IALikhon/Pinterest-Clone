import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
    return (
      <div className="flex justify-center bg-white dark:bg-gray-800 dark:text-white mt-25">
        <Navbar />
        <Outlet />
      </div>
    );
}

export default RootLayout;