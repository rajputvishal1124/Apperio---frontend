import React from "react";
import Logo from "../assets/logo2.png";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const NavList = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
    {
      name: "Departments",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];
  return (
    <div className="shadow-xl top-0 sticky bg-white/95 z-30">
      <div className="w-full lg:w-4/5 mx-auto py-2.5 px-8 flex justify-between items-center">
        <div className="flex font-bold items-center">
          <img src={logo} alt="" className="h-10 mr-2" />
          <span>Apiero Medica</span>
        </div>
        <div className="hidden lg:flex gap-4 flex-1 justify-end mr-10 h-full">
          {/* {NavList.map((nav, i) => ( */}
          <Link to="/">
            <div className="px-1 cursor-pointer lg:px-4 hover:bg-slate-200/75 py-4 h-full">
              Home
            </div>
          </Link>
          <div
            onClick={() => {
              const data = document.getElementById("home-services");
              data.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="px-1 lg:px-4 cursor-pointer hover:bg-slate-200/75 py-4 h-full"
          >
            Services
          </div>
          <div
            onClick={() => {
              const data = document.getElementById("home-about");
              data.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="px-1 lg:px-4 cursor-pointer hover:bg-slate-200/75 py-4 h-full"
          >
            About
          </div>
          <div
            className="px-1 lg:px-4 cursor-pointer hover:bg-slate-200/75 py-4 h-full"
            onClick={() => {
              const data = document.getElementById("home-department");
              data.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
          >
            Departments
          </div>
          {/* <div
            className="px-1 lg:px-4 cursor-pointer hover:bg-slate-200/75 py-4 h-full"
            onClick={() => {
              const data = document.getElementById("home-blog");
              data.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          >
            Blog
          </div> */}
          <div
            onClick={() => {
              const data = document.getElementById("home-contact");
              data.scrollIntoView({ behavior: "smooth", block: "center" });
            }}
            className="px-1 lg:px-4 cursor-pointer hover:bg-slate-200/75 py-4 h-full"
          >
            Contact
          </div>
          {/* ))} */}
        </div>
        {/* <button class="relative border-2 border-black  bg-transparent py-2 px-8 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-red-600 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100">
          Login
        </button> */}

        <Link to={"/login"}>
          <button
            href="#_"
            className="px-8 py-2 relative cursor-pointer  group overflow-hidden font-medium bg-darkblue text-white inline-block"
          >
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white whitespace-nowrap">
              Login
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
