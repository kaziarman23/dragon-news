import moment from "moment";
import logo from "../../../assets/logo.png"
const Header = () => {
    return (
        <div className="w-full h-40 flex justify-center items-center flex-col gap-2 ">
            <img src={logo} alt="Logo image" />
            <p>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>            
        </div>
    );
};

export default Header;