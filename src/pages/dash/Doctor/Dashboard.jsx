import React from "react";
import { DashCount } from "../operator/dashboard";

const DoctorDashboard = () => {
  return (
    <div className="w-full h-full overflow-auto overflow-x-hidden">
      {/* <Navbar /> */}
      <div className="mx-4 sm:mx-8 my-4">
        <p className="font-IBM font-bold text-lg my-5 text-sidebar-font">
          Dashboard
        </p>
        <div className="flex items-center justify-start flex-wrap gap-4">
          <DashCount
            title={"Today Appointment"}
            count={"100+"}
            img="/schedule.png"
          />
        </div>
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
                        <th scope="col" class="px-6 py-4 w-[30%]">
                          Patient
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Age
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Location
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Chief Complaint
                        </th>
                        <th scope="col" class="px-6 py-4">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 ">
                        <td class="whitespace-nowrap px-6 py-4">Mark</td>
                        <td class="whitespace-nowrap px-6 py-4">21</td>
                        <td class="whitespace-nowrap px-6 py-4">Bhopal</td>
                        <td class="whitespace-nowrap px-6 py-4">Fever</td>
                        <td class="whitespace-nowrap px-6 py-4 flex gap-4">
                          <button className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white">
                            Video
                          </button>
                          <button className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white">
                            Prescription
                          </button>
                        </td>
                      </tr>
                      <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 ">
                        <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                        <td class="whitespace-nowrap px-6 py-4">20</td>
                        <td class="whitespace-nowrap px-6 py-4">Patna</td>
                        <td class="whitespace-nowrap px-6 py-4">Fever</td>
                        <td class="whitespace-nowrap px-6 py-4 flex gap-4">
                          <button className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white">
                            Video
                          </button>
                          <button className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white">
                            Prescription
                          </button>
                        </td>
                      </tr>
                      <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 ">
                        <td class="whitespace-nowrap px-6 py-4">Larry</td>
                        <td class="whitespace-nowrap px-6 py-4">23</td>
                        <td class="whitespace-nowrap px-6 py-4">Ranchi</td>
                        <td class="whitespace-nowrap px-6 py-4">Fever</td>
                        <td class="whitespace-nowrap px-6 py-4 flex gap-4">
                          <button className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white">
                            Video
                          </button>
                          <button className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white">
                            Prescription
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
