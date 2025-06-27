import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, signInUser } from "../redux/action/auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const Login = () => {
  const [formData, setFormData] = useState();

  const { isLoading, authData, isError } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !isLoading && dispatch(signInUser(formData));
  };

  useEffect(() => {
    console.log(authData);
    if (authData) {
      navigate("/dash/");
    }
  }, [authData, dispatch]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
    }
  }, [isError]);

  useEffect(() => {
    const data = localStorage.getItem("token");
    data != null && dispatch(getUser());
  }, []);

  return (
    <>
      <div className="flex h-screen bg-gray-100">
        <div className="w-full max-w-lg m-auto bg-indigo-100 rounded-2xl p-5">
          <header className="mx-auto bg-transparent static shadow-none min-w-max">
            <img className="w-20 aspect-square mx-auto mb-5" src={logo} />
          </header>
          <form>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="username">
                Username
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded-xl"
                name="email"
                type="text"
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block mb-2 text-indigo-500" htmlFor="password">
                Password
              </label>
              <input
                className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300 rounded-xl"
                name="password"
                type="password"
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex justify-center">
              {!isLoading ? (
                <input
                  name="Log In"
                  className="w-full bg-indigo-700 hover:bg-orange-600 text-white font-bold py-2 px-4 mb-6 rounded-xl shadow-lg shadow-indigo-300"
                  type="submit"
                  onClick={handleSubmit}
                />
              ) : (
                <button
                  className="w-full sm:col-span-2 lg:w-2/5  mx-auto py-2 bg-violet text-white my-4 cursor-pointer rounded-xl"
                  // onClick={handleSubmit}
                  type="button"
                >
                  <div className="w-8 h-8 rounded-full animate-spin border-y-4 mx-auto border-solid border-white border-t-transparent shadow-md"></div>
                </button>
              )}
            </div>
          </form>
          <footer>
            <a
              className="text-indigo-700 hover:text-orange-600 text-sm float-left py-4"
              href="#"
            >
              Forgot Password?
            </a>
            <a
              className="text-indigo-700 hover:text-orange-600 text-sm float-right py-4"
              href="#"
            >
              Create Account
            </a>
          </footer>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Login;
