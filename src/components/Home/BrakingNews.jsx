import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
  return (
    <div className="flex dark:bg-[#1c222a]">
      <button className="btn dark:bg-slate-800 dark:text-white hover:bg-black hover:text-white dark:btn-outline">Braking News</button>
      <Marquee speed={100} pauseOnHover={true}>
        <p className="mx-4">
          <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
        </p>
        <p className="mx-4">
          <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
        </p>
        <p className="mx-4">
          <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
        </p>
      </Marquee>
    </div>
  );
};

export default BrakingNews;
