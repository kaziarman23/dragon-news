import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BrakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-error">Braking News</button>
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
