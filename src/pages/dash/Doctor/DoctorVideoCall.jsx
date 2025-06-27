import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";
import { useParams } from "react-router-dom";

const DoctorVideoCall = () => {
  const { roomId } = useParams();

  const myMeeting = async (element) => {
    const appId = 1652387913;
    const serviceSecret = "1c55ae9c8a4763c0f832358b73ab4622";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appId,
      serviceSecret,
      roomId,
      Date.now().toString(), //UserID
      "Mayank Jha"
    );
    const zc = ZegoUIKitPrebuilt.create(kitToken);
    zc.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });
  };

  return (
    <div className="h-11/12 flex">
      <div ref={myMeeting} className="w-3/4 h-full"></div>
      <div className="grid sm:grid-cols-2 gap-x-8 px-6 font-IBM my-0 h-fit">
        <p className="col-span-2 font-IBM font-semibold text-xl my-5 text-sidebar-font">
          Prescription{" "}
        </p>
        <div className="my-2">
          <label
            htmlFor="patient_name"
            className="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Patient Name :
          </label>
          <input
            type="text"
            id="patient_name"
            className="rounded bg-input border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your Patient Name"
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="phone"
            class="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Mobile Number :
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your +91"
            onKeyDown={(event) => {
              if (!/[0-9\+\-]/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
          />
        </div>

        <div className="my-2 grid grid-cols-2 gap-x-4">
          <div>
            <label
              htmlFor="gender"
              class="block mb-2 text-sm font-medium text-sidebar-font"
            >
              Gender
            </label>
            <select className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5">
              <option value="" disabled selected>
                Select Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>{" "}
          </div>
          <div>
            <label
              htmlFor="gender"
              class="block mb-2 text-sm font-medium text-sidebar-font"
            >
              Age
            </label>
            <input
              type="number"
              className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder="+18"
              onKeyDown={(event) => {
                if (/[+\-\"e"]/.test(event.key) && event.key !== "Backspace") {
                  event.preventDefault();
                }
              }}
            />
          </div>
        </div>

        <div className="my-2">
          <label
            htmlFor="specialty"
            class="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Choose a Medical Category:
          </label>
          <select
            id="specialty"
            name="specialty"
            onFocus={"this.size=10"}
            className="rounded bg-input border outline-none border-gray-300 text-gray-900 ring-violet focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
          >
            <option value="Neurologist">Neurologist</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Endocrinologist">Endocrinologist</option>
            <option value="Physicians">Physicians</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Oncologist">Oncologist</option>
            <option value="Radiologist">Radiologist</option>
            <option value="Otolaryngologist">Otolaryngologist</option>
            <option value="Ophthalmologist">Ophthalmologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
            <option value="Internists">Internists</option>
            <option value="Nephrologist">Nephrologist</option>
            <option value="Pulmonologist">Pulmonologist</option>
            <option value="Allergist">Allergist</option>
            <option value="Dentist">Dentist</option>
            <option value="Emergency Medicine">Emergency Medicine</option>
            <option value="Anesthesiologist">Anesthesiologist</option>
            <option value="Geriatrician">Geriatrician</option>
            <option value="Infectious Disease Specialist">
              Infectious Disease Specialist
            </option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Podiatrist">Podiatrist</option>
          </select>
        </div>
        <div className="my-2">
          <label
            htmlFor="specialty"
            class="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Duration
          </label>
          <input
            type="text"
            id="name"
            className="rounded bg-input border outline-none uppercase placeholder:capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your Duration 1D/2M/3W/1Y"
            onKeyDown={(event) => {
              if (!/^[0-9dwym]$/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
          />
        </div>
        <button className="w-full sm:col-span-2 lg:w-1/5  mx-auto py-2 bg-violet text-white my-4 cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default DoctorVideoCall;
