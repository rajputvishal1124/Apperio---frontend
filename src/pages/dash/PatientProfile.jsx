import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  getPatientById,
  getPatientPrescription,
} from "../../redux/action/patient";

const PatientProfile = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { isLoading, registerPatient } = useSelector(
    (state) => state.registerPatient
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPatientById(id));
  }, []);
  return isLoading ? (
    <div class="flex flex-row gap-4 h-[80vh] justify-center items-center">
      <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
    </div>
  ) : (
    <div className="flex h-full scroll-smooth">
      <div className="w-full xl:w-full h-full">
        <div class="bg-white p-3 shadow-sm mx-8 rounded-2xl">
          <div class="flex items-center flex-col space-x-2 justify-center font-semibold text-gray-900 leading-8 my-8">
            <img src="/logo.png" alt="" className="w-20 " />
            <span class="tracking-wide font-roboto my-2 capitalize">
              {registerPatient?.patientDetail?.name}
            </span>
          </div>
          <div class="text-gray-700">
            <div class="grid md:grid-cols-2 text-sm">
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Patient Name</div>
                <div class="px-4 py-2">
                  {" "}
                  {registerPatient?.patientDetail?.name}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Age</div>
                <div class="px-4 py-2">
                  {" "}
                  {registerPatient?.patientDetail?.age}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Gender</div>
                <div class="px-4 py-2 capitalize">
                  {" "}
                  {registerPatient?.patientDetail?.gender}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Contact No.</div>
                <div class="px-4 py-2">
                  +91 {registerPatient?.patientDetail?.phone}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Current Address</div>
                <div class="px-4 py-2 capitalize">
                  {" "}
                  {registerPatient?.patientDetail?.address +
                    ", " +
                    registerPatient?.patientDetail?.city +
                    ", " +
                    registerPatient?.patientDetail?.state}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Patient Occupation</div>
                <div class="px-4 py-2">Farmer</div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Email.</div>
                <div class="px-4 py-2">
                  <a
                    class="text-blue-800"
                    href={`mailto:${registerPatient?.patientDetail?.email}`}
                  >
                    {registerPatient?.patientDetail?.email}
                  </a>
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Any Drug History</div>
                <div class="px-4 py-2 capitalize">
                  {registerPatient?.patientDetail?.anydrugHistory}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Any Allergy History</div>
                <div class="px-4 py-2 capitalize">
                  {registerPatient?.patientDetail?.isAyushman}
                </div>
              </div>
              <div class="grid grid-cols-2">
                <div class="px-4 py-2 font-semibold">Any Surgery History</div>
                <div class="px-4 py-2 capitalize">
                  {registerPatient?.patientDetail?.anysurgery}
                </div>
              </div>

              {registerPatient?.patientDetail?.anydrugHistory != "no" && (
                <div>
                  <div class="px-4 py-2 font-semibold">Drug History</div>
                  <div class="px-4  capitalize">
                    {registerPatient?.patientDetail?.drugHistory}
                  </div>
                </div>
              )}
              {registerPatient?.patientDetail?.anyallergy != "no" && (
                <div>
                  <div class="px-4 py-2 font-semibold">Allergy History</div>
                  <div class="px-4  capitalize">
                    {registerPatient?.patientDetail?.allergyHistory}
                  </div>
                </div>
              )}
              {registerPatient?.patientDetail?.anyallergy != "no" && (
                <div>
                  <div class="px-4 py-2 font-semibold">Allergy History</div>
                  <div class="px-4  capitalize">
                    {registerPatient?.patientDetail?.surgeryHistory}
                  </div>
                </div>
              )}
              {registerPatient?.patientDetail?.anysurgery != "no" && (
                <div>
                  <div class="px-4 py-2 font-semibold">Surgery History</div>
                  <div class="px-4  capitalize">
                    {registerPatient?.patientDetail?.drugHistory}
                  </div>
                </div>
              )}
              {registerPatient?.patientDetail?.isAyushman != "no" && (
                <div className="grid grid-cols-2 ">
                  <div class="px-4 py-2 font-semibold">Ayushman Number</div>
                  <div class="px-4  capitalize my-auto">
                    {registerPatient?.patientDetail?.ayushman}
                  </div>
                </div>
              )}
            </div>
          </div>
          <p className="mx-1 mt-6 font-semibold text-2xl">Records</p>
          <div className=" flex flex-col gap-4  overflow-auto w-full max-h-[40vh] shadow-xl rounded-xl border mt-5">
            {registerPatient?.totalPresc?.length == 0 ? (
              <p className="text-center h-full my-auto">No Record</p>
            ) : (
              registerPatient?.totalPresc?.map((x, index) => (
                <div className="flex  items-center rounded-md bg-slate-200/30">
                  <img src="/presc.png" alt="" className="w-10 m-4" />
                  <div>
                    {" "}
                    <p>{x.cheifComplaint}</p>
                    <p>{x.date}</p>
                  </div>
                  <button
                    className="w-full sm:col-span-2 lg:w-1/5  mr-4 ml-auto py-2 bg-violet text-white my-4 cursor-pointer"
                    onClick={() => {
                      dispatch(getPatientPrescription(x._id)).then(() => {
                        navigate("/dash/operator/prescription");
                      });
                    }}
                  >
                    View Prescription
                  </button>
                  <button
                    className="w-full sm:col-span-2 lg:w-1/5  mr-4  py-2 bg-violet text-white my-4 cursor-pointer"
                    onClick={() => {
                      dispatch(getPatientPrescription(x._id)).then(() => {
                        navigate("/dash/operator/invoice");
                      });
                    }}
                  >
                    View Invoice
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
