import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import moment from "moment";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import logo from "../../../assets/logo.png";

const PrescriptionPage = () => {
  const { isLoading, prescriptionData } = useSelector(
    (state) => state.prescription
  );
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {}, []);

  const navigate = useNavigate();
  return isLoading ? (
    <>
      {" "}
      <div class="flex flex-row gap-4 justify-center items-center h-4/5">
        <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
      </div>
    </>
  ) : (
    <>
      <div className="flex justify-between">
        <button
          onClick={handlePrint}
          className="w-full sm:col-span-2 lg:w-1/5 my-8 mx-auto py-2 bg-violet text-white  cursor-pointer"
        >
          Print Prescription
        </button>
        <button
          onClick={() => navigate("/dash/operator/invoice")}
          className="w-full sm:col-span-2 lg:w-1/5 my-8 mx-auto py-2 bg-violet text-white  cursor-pointer"
        >
          Generate Invoice
        </button>
      </div>
      <div
        ref={componentRef}
        className=" w-[21cm] min-h-[29.5cm] overflow-auto mx-auto  border-2 border-black bg-white relative"
        id="actual-receipt"
      >
        <div className="flex flex-col">
          <div className="flex justify-between h-32 border-b-2 border-black relative">
            <div className="flex flex-col items-center relative w-1/3">
              <h1 className="text-xl text-indigo-700 font-bold mt-5 mx-5">
                Dr {prescriptionData?.prescriptiondetail?.doctorId?.name}
              </h1>
              <p className="text-sm font-medium self-center uppercase">
                {prescriptionData?.prescriptiondetail?.doctorId?.qualification}
              </p>
              <p className="text-sm font-medium self-center">
                Mob No: +91{" "}
                {prescriptionData?.prescriptiondetail?.doctorId?.phone}
              </p>
            </div>
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
          <div className="flex justify-between my-5">
            <div className="flex">
              <p className="text-base mx-2 font-bold mt-10 font-roboto capitalize">
                Address :{" "}
                {prescriptionData?.patientDetail?.address +
                  " " +
                  prescriptionData?.patientDetail?.city}
              </p>
            </div>
            <div className="flex">
              <p className="text-base mx-2 font-bold mt-10 font-roboto">
                Date :{" "}
                {moment(prescriptionData?.prescriptiondetail?.updatedAt).format(
                  "DD-MMM-YYYY, h:mm A"
                )}
              </p>
            </div>
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
          <div className="flex flex-col  justify-start w-[95%] mt-3">
            <p className="text-base mx-2 font-bold mt-2 font-roboto whitespace-nowrap">
              Known Medical History of
            </p>
            <p className="text-base mx-3 font-roboto font-normal leading-7 capitalize">
              {prescriptionData?.patientDetail?.medicalHistory}
            </p>
          </div>
          {prescriptionData?.patientDetail?.anydrugHistory != "no" && (
            <div className="flex flex-col  justify-start w-[95%] mt-3">
              <p className="text-base mx-2 font-bold mt-2 font-roboto whitespace-nowrap">
                Known Drug History :
              </p>
              <p className="text-base mx-3 font-roboto font-normal leading-7 capitalize">
                {prescriptionData?.patientDetail?.drugHistory}
              </p>
            </div>
          )}
          {prescriptionData?.patientDetail?.anyallergy != "no" && (
            <div className="flex flex-col  justify-start w-[95%] mt-3">
              <p className="text-base mx-2 font-bold mt-2 font-roboto whitespace-nowrap">
                Known Allergy History :
              </p>
              <p className="text-base mx-3 font-roboto font-normal leading-7 capitalize">
                {prescriptionData?.patientDetail?.allergyHistory}
              </p>
            </div>
          )}
          {prescriptionData?.patientDetail?.anysurgery != "no" && (
            <div className="flex flex-col  justify-start w-[95%] mt-3">
              <p className="text-base mx-2 font-bold mt-2 font-roboto whitespace-nowrap">
                Known Allergy History :
              </p>
              <p className="text-base mx-3 font-roboto font-normal leading-7 capitalize">
                {prescriptionData?.patientDetail?.surgeryHistory}
              </p>
            </div>
          )}

          <div className="flex justify-center">
            <img src={logo} alt="" className="absolute opacity-25 w-2/5" />
          </div>
          <div className="flex flex-col justify-start my-5">
            <div className="flex border-t-4 border-b-2 border-black justify-around bg-slate-400">
              <h1 className="font-roboto font-bold text-lg">
                Chief Complaints
              </h1>
              {/* <h1 className="font-roboto font-bold text-lg">
                Clinical Findings
              </h1> */}
            </div>
            <div className="flex border-t-2 border-b-2 border-black justify-around">
              <h1 className="  capitalize">
                {" "}
                {prescriptionData?.prescriptiondetail?.cheifComplaint}
              </h1>
              {/* <h1 className="font-roboto font-normal text-lg">2. Finding</h1> */}
            </div>
            {/* <div className="flex flex-col justify-start my-3">
              <p className="text-base mx-2 font-bold mt-2 font-roboto">
                Notes :
              </p>
              <p className="text-base mx-2 font-roboto font-medium leading-7">
                Sample Internal Notes
              </p>
            </div> */}
            <div className="flex flex-col justify-start w-[10cm]">
              <p className="text-base mx-2 font-bold mt-2 font-roboto">
                Diagosis :
              </p>
              {prescriptionData?.prescriptiondetail?.diagnosiss.map(
                (x, index) => (
                  <p className="text-base mx-2 font-roboto font-medium leading-7 capitalize">
                    {index + 1}. {x.diagnosis}
                  </p>
                )
              )}
            </div>
            <div className="flex flex-col justify-start my-3">
              <p className="text-base mx-2 font-bold mt-2 font-roboto">
                Procedures Conducted
              </p>
              {prescriptionData?.prescriptiondetail?.procedureConducteds.map(
                (x, index) => (
                  <p className="text-base mx-2 font-roboto font-medium leading-7 capitalize">
                    {index + 1}. {x.procedureConducted}
                  </p>
                )
              )}
            </div>

            <div className="flex flex-col justify-start my-5">
              <div className="flex border-t-4 border-b-2 border-black justify-around bg-slate-400">
                <h1 className="font-roboto font-bold text-lg">Medicine Name</h1>
                <h1 className="font-roboto font-bold text-lg">Formulation</h1>
                <h1 className="font-roboto font-bold text-lg">Dosage</h1>
                <h1 className="font-roboto font-bold text-lg">Duration</h1>
              </div>
              <div className=" border-b-2 border-black flex flex-col odd:justify-end">
                {prescriptionData?.prescriptiondetail?.medicines?.map(
                  (x, index) => (
                    <div
                      className={`flex border-t-2 border-black justify-around py-4  ${
                        (index + 1) % 2 == 0 && " bg-slate-200 "
                      }`}
                    >
                      <h1 className="font-roboto font-normal text-base text-center w-1/4 ml-4 capitalize">
                        {index + 1}. {x?.medName}
                      </h1>
                      <h1 className="font-roboto font-normal text-base text-center w-1/4 ml-4 capitalize">
                        {x?.formulation_type}
                      </h1>
                      <div className="flex flex-col w-1/4 items-center self-center ml-4">
                        <h1 className="font-roboto font-normal text-base text-center">
                          {x?.dosage + ", " + x?.timing}
                        </h1>
                        {/* <h1 className="font-roboto font-normal text-base text-center">
                          (Before Food){" "}
                        </h1> */}
                      </div>
                      <div className="flex flex-col w-1/4 items-center">
                        <h1 className="font-roboto font-normal text-base text-center">
                          {x?.duration} Days
                        </h1>
                        <h1 className="font-roboto font-normal text-base text-center">
                          (Total: {x?.quantity} Tab){" "}
                        </h1>
                      </div>
                    </div>
                  )
                )}

                {/* <div className="flex border-black border-b-2 border-t-4 py-4 last:mt-auto bg-slate-400">
                  <h1 className="font-roboto text-lg font-extrabold ml-auto mx-4">
                    Total-Amount : 50000
                  </h1>
                </div> */}
              </div>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-base mx-2 font-bold mt-2 font-roboto">
                Lab Test:
              </p>
              {prescriptionData?.prescriptiondetail?.labTests.map(
                (x, index) => (
                  <p className="text-base mx-2 font-roboto font-medium leading-7 capitalize">
                    {index + 1}. {x.labTest}
                  </p>
                )
              )}
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-base mx-2 font-bold mt-2 font-roboto">
                Advice Given :
              </p>
              {prescriptionData?.prescriptiondetail?.advices.map((x, index) => (
                <p className="text-base mx-2 font-roboto font-medium leading-7 capitalize">
                  {index + 1}. {x.advice}
                </p>
              ))}
            </div>

            <div className="flex justify-end">
              <div className="flex flex-col items-end relative w-[6cm]">
                {/* <p className="self-center">Signature</p> */}
                <h1 className="text-xl text-indigo-700 font-bold self-center">
                  Dr {prescriptionData?.prescriptiondetail?.doctorId?.name}
                </h1>
                <p className="text-sm font-medium self-center uppercase">
                  {
                    prescriptionData?.prescriptiondetail?.doctorId
                      ?.qualification
                  }
                </p>
                <p className="text-sm font-medium self-center">
                  Mob No: +91{" "}
                  {prescriptionData?.prescriptiondetail?.doctorId?.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4"></div>
    </>
  );
};

export default PrescriptionPage;
