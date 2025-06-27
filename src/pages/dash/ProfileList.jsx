import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRegisteredPatient } from "../../redux/action/patient";
import { useNavigate } from "react-router-dom";

const ProfileList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading, registerPatient } = useSelector(
    (state) => state.registerPatient
  );

  useEffect(() => {
    dispatch(getAllRegisteredPatient());
  }, []);

  return isLoading ? (
    <div class="flex flex-row gap-4 h-[80vh] justify-center items-center">
      <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-green-500 border-t-transparent shadow-md"></div>
    </div>
  ) : (
    <div className=" mx-4 px-4 rounded-md  py-1">
      <p className="font-IBM font-semibold my-4 text-base text-sidebar-font">
        Patient Profile
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
                      Gender
                    </th>
                    <th scope="col" class="px-6 py-4 text-center">
                      Phone{" "}
                    </th>
                    <th scope="col" class="px-6 py-4 text-center">
                      Location
                    </th>
                    <th scope="col" class="px-6 py-4 text-center">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(registerPatient) &&
                    registerPatient?.map((x, index) => (
                      <tr class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 ">
                        <td class="whitespace-nowrap px-6 py-4 ">
                          {index + 1}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-center capitalize">
                          {x?.name}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-center">
                          {x?.age}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 capitalize text-center">
                          {x?.gender}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-center">
                          {x?.phone}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 text-center capitalize">
                          {x?.address}
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 flex justify-center gap-4">
                          <button
                            className="px-4 py-1.5 bg-indigo-600/75 font-medium rounded text-white"
                            onClick={() => navigate(`/dash/profile/${x?._id}`)}
                          >
                            View Profile
                          </button>
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
  );
};

export default ProfileList;
