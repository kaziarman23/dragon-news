import { useEffect, useState } from "react";
import categoriesData from "../../../../public/categories.json";
import { Link } from "react-router-dom";
import card1 from "../../../assets/card1.png";
import card2 from "../../../assets/card2.png";
import card3 from "../../../assets/card3.png";
import { FaCalendar } from "react-icons/fa";
import moment from "moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  const cards = [card1, card2, card3];
  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  return (
    <div>
      <div className="p-3">
        <h1>All caterogy</h1>
        <div className="w-full p-3">
          <h1 className="bg-slate-400  text-xl text-center p-3">
            Netional News
          </h1>
          {categories.map((catagori) => (
            <Link key={catagori.id}>
              <p className="my-3">{catagori.name}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* cards */}
      <div className="mt-6">
        <div>
          {cards.map((card, index) => (
            <div className="mb-5 p-3" key={index}>
              <img src={card} alt="card images" className="w-full h-40" />
              <h3>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Obcaecati enim facilis quidem quo libero, sed dolorem
                recusandae.
              </h3>
              <div className="flex items-center justify-between mt-3">
                <p>sports</p>
                <p className="flex items-center gap-2">
                  <FaCalendar /> {moment().format("ddd, hA")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
