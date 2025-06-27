import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newRegisterPatient } from "../../../redux/action/patient";
import toast from "react-hot-toast";
import {
  clearRegisterPatientError,
  clearRegisterPatientMsg,
} from "../../../redux/slice/registerPatient";

const RegisterPatient = () => {
  const [drug, drugOpen] = useState(false);
  const [alergy, alergyOpen] = useState(false);
  const [operation, operationOpen] = useState(false);
  const [ayush, setAyush] = useState(false);

  const [formData, setFormData] = useState();
  const dispatch = useDispatch();

  const { isLoading, isMessage, registerPatient, isError } = useSelector(
    (state) => state.registerPatient
  );

  useEffect(() => {
    if (!drug) {
      setFormData((prevState) => ({
        ...prevState,
        drugHistory: "no",
      }));
    }
    if (!alergy) {
      setFormData((prevState) => ({
        ...prevState,
        allergyHistory: "no",
      }));
    }
    if (!operation) {
      setFormData((prevState) => ({
        ...prevState,
        surgeryHistory: "no",
      }));
    }
    if (!ayush) {
      setFormData((prevState) => ({
        ...prevState,
        ayushman: "no",
      }));
    }
  }, [drug, alergy, operation, ayush]);

  useEffect(() => {
    if (isError) {
      toast.error(isError);
      dispatch(clearRegisterPatientError());
    }
  }, [isError]);

  useEffect(() => {
    if (isMessage) {
      toast.success(isMessage);
      dispatch(clearRegisterPatientMsg());
    }
  }, [isMessage]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    !isLoading &&
      dispatch(newRegisterPatient(formData)).then((res) => {
        e.target.reset();
      });
  };

  return (
    <div className="mx-4 sm:mx-8 my-4">
      <p className="font-IBM font-semibold text-lg my-5 text-sidebar-font">
        Register Patient
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
            className="rounded bg-input border outline-none capitalize border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-2">
          <label
            htmlFor="email"
            class="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Email
          </label>
          <input
            type="email"
            id="name"
            name="email"
            className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your Email"
            onChange={handleChange}
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
            name="phone"
            className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your +91"
            onKeyDown={(event) => {
              if (!/[0-9\+\-]/.test(event.key) && event.key !== "Backspace") {
                event.preventDefault();
              }
            }}
            onChange={handleChange}
            required
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
            <select
              name="gender"
              className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
              onChange={handleChange}
              required
            >
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
              name="age"
              className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder="+18"
              onKeyDown={(event) => {
                if (/[+\-]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="my-2">
          <label
            htmlFor="address"
            class="block mb-2 text-sm font-medium text-sidebar-font"
          >
            Address
          </label>
          <input
            type="text"
            id="phone"
            name="address"
            className="rounded bg-input border   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
            placeholder="Enter Your Address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="my-2 grid grid-cols-2 gap-x-4">
          <div>
            <label
              htmlFor="gender"
              class="block mb-2 text-sm font-medium text-sidebar-font"
            >
              City
            </label>
            <input
              type="text"
              name="city"
              className="rounded bg-input border capitalize   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder="Enter your City"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label
              htmlFor="gender"
              class="block mb-2 text-sm font-medium text-sidebar-font"
            >
              State
            </label>
            <input
              type="text"
              name="state"
              className="rounded bg-input border capitalize   outline-none border-gray-300 text-gray-900 focus:ring-violet focus:border-violet block flex-1 min-w-0 w-full text-sm p-2.5"
              placeholder="Enter your State"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="my-2 sm:col-span-2">
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-2"
          >
            Past Medical History :
          </label>
          <textarea
            id="med-history"
            rows="4"
            name="medicalHistory"
            class="block p-2.5 w-full font-IBM text-sm text-gray-900 bg-input rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write your Medical history here..."
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex my-2  sm:flex-row flex-col items-start">
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-auto"
          >
            If any medical condition Allergy :
          </label>
          <div class="flex items-center mx-2 my-1">
            <input
              id="inline-radio1"
              type="radio"
              value="yes"
              name="anyallergy"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => alergyOpen(true)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-radio1"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Yes{" "}
            </label>
          </div>
          <div class="flex items-center mx-2 my-1">
            <input
              id="inline-2-radio"
              type="radio"
              value="no"
              name="anyallergy"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => alergyOpen(false)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-2-radio1"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              No{" "}
            </label>
          </div>
        </div>
        <div className="flex my-2  sm:flex-row flex-col items-start">
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-auto"
          >
            Any Drug History :
          </label>
          <div class="flex items-center mx-2 my-1">
            <input
              id="inline-radio"
              type="radio"
              value="yes"
              name="anydrugHistory"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => drugOpen(true)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-radio"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Yes{" "}
            </label>
          </div>
          <div class="flex items-center mx-2 my-1">
            <input
              id="inline-2-radio"
              type="radio"
              value="no"
              name="anydrugHistory"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => drugOpen(false)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              No{" "}
            </label>
          </div>
        </div>
        <div className="flex my-2  sm:flex-row flex-col items-start">
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-auto"
          >
            Any Surgery :
          </label>
          <div class="flex items-center mx-2 my-1">
            <input
              id="inline-radio"
              type="radio"
              value="yes"
              name="anysurgery"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => operationOpen(true)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-radio"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Yes{" "}
            </label>
          </div>
          <div class="flex items-center mx-2 my-1">
            <input
              id="inline-2-radio"
              type="radio"
              value="no"
              name="anysurgery"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => operationOpen(false)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              No{" "}
            </label>
          </div>
        </div>

        <div className={` sm:col-span-2 ${!drug && "hidden"}`}>
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-2"
          >
            About Drug History :
          </label>
          <textarea
            id="med-history"
            rows="4"
            name="drugHistory"
            className="block p-2.5 w-full text-sm text-sidebar-font bg-input rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write about your Drug history here..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={` sm:col-span-2 ${!alergy && "hidden"}`}>
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-2"
          >
            About Allergy :
          </label>
          <textarea
            id="med-history"
            rows="4"
            name="allergyHistory"
            className="block p-2.5 w-full text-sm text-sidebar-font bg-input rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write about your Drug history here..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={` sm:col-span-2 ${!operation && "hidden"}`}>
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-2"
          >
            About Surgery :
          </label>
          <textarea
            id="med-history"
            rows="4"
            name="surgeryHistory"
            className="block p-2.5 w-full text-sm text-sidebar-font bg-input rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Write about your Drug history here..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex my-2  sm:flex-row flex-col items-start">
          <label
            htmlFor="med-history"
            class="block text-sm font-medium text-sidebar-font my-auto"
          >
            Is Ayushman Card :
          </label>
          <div class="flex items-center mx-2 my-auto">
            <input
              id="inline-radio"
              type="radio"
              value="yes"
              name="isAyushman"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => setAyush(true)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-radio"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Yes{" "}
            </label>
          </div>
          <div class="flex items-center mx-2 my-auto">
            <input
              id="inline-2-radio"
              type="radio"
              value="no"
              name="isAyushman"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
              onClick={() => setAyush(false)}
              onChange={handleChange}
            />
            <label
              htmlFor="inline-2-radio"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              No{" "}
            </label>
          </div>
        </div>
        {ayush && (
          <div className="flex">
            <div className={`flex-1 ${!ayush && " hidden"}`}>
              <label
                htmlFor="ayushman"
                className="block text-sm font-medium text-sidebar-font my-2"
              >
                Ayushman Number :
              </label>
              <input
                name="ayushman"
                className="block p-2.5 w-11/12 text-sm text-sidebar-font uppercase  bg-input rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                placeholder="Example QWRT2346"
                onChange={handleChange}
              />
            </div>
          </div>
        )}
        <button className="w-full sm:col-span-2 lg:w-1/5  mx-auto py-2 bg-violet text-white my-4">
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

export default RegisterPatient;
