import React, { useRef } from "react";
import Navbar from "./Navbar";
import Header from "../assets/image-1.jpg";
import Pattern2 from "../assets/pattern-2.png";
import Pattern3 from "../assets/pattern-3.png";
import AboutImg1 from "../assets/about-1.jpg";
import AboutImg2 from "../assets/about-2.jpg";
import DepartImg1 from "../assets/department-1.jpg";
import DepartImg2 from "../assets/department-2.jpg";
import DepartImg3 from "../assets/department-3.jpg";
import DepartImg4 from "../assets/department-4.jpg";
import TeamImg1 from "../assets/team-1.jpg";
import TeamImg2 from "../assets/team-2.jpg";
import TeamImg3 from "../assets/team-3.jpg";
import TeamImg4 from "../assets/team-4.jpg";
import Blog1 from "../assets/news-1.jpg";
import Blog2 from "../assets/news-2.jpg";
import Blog3 from "../assets/news-3.jpg";
import Hematology from "../assets/hematology.png";
import Heart from "../assets/heart.png";
import SkinCare from "../assets/skin-care.png";
import Orthopedics from "../assets/orthopedics.png";
import Plus from "../assets/plus.png";
import Mri from "../assets/mri.png";
import ExamTable from "../assets/examining-table.png";
import Dental from "../assets/dental.svg";
import Ultrasound from "../assets/ultrasound.png";
import Telescope from "../assets/telescope.png";
import Modern from "../assets/modern.jpg";
import Stethoscope from "../assets/stethoscope.png";
import Doctor from "../assets/doctor1.png";
import MedicalTeam from "../assets/medical-team.png";
import SurgeryRoom from "../assets/surgery-room.png";
import Envelope from "../assets/envelope.png";
import Footer from "./Footer";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Home = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_x0fjmkg",
        "template_468m4bv",
        form.current,
        "KDPIDsyBvS9AxD4w3"
      )
      .then(
        (result) => {
          toast.success("Email sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error);
        }
      );
  };
  return (
    <div className="font-manrope">
      {/* <Navbar /> */}
      <div
        style={{
          backgroundImage: `url(${Header})`,
        }}
        className=" bg-no-repeat bg-top bg-cover relative py-44 w-full"
      >
        <div className="flex justify-around">
          <div className="px-8 max-w-2xl capitalize mr-20">
            {/* <h1 className="capitalize text-xl sm:text-[27px] mb-5 font-bold  tracking-tight">
              best medical business template
            </h1> */}
            <h2 className="text-6xl sm:text-[75px] mb-8 font-bold text-slate-600 leading-[5.3rem]">
              {/* contact the best <span className="text-red-600">doctor</span> */}
              Empowering Healthcare Anytime, Anywhere
            </h2>
            {/* <h2 className="text-[84px] font-bold leading-[4rem]">best doctor</h2> */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-0 mb-8">
              <div className="flex items-center gap-3 text-darkblue ">
                <svg
                  fill="#124a94"
                  width="20px"
                  height="20px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M177.6,80.43a10,10,0,1,0-19.5,4.5,60.76,60.76,0,0,1-6,44.5c-16.5,28.5-53.5,38.5-82,22-28.5-16-38.5-53-22-81.5s53.5-38.5,82-22a9.86,9.86,0,1,0,10-17c-38.5-22.5-87-9.5-109.5,29a80.19,80.19,0,1,0,147,20.5Zm-109.5,11a10.12,10.12,0,0,0-11,17l40,25a10.08,10.08,0,0,0,5.5,1.5,10.44,10.44,0,0,0,8-4l52.5-67.5c3.5-4.5,2.5-10.5-2-14s-10.5-2.5-14,2l-47,60Z" />
                </svg>
                <p className="text-darkblue font-medium text-lg">
                  Experienced Doctors
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  fill="#124a94"
                  width="20px"
                  height="20px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M177.6,80.43a10,10,0,1,0-19.5,4.5,60.76,60.76,0,0,1-6,44.5c-16.5,28.5-53.5,38.5-82,22-28.5-16-38.5-53-22-81.5s53.5-38.5,82-22a9.86,9.86,0,1,0,10-17c-38.5-22.5-87-9.5-109.5,29a80.19,80.19,0,1,0,147,20.5Zm-109.5,11a10.12,10.12,0,0,0-11,17l40,25a10.08,10.08,0,0,0,5.5,1.5,10.44,10.44,0,0,0,8-4l52.5-67.5c3.5-4.5,2.5-10.5-2-14s-10.5-2.5-14,2l-47,60Z" />
                </svg>
                <p className="text-darkblue font-medium text-lg">
                  Enhanced Treatment
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  fill="#124a94"
                  width="20px"
                  height="20px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M177.6,80.43a10,10,0,1,0-19.5,4.5,60.76,60.76,0,0,1-6,44.5c-16.5,28.5-53.5,38.5-82,22-28.5-16-38.5-53-22-81.5s53.5-38.5,82-22a9.86,9.86,0,1,0,10-17c-38.5-22.5-87-9.5-109.5,29a80.19,80.19,0,1,0,147,20.5Zm-109.5,11a10.12,10.12,0,0,0-11,17l40,25a10.08,10.08,0,0,0,5.5,1.5,10.44,10.44,0,0,0,8-4l52.5-67.5c3.5-4.5,2.5-10.5-2-14s-10.5-2.5-14,2l-47,60Z" />
                </svg>
                <p className="text-darkblue font-medium text-lg">
                  {" "}
                  Top Medical Equipment
                </p>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  fill="#124a94"
                  width="20px"
                  height="20px"
                  viewBox="0 0 200 200"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M177.6,80.43a10,10,0,1,0-19.5,4.5,60.76,60.76,0,0,1-6,44.5c-16.5,28.5-53.5,38.5-82,22-28.5-16-38.5-53-22-81.5s53.5-38.5,82-22a9.86,9.86,0,1,0,10-17c-38.5-22.5-87-9.5-109.5,29a80.19,80.19,0,1,0,147,20.5Zm-109.5,11a10.12,10.12,0,0,0-11,17l40,25a10.08,10.08,0,0,0,5.5,1.5,10.44,10.44,0,0,0,8-4l52.5-67.5c3.5-4.5,2.5-10.5-2-14s-10.5-2.5-14,2l-47,60Z" />
                </svg>
                <p className="text-darkblue font-medium text-lg">
                  24/7 Advance Care
                </p>
              </div>
            </div>
            <div className="flex gap-8">
              <button
                href="#_"
                class="px-8 py-3 relative  group overflow-hidden font-medium bg-darkblue text-white inline-block"
                onClick={() => {
                  const data = document.getElementById("home-contact");
                  data.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white whitespace-nowrap">
                  Contact with us{" "}
                </span>
              </button>
              <Link to={"/login"}>
                <button
                  href="#_"
                  class="px-8 py-3 relative  group overflow-hidden font-medium bg-transparent text-red-600 border-2 border-red-600 inline-block"
                >
                  <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                  <span class="relative group-hover:text-white whitespace-nowrap">
                    Login
                  </span>
                </button>{" "}
              </Link>
            </div>
          </div>{" "}
          <div></div>
        </div>
      </div>
      <div className=" bg-no-repeat   w-full bg-left flex-col xl:flex-row flex relative px-16 py-8 justify-center bg-pattern1">
        <div className="max-w-2xl flex-1 relative mx-auto py-20">
          <img
            src={AboutImg1}
            alt=""
            className=" relative inline-block max-w-full h-auto"
          />
          <img
            src={Plus}
            alt=""
            className="absolute top-[40%] hidden md:block z-20 right-[135px] bg-white/80 rounded-full"
          />
          <img
            src={AboutImg2}
            alt=""
            className="-right-36 hidden md:block   xl:right-12 absolute bottom-0 max-w-full h-auto"
          />
        </div>
        <div className="flex-1 max-w-xl mx-auto xl:ml-16 my-4 ">
          {/* <p className="font-semibold text-lg mb-4 text-slate-500">
            VISIT OUR HOSPITAL
          </p> */}
          <p className="font-bold leading-[54px] text-[48px] mb-7">
            Why Choose Us
          </p>
          <p className="font-medium text-slate-500 leading-[28px] mb-6">
            We offer high-quality healthcare services without the need to visit
            a hospital, connecting you with highly experienced doctors. Receive
            expert care conveniently from wherever you are
          </p>
          {/* <p className="font-bold leading-[1.6em] text-[30px] mb-2 text-darkblue">
            Effective Medical Treatment
          </p> */}
          <p className="font-medium  text-slate-500 leading-[28px] mb-6">
            We have a vast network of doctors and utilize advanced medical
            technology to ensure you benefit from a comprehensive range of
            services. From routine check-ups and chronic condition management to
            urgent care and specialty consultations, all are accessible through
            our secure platform
          </p>
          <p className="font-medium  text-slate-500 leading-[28px] mb-8">
            Trust in our commitment to safeguarding your privacy with secure
            communication and data sharing between patients and doctors. Our
            platform ensures you have access to medical advice and support
            anytime, with reliable, always-available service
          </p>
          {/* <div className="grid sm:grid-cols-2 gap-4 sm:gap-0 mb-10">
            <div className="flex items-center gap-3 text-darkblue ">
              <svg
                fill="#f9313b"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
              </svg>
              <p className="text-darkblue font-medium text-lg">
                Latest Advancement
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                fill="#f9313b"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
              </svg>
              <p className="text-darkblue font-medium text-lg">
                Professional Healthcare
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                fill="#f9313b"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
              </svg>
              <p className="text-darkblue font-medium text-lg">
                {" "}
                Critical & Palliative Care
              </p>
            </div>
            <div className="flex items-center gap-3">
              <svg
                fill="#f9313b"
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z" />
              </svg>
              <p className="text-darkblue font-medium text-lg">
                State of the Art Research
              </p>
            </div>
          </div> */}
          {/* <button
            href="#_"
            class="px-8 py-3 relative  group overflow-hidden font-medium bg-darkblue text-white inline-block"
          >
            <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
            <span class="relative group-hover:text-white whitespace-nowrap">
              Discover More
            </span>
          </button> */}
        </div>
      </div>
      <div
        className=" bg-[#eef5ff] overflow-clip w-full  relative px-16 py-16   "
        id="home-services"
      >
        {/* <p className="font-semibold text-lg mb-4 text-slate-500 z-10">
          WHAT WE DO
        </p> */}
        <h2 className="font-bold leading-[54px] text-[48px] mb-7 z-10">
          Our Best Service For You
        </h2>
        <div className="flex flex-wrap my-10 gap-8 justify-center">
          <div className="max-w-[16rem] z-10 bg-white py-8 px-6 border-l-4 border-red-600">
            <img src={Mri} alt="" className="w-14 h-14 mb-4" />
            <h1 className="font-semibold  leading-[1.4em] text-[24px] mb-3">
              Telemedicine Consultations
            </h1>
            <p>
              Connect with board-certified healthcare professionals via video
              conferencing for primary care, specialty consultations, and follow
              up visits
            </p>
          </div>
          <div className="max-w-[16rem] z-10 bg-white py-8 px-6 border-l-4 border-red-600">
            <img src={Ultrasound} alt="" className="w-14 h-14 mb-4" />
            <h1 className="font-semibold  leading-[1.4em] text-[24px] mb-3">
              Remote Monitoring
            </h1>
            <p>
              Leverage advanced technology for remote monitoring of vital signs
              and chronic conditions, allowing proactive health management
              without frequent clinic visits
            </p>
          </div>
          <div className="max-w-[16rem] z-10 bg-white py-8 px-6 border-l-4 border-red-600">
            <img src={Dental} alt="" className="w-14 h-14 mb-4" />
            <h1 className="font-semibold  leading-[1.4em] text-[24px] mb-3">
              Medication Management
            </h1>
            <p>
              Conveniently request prescription refills and receive medication
              management support from our experienced healthcare team
            </p>
          </div>

          <div className="max-w-[16rem] z-10 bg-white py-8 px-6 border-l-4 border-red-600">
            <img src={ExamTable} alt="" className="w-14 h-14 mb-4" />
            <h1 className="font-semibold  leading-[1.4em] text-[24px] mb-3">
              Specialist Referrals
            </h1>
            <p>
              Receive timely referrals to specialized healthcare providers for
              further evaluation and treatment, ensuring personalized and
              comprehensive care customized to your needs.
            </p>
          </div>
        </div>
        <img src={Pattern2} alt="" className="left-0 absolute top-0" />
        <img src={Pattern3} alt="" className="right-0 absolute top-0" />
      </div>

      <div className="px-10 py-20 flex flex-col md:flex-row max-w-7xl mx-auto relative">
        {" "}
        <div className="p-10 bg-pattern5 bg-darkblue bg-no-repeat absolute hidden md:block  md:bottom-[10%] md:right-[20%]">
          <div className="flex ">
            <div className="pr-20">
              <div className="flex items-center">
                <img src={Doctor} alt="" className="w-10" />
                <p className="text-4xl font-bold text-white ml-2">+150</p>
              </div>
              <p className="text-lg mt-4 text-white">Doctor's Team</p>
            </div>
            <div className="pr-20">
              <div className="flex items-center">
                <img src={MedicalTeam} alt="" className="w-10" />
                <p className="text-4xl font-bold text-white ml-4">1000+</p>
              </div>
              <p className="text-lg mt-4 text-white">Patient Registeration</p>
            </div>
            <div className="pr-10">
              <div className="flex items-center">
                <img src={SurgeryRoom} alt="" className="w-10" />
                <p className="text-4xl font-bold text-white ml-4">10+</p>
              </div>
              <p className="text-lg mt-4 text-white">Succesfull Surgeries</p>
            </div>
          </div>
        </div>
        {/* <img src={Pattern5} alt="" /> */}
        <div className="flex-1 mx-6" id="home-about">
          {/* <p className="font-semibold text-lg mb-4 text-slate-500 z-10">
            WHAT WE DO
          </p> */}
          <h2 className="font-bold leading-[54px] text-[48px] mb-7 z-10">
            Expanding Healthcare Access in Rural Area
          </h2>
          <p className="flex-1 text-base mt-6 text-slate-600">
            At Apiero Medica, we are dedicated to improving healthcare access in
            rural areas by establishing a specialized rural healthcare center.
            Our goal is to provide essential medical services directly to
            residents, ensuring they receive timely and comprehensive care
            without the need to travel far.
          </p>
          <p className="flex-1 text-base mt-6 text-slate-600">
            Our rural center provides basic checkups and preventive care to
            promote community wellness, focusing on early detection to reduce
            preventable illnesses. Through secure video conferencing, our center
            offers tele-consultations with specialist doctors, expanding access
            to expert advice and diagnosis without the need to travel to urban
            centers
          </p>
          {/* <div className="flex my-10">
            <img src={Stethoscope} alt="" className="w-20 h-20 mr-8" />
            <div>
              <p className="text-darkblue text-xl font-bold">
                Infection Prevention
              </p>
              <p className="text-slate-600 mr-8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, voluptatibus.
              </p>
            </div>
          </div> */}
        </div>
        <div>
          <img src={Modern} alt="" className="" />
        </div>
      </div>
      <div
        className="  overflow-clip  w-full  relative   "
        id="home-department"
      >
        <div className="specialist h-full w-full bg-img1"></div>
        <div className="px-16 py-24 ">
          <p className="font-semibold relative text-center text-xl mb-4 text-white z-10">
            Our Specialist
          </p>
          <h2 className="font-bold leading-[54px] relative text-center text-white text-[48px] mb-12 z-10">
            Medical Department
          </h2>
          <div className="flex flex-wrap my-10 gap-8 justify-center">
            <div className="max-w-[17rem] relative z-10 bg-white  ">
              <img src={DepartImg1} alt="" className="aspect-video" />
              <div className="relative px-8 py-10">
                <div className="bg-darkblue/50 p-2.5 absolute top-[-45px] left-4 w-fit">
                  <div className="bg-darkblue hover:bg-red-600 duration-300 ease-in-out transition-colors p-3">
                    <img src={Hematology} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h1 className="font-semibold my-4 leading-[1.4em] text-[25px] mb-2.5">
                  Dermatology
                </h1>
                <p className="text-[15px] text-[#6d6e73] pr-1">
                  Our goal is to promote optimal skin health and elevate your
                  overall well-being through expert care and the latest
                  advancements in dermatology
                </p>
              </div>
            </div>
            <div className="max-w-[17rem] relative z-10 bg-white  ">
              <img src={DepartImg2} alt="" className="aspect-video" />
              <div className="relative px-8 py-10">
                <div className="bg-darkblue/50 p-2.5 absolute top-[-45px] left-4 w-fit">
                  <div className="bg-darkblue p-3 hover:bg-red-600 duration-300 ease-in-out transition-colors">
                    <img src={SkinCare} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h1 className="font-semibold my-4 leading-[1.4em] text-[25px] mb-2.5">
                  Gynecology
                </h1>
                <p className="text-[15px] text-[#6d6e73] pr-1">
                  We are dedicated to fostering optimal reproductive health and
                  enhancing your overall well-being with expert care and
                  cutting-edge advancements in gynecology
                </p>
              </div>
            </div>
            <div className="max-w-[17rem] relative z-10 bg-white  ">
              <img src={DepartImg4} alt="" className="aspect-video" />
              <div className="relative px-8 py-10">
                <div className="bg-darkblue/50 p-2.5 absolute top-[-45px] left-4 w-fit">
                  <div className="bg-darkblue p-3 hover:bg-red-600 duration-300 ease-in-out transition-colors">
                    <img src={Orthopedics} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h1 className="font-semibold my-4 leading-[1.4em] text-[25px] mb-2.5">
                  Orthopedics
                </h1>
                <p className="text-[15px] text-[#6d6e73] pr-1">
                  We are dedicated to promoting musculoskeletal health and
                  improving your quality of life through specialized care and
                  the latest advancements in orthopedics
                </p>
              </div>
            </div>
            <div className="max-w-[17rem] relative z-10 bg-white  ">
              <img src={DepartImg3} alt="" className="aspect-video" />
              <div className="relative px-8 py-10">
                <div className="bg-darkblue/50 p-2.5 absolute top-[-45px] left-4 w-fit">
                  <div className="bg-darkblue p-3 hover:bg-red-600 duration-300 ease-in-out transition-colors">
                    <img src={Heart} alt="" className="w-8 h-8" />
                  </div>
                </div>
                <h1 className="font-semibold my-4 leading-[1.4em] text-[25px] mb-2.5">
                  Cardiology
                </h1>
                <p className="text-[15px] text-[#6d6e73] pr-1">
                  Experience exceptional cardiovascular care designed to enhance
                  your heart health and overall well-being, utilizing the latest
                  advancements in cardiology
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        id="home-abouts"
        className="flex flex-col lg:flex-row relative px-4 sm:px-20 mx-auto pb-40 py-20 max-w-7xl bg-left-bottom  bg-teamIcon bg-no-repeat"
      > */}
      {/* <img
          src={Telescope}
          alt=""
          className="hidden lg:block absolute bottom-[1%] left-[20%] "
        /> */}
      {/* <div
          className=" lg:max-w-[41%] "
          style={{
            flex: "0 0 41%",
          }}
        >
          <p className="font-semibold text-lg mb-4 text-slate-500">
            VISIT OUR HOSPITAL
          </p>
          <p className="font-bold leading-[54px] text-[48px] mb-7">
            The better place of medical hospital center.
          </p>
          <p className="font-medium text-slate-500 leading-[28px] mb-6">
            Quis ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum
            ultrices gravida risus commodo viverra mae cenas accumsan lacus vel.
            facilisis suspendisseipsum dolor sit amet consectetur adipisicing
            elit sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua enim ad minim veniam, quis nostrud.
          </p>
          <p className="font-medium text-slate-500 leading-[28px] mb-6">
            Quis ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua ipsum
            ultrices gravida risus commodo viverra mae cenas accumsan lacus vel.
            facilisis suspendisseipsum dolor sit amet consectetur adipisicing
            elit sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua enim ad minim veniam, quis nostrud.
          </p>
          <div className="flex gap-8 mb-10">
            <button
              href="#_"
              class="px-8 py-3 relative  group overflow-hidden font-medium bg-darkblue text-white inline-block"
              onClick={() => {
                const data = document.getElementById("home-contact");
                data.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white whitespace-nowrap">
                Contact with us{" "}
              </span>
            </button>
            <Link to={"/login"}>
              <button
                href="#_"
                class="px-8 py-3 relative  group overflow-hidden font-medium bg-transparent text-red-600 border-2 border-red-600 inline-block"
              >
                <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
                <span class="relative group-hover:text-white whitespace-nowrap">
                  Login
                </span>
              </button>{" "}
            </Link>
          </div>
        </div> */}
      {/* <div
          className=" lg:max-w-[59%]  ml-6  grid sm:grid-cols-2 gap-4"
          style={{
            flex: "0 0 59%",
          }}
        >
          <div>
            <img src={TeamImg1} alt="" className="" />
          </div>
          <div>
            <img src={TeamImg2} alt="" />
          </div>
          <div>
            <img src={TeamImg3} alt="" />
          </div>
          <div>
            <img src={TeamImg4} alt="" />
          </div>
        </div> */}
      {/* </div> */}
      <div
        id="home-blog"
        className="py-20 px-14 bg-pattern6 bg-[#eef5ff] bg-no-repeat"
      >
        <div
          id="home-contact"
          className=" max-w-7xl py-10 px-8 bg-pattern7 relative bg-center bg-no-repeat bg-cover  bg-white flex flex-col md:flex-row  border mx-auto  z-40 mt-8"
        >
          <img
            src={Envelope}
            alt=""
            className="absolute left-[40%] bottom-4 hidden md:block"
          />
          <h1 className="font-bold text-4xl md:my-auto mr-8 mb-8 text-center md:text-start">
            Book Your <br /> Appointment
          </h1>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="grid md:grid-cols-3 z-10 md:w-[75%] gap-4	 sm:gap-7"
          >
            <input
              type="text"
              className="header-book-appointment-input"
              placeholder="Your Name"
              name="name"
              autoComplete="on"
              // onChange={handleChange}
              required
            />
            <input
              type="text"
              className="header-book-appointment-input"
              placeholder="Email Address"
              name="email"
              autoComplete="on"
              // onChange={handleChange}
              required
            />
            <input
              type="number"
              className="header-book-appointment-input"
              placeholder="Phone Number"
              name="phone"
              autoComplete="on"
              // onChange={handleChange}
              required
            />
            <input
              placeholder="Date"
              className="header-book-appointment-input"
              type="text"
              name="date"
              autoComplete="on"
              onFocus={(e) => (e.target.type = "date")}
              onBlur={(e) => (e.target.type = "text")}
              // onChange={handleChange}
              required
            />
            <input
              type="text"
              className="header-book-appointment-input"
              placeholder="Time"
              onFocus={(e) => (e.target.type = "time")}
              onBlur={(e) => (e.target.type = "text")}
              name="time"
              autoComplete="on"
              // onChange={handleChange}
              required
            />
            <button
              href="#_"
              class="px-8 py-3 relative  group overflow-hidden font-medium bg-darkblue text-white inline-block"
            >
              <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-600 group-hover:h-full opacity-90"></span>
              <span class="relative group-hover:text-white whitespace-nowrap">
                Book an Appointment
              </span>
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
