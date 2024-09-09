import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useState } from "react";

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
      <div
        className={`${darkMode ? "bg-black text-white" : ""}`}
      >
        <div className="dark:text-[#86989e] dark:bg-[#1c222a]">
          <Navbar toggleDarkMode={toggleDarkMode} />
          <Outlet />
        </div>
      </div>
  );
};

export default Root;
