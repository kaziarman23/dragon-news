import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftsideNav/LeftSideNav";
import RightSideNav from "../shared/RightSideNav/RightSideNav";
import Navbar from "../shared/Navbar/Navbar";
import BrakingNews from "./BrakingNews";

const Home = () => {
  return (
    <div>
      <Header />
      <BrakingNews />
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-10">
        <div className="border-green-500 border-2">
          <LeftSideNav />
        </div>
        <div className="border-2 border-orange-500 lg:col-span-2">
          <h1>Today&#39;s news</h1>
        </div>
        <div className="border-2 border-red-500">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
};

export default Home;
