import { useParams } from "react-router-dom";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import news from "../../../public/news.json";

const News = () => {
  const { id } = useParams();
  const newsItem = news.find((item) => item._id === id);

  if (!newsItem) {
    return <p className="text-red-500 font-bold">News not found</p>;
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="grid md:grid-cols-4 gap-2">
        <div className="col-span-3">
          <div className="w-full h-[465px]">
            <img src={newsItem.image_url} alt="news images" className="w-full h-full object-cover" />
          </div>
          <div className="flex justify-start items-start flex-col gap-5">
            <h1 className="text-lg font-bold">{newsItem.title}</h1>
            <p>{newsItem.details}</p>
            <p>Total View : {newsItem.total_view}</p>
          </div>
        </div>
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default News;
