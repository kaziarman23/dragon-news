import { useContext, useState } from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    //reset inputs
    setEmail("");
    setPassword("");

    // login user
    loginUser(email, password)
      .then((result) => {
        console.log(result.user);

        // navigating the user after the login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message, error);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="hero dark:bg-[#1c222a] min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center p-2 text-2xl font-bold">Login Now</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">Login</button>
              </div>
              <p className="my-3">
                Don&#39;t have an account, please{" "}
                <Link to="Register" className="text-blue-500 font-bold">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
