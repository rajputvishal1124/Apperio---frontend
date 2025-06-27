import React, { useRef } from "react";
import Pattern from "../assets/pattern-8.png";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <>
      {/* <!-- Footer container --> */}
      <footer
        id="home-footer"
        class="bg-darkblue text-center text-surface/75  lg:text-left  bg-[url(./assets/pattern-8.png)] text-white relative"
      >
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} class="h-8" alt="Apiero Medica" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Apiero Medica
              </span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0 dark:text-gray-300">
              <li>
                <a
                  onClick={() => {
                    const data = document.getElementById("home-about");
                    data.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  class="cursor-pointer me-4 md:me-6"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    const data = document.getElementById("home-contact");
                    data.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  class="cursor-pointer"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
          <span class="block text-sm text-gray-300 sm:text-center ">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              Apiero Medica™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
