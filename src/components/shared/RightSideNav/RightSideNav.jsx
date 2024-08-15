import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

import qZoon1 from "../../../assets/qZone1.png";
import qZoon2 from "../../../assets/qZone2.png";
import qZoon3 from "../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-3">
        <h1 className="font-bold text-lg">Login With</h1>
        <button className="btn w-full my-3 btn-outline">
          <FaGoogle className="mr-2" />
          Google
        </button>
        <button className="btn w-full btn-outline">
          <FaGithub className="mr-2" />
          Github
        </button>
      </div>

      {/* Find us part */}
      <div className="p-3 mt-6">
        <h1 className="font-bold text-lg">Find Us</h1>
        <div className="flex items-center border-2 rounded-t-xl p-3">
          <FaFacebook className="mr-3" />
          <a href="#">Facebook</a>
        </div>
        <div className="flex items-center border-x-2  p-3">
          <FaInstagram className="mr-3" />
          <a href="#">Instagram</a>
        </div>
        <div className="flex items-center border-2 rounded-b-xl p-3">
          <FaTwitter className="mr-3" />
          <a href="#">Twitter</a>
        </div>
      </div>

      {/* Q zoon part */}

      <div className="p-3 mt-6">
        <h1 className="font-bold text-lg">Q Zoon</h1>
        <img src={qZoon1} alt="Q zoon image" />
        <img src={qZoon2} alt="Q zoon image" />
        <img src={qZoon3} alt="Q zoon image" />
      </div>
    </div>
  );
};

export default RightSideNav;
