import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientAppointment } from "../../../redux/action/patient";
import { useNavigate } from "react-router-dom";
import { activeVideoCall } from "../../../redux/slice/activeCall";
import schedule from "../../../assets/schedule.png";
import earnings from "../../../assets/earnings.png";
import opd from "../../../assets/opd.png";
import doctor from "../../../assets/doctor.png";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { isLoading, appointedPatient } = useSelector(
    (state) => state.appointedPatient
  );
  const { isLoading: authLoading, authData } = useSelector(
    (state) => state.auth
  );
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getPatientAppointment());
  }, []);
  return authLoading ? (
    <div class="flex flex-row gap-4 h-[80vh] justify-center items-center">
      <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
    </div>
  ) : (
    <div className="w-full h-full overflow-auto overflow-x-hidden">
      {/* <Navbar /> */}
      <div className="mx-4 sm:mx-8 my-4">
        <p className="font-IBM font-bold text-lg my-5 text-sidebar-font">
          Dashboard
        </p>
        <div className="flex items-center justify-start flex-wrap gap-4">
          <DashCount
            title={"Today Appointment"}
            count={appointedPatient?.length}
            img={schedule}
          />
          {authData?.type != "doctor" && (
            <>
              <DashCount
                title={"Monthly Earning"}
                count={" ₹ " + appointedPatient?.length * 200}
                img={earnings}
              />
              <DashCount
                title={"Available Doctor"}
                count={" 30+"}
                img={doctor}
              />
              <DashCount
                title={"General OPD"}
                count={"10:00AM-12:00PM"}
                img={opd}
              />
            </>
          )}
        </div>

        {isLoading ? (
          <div class="flex flex-row gap-4 h-[80vh] justify-center items-center">
            <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
          </div>
        ) : (
          <div className="  px-4 rounded-md my-8 py-3">
            <p className="font-IBM font-medium my-4 text-base text-sidebar-font">
              Today Appointment
            </p>
            <div class="flex my-4 flex-col  ">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class=" border min-w-full text-left text-sm font-light text-surface">
                      <thead class="border-b border-neutral-200 font-medium text-sidebar-font">
                        <tr>
                          <th scope="col" class="px-6 py-4 ">
                            Sl No.
                          </th>
                          <th scope="col" class="px-6 py-4  text-center">
                            Patient Name
                          </th>
                          <th scope="col" class="px-6 py-4 text-center">
                            Age
                          </th>
                          <th scope="col" class="px-6 py-4 text-center">
                            Location
                          </th>
                          <th scope="col" class="px-6 py-4 text-center">
                            Chief Complaint
                          </th>
                          <th scope="col" class="px-6 py-4 text-center">
                            Problem Duration
                          </th>
                          <th scope="col" class="px-6 py-4 text-center">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {appointedPatient != null &&
                          appointedPatient?.map((x, index) => (
                            <tr
                              key={index}
                              class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 "
                            >
                              <td class="whitespace-nowrap px-6 py-4 ">
                                {index + 1}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-center">
                                {x?.name}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-center">
                                {x?.age}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-center">
                                Bhopal
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-center">
                                {x?.problemCategory}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 text-center uppercase">
                                {x?.problemDuration}
                              </td>
                              <td class="whitespace-nowrap px-6 py-4 flex justify-center gap-4">
                                <button
                                  onClick={() => {
                                    dispatch(activeVideoCall(x));
                                    navigate(`/dash/room/${x.code}`);
                                  }}
                                  className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white"
                                >
                                  {" "}
                                  {x?.videoCall}
                                </button>
                                {/* dxx */}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

export const DashCount = ({ title, count, img }) => {
  return (
    <div className="border  rounded-md shadow border-indigo-500/25 flex flex-wrap max-w-80 min-w-64 h-fit px-4 py-3 ">
      <div className="block w-[3/5]">
        <p className="text-gray-600 text-base my-2 whitespace-nowrap">
          {title}
        </p>
        <p className="font-semibold py-1.5 text-sidebar-font text-xl">
          {count}
        </p>
        {/* <p className="my-2 text-sidebar-font text-sm">
                  <span className="bg-green-400/70 px-1.5 py-0.5 rounded-md  text-green-700">
                  +10
                  </span>{" "}
                  Since last week
                </p> */}
      </div>
      <img src={img} alt="" className="h-[75px] my-auto mx-auto p-2" />{" "}
    </div>
  );
};
