import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUser } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name, email, password);
    //reset inputs
    setName("");
    setEmail("");
    setPassword("");

    //creating user
    createUser(email, password)
      .then((result) => {
        const userDetails = result.user;
        console.log(userDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar></Navbar>
      <div className="hero dark:bg-[#1c222a] min-h-screen">
        <div className="hero-content flex-col ">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="text-center p-2 text-2xl font-bold">Register Now</h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered"
                  required
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
                  placeholder="Password"
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
                <button className="btn btn-info">Register</button>
              </div>
              <p className="my-3">
                Already have an account, please{" "}
                <Link to="login" className="text-blue-500 font-bold">
                  Login
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
