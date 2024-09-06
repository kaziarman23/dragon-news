import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftsideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";
import BrakingNews from "./BrakingNews";
import news from "../../../public/news.json";
import NewsCards from "./NewsCards";
import { useEffect, useState } from "react";

const Home = () => {
  const [darkmood, setDarkmood] = useState(false);

  const handleToggle = () => {
    setDarkmood(!darkmood);
    console.log("clicked");
  };

  useEffect(() => {
    if (darkmood) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmood]);

  return (
    <div>
      <div className="bg-white dark:bg-[#1c222a]">
        <Header />
        <BrakingNews />
        <Navbar handleToggle={handleToggle} />
        <div className="h-[1510px] grid grid-cols-1 lg:grid-cols-4 gap-6 my-10">
          <div>
            <LeftSideNav />
          </div>
          <div className="overflow-scroll lg:col-span-2">
            {news.map((aNews) => (
              <NewsCards News={aNews} key={aNews._id}></NewsCards>
            ))}
          </div>
          <div>
            <RightSideNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
// hosting Url:
// https://dragon-news-d4081.web.app
