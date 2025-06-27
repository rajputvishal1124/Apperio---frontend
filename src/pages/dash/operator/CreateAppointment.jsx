import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { newPatientAppointment } from "../../../redux/action/patient";
import {
  clearAppointedPatient,
  clearAppointedPatientError,
  clearAppointedPatientMsg,
} from "../../../redux/slice/appointedPatient";

const CreateAppointment = () => {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();

  const { isLoading, isMessage, isError } = useSelector(
    (state) => state.appointedPatient
  );
  useEffect(() => {
    dispatch(clearAppointedPatient());
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch(clearAppointedPatientError());
    } else if (isMessage) {
      toast.success(isMessage);
      dispatch(clearAppointedPatientMsg());
    }
  }, [isError, isMessage]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !isLoading &&
      dispatch(newPatientAppointment(formData)).then(() => {
        setFormData();
        e.target.reset();
      });
  };
  return (
    <div className="mx-4 sm:mx-8 my-4">
      <p className="font-IBM font-semibold text-lg my-5 text-sidebar-font">
        Patient Appointment
      </p>
      <form
        className="grid sm:grid-cols-2 gap-x-8 px-6 font-IBM"
        onSubmit={handleSubmit}
      >
        <div className="my-2">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData?.name}
            onChange={handleChange}
            autoComplete="off"
            className="rounded bg-input border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="phone"
            class="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={formData?.phone}
            name="phone"
            onChange={handleChange}
            className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your +91"
            onKeyDown={(event) => {
              if (!/[0-9\+\-]/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
            required
          />
        </div>

        <div className="my-2">
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
            value={formData?.age}
            name="age"
            onChange={handleChange}
            onKeyDown={(event) => {
              if (/[+\-\"e"]/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
            required
          />
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
            name="problemCategory"
            onChange={handleChange}
            value={formData?.problemCategory}
            className="rounded bg-input border outline-none border-gray-300 text-gray-900 ring-violet focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            required
          >
            <option value="" disabled selected>
              Select Medical Category
            </option>{" "}
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
            value={formData?.problemDuration}
            onChange={handleChange}
            className="rounded bg-input border outline-none uppercase placeholder:capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your Duration 1D/2M/3W/1Y"
            name="problemDuration"
            onKeyDown={(event) => {
              if (!/^[0-9dwym]$/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
            required
          />
        </div>
        <button
          className="w-full sm:col-span-2 lg:w-1/5  mx-auto py-2 bg-violet text-white my-4 cursor-pointer"
          // onClick={handleSubmit}
        >
          {!isLoading ? (
            "Submit"
          ) : (
            <div className="w-8 h-8 rounded-full animate-spin border-y-4 mx-auto border-solid border-white border-t-transparent shadow-md"></div>
          )}
        </button>
      </form>
    </div>
  );
};

export default CreateAppointment;
