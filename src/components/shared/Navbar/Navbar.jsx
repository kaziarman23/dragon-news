import { Link, NavLink } from "react-router-dom";
import Profile from "../../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";

const Navbar = ({handleToggle}) => {
  const { user, logOut } = useContext(AuthContext);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    // logout user
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((result) => {
        console.log(result.user);
      });
  };

  return (
    <div className="navbar dark:bg-[#1c222a]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>

        {/* we will set a toggle mood for dark mood and light mood*/}
        <input type="checkbox" onChange={handleToggle} className="toggle"/>

      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-3">
          <div className="w-10 rounded-full">
            <img src={Profile} alt="profile image" />
          </div>
        </label>
        {!user ? (
          <Link to="/login">
            <button className="btn btn-outline">Login</button>
          </Link>
        ) : (
          <button onClick={handleLogout} className="btn btn-outline">
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
