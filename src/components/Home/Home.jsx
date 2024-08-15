import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftsideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";
import BrakingNews from "./BrakingNews";
import news from "../../../public/news.json";
import NewsCards from "./NewsCards";

const Home = () => {
  return (
    <div>
      <Header />
      <BrakingNews />
      <Navbar />
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
  );
};

export default Home;
