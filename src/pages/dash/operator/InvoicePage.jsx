import moment from "moment";
import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import logo from "../../../assets/logo.png";

const InvoicePage = () => {
  const { prescriptionData } = useSelector((state) => state.prescription);
  const { authData } = useSelector((state) => state.auth);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
      <div className="flex justify-center">
        <button
          onClick={handlePrint}
          className="w-full sm:col-span-2 lg:w-1/5 my-8 mx-auto py-2 bg-violet text-white  cursor-pointer"
        >
          Print Prescription
        </button>
      </div>
      <div
        ref={componentRef}
        className="w-[21cm] h-[18.5cm] overflow-auto mx-auto my-8  relative"
      >
        <div className="flex flex-col bg-white border-2 border-black h-full">
          <div className="flex justify-between h-32 border-b-2 border-black relative">
            <div className="flex flex-col items-center w-1/3">
              <img src={logo} alt="" className="w-16 h-16 mt-5" />
              <div className="flex justify-center">
                <h1 className="text-lg font-bold text-indigo-600 mr-1 font-roboto uppercase">
                  Apiero
                </h1>
                <h1 className="text-lg font-bold text-orange-600 font-roboto uppercase">
                  Medica
                </h1>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/3">
              <h1 className="text-xl text-indigo-700 font-bold mt-5 mx-5">
                APIERO MEDICA{" "}
              </h1>
              <p className="text-sm font-medium text-stone-700 self-center italic">
                Empowering HealthCare
              </p>
              <p className="text-sm font-medium self-center">
                Mob No: +91 7898839513
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <p className="text-base mx-2 font-bold mt-10 font-roboto">
              Date :{" "}
              {moment(prescriptionData?.prescriptiondetail?.updatedAt).format(
                "DD-MMM-YYYY, h:mm A"
              )}
            </p>
          </div>

          <div className="flex flex-col justify-start w-[10cm]">
            <p className="text-base mx-2 font-bold mt-2 font-roboto capitalize">
              ID: {prescriptionData?.patientDetail?.name} (
              {prescriptionData?.patientDetail?.gender == "male" ? "M" : "F"}) /{" "}
              {prescriptionData?.patientDetail?.age} Y
            </p>
            {/* <p className="text-[16px] mx-2 font-roboto font-normal leading-7">
              Address : Raisen Rd
            </p> */}
            <p className="text-[14px] mx-2 font-roboto font-normal leading-5">
              Weight(kg): 47, Height (cms): 120, BP: 120/80 mmHg
            </p>
          </div>
          <div className="flex w-[10cm] mt-10">
            <p className="text-lg mx-2 font-bold font-roboto">Invoive No : </p>
            <p className="text-base mx-2 font-roboto font-normal leading-7">
              ABC
            </p>
          </div>
          <div className="flex justify-center">
            <img src={logo} alt="" className="absolute opacity-25 w-2/5" />
          </div>
          <div className="flex flex-col justify-center my-5">
            <div className="flex flex-col justify-center">
              <div className="flex border-t-4 border-b-2 border-black justify-around bg-slate-400">
                <h1 className="font-roboto font-bold text-lg text-center">
                  Sr.no.{" "}
                </h1>
                <h1 className="font-roboto font-bold text-lg text-center">
                  Description
                </h1>

                <h1 className="font-roboto font-bold text-lg text-center">
                  Amount
                </h1>
              </div>
              <div className=" border-b-2 border-black flex flex-col odd:justify-end">
                <div className="flex border-t-2 border-black justify-around border-b-2 py-4">
                  <h1 className="font-roboto font-normal text-lg text-center w-[6cm]">
                    1.
                  </h1>
                  <h1 className="font-roboto font-normal text-lg text-center w-[8cm]">
                    Consulting
                  </h1>

                  <h1 className="font-roboto font-normal text-lg w-[8cm] text-center">
                    150
                  </h1>
                </div>
                <div className="flex border-black border-b-2 py-4 last:mt-auto bg-slate-400">
                  <h1 className="font-roboto text-lg font-extrabold ml-auto mx-4">
                    Total-Amount : 150
                  </h1>
                </div>
              </div>
            </div>

            <div className="flex">
              <p className="text-base mx-2 font-bold my-3 font-roboto">
                Date :{" "}
                {moment(prescriptionData?.prescriptiondetail?.updatedAt).format(
                  "DD-MMM-YYYY, h:mm A"
                )}
              </p>
            </div>
          </div>
          <div className="flex justify-end last:mt-auto mb-4">
            <div className="flex flex-col items-end relative w-[6cm]">
              {/* <p className="self-center">Signature</p> */}
              <h1 className="text-xl text-indigo-700 font-bold self-center">
                Manager Head
              </h1>
              {/* <p className="text-sm font-medium self-center">M.B.B.S, M.D, M.S</p>
            <p className="text-sm font-medium self-center">
              Mob No: +91 7440777333
            </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoicePage;
