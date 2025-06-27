import React, { useContext, useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { SidebarContext } from "../../context/sidebarContext";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllRegisteredPatient,
  searchPatient,
} from "../../redux/action/patient";

const DashNavbar = () => {
  const sidebarWidth = useContext(SidebarContext);

  const { authData } = useSelector((state) => state.auth);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setSearch({ ...search, [name]: value });

    dispatch(searchPatient(search));
  };

  useEffect(() => {
    if (search?.name == "") {
      dispatch(getAllRegisteredPatient());
    }
  }, [search]);

  return (
    <nav className="h-[70px] top-0 sticky bg-white z-10 border-b">
      <div className="flex items-center justify-between h-full">
        {" "}
        <img
          src="/bars.svg"
          alt=""
          className={`w-7 mx-3 ${!sidebarWidth.sidebar ? " hidden" : ""}`}
          onClick={() => sidebarWidth.updateSidebar()}
        />
        <div class="flex mx-3 w-full h-full items-center">
          <div class="relative min-w-52 max-w-lg hidden sm:block">
            <input
              type="search"
              id="search-dropdown"
              name="name"
              onChange={handleChange}
              className="block h-10 pl-4 font-IBM font-medium outline-none focus:ring-0 w-full z-20 text-sm text-gray-900 bg-[#f3f3f9]  "
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              class="absolute top-1 end-1 p-2.5  w-fit h-fit text-sm font-medium text-white bg-violet rounded  border-violet-500 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 "
              style={{ boxShadow: "1px 2px 6px 2px rgba(81,86,190,.5)" }}
            >
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only p-2">Search</span>
            </button>
          </div>
          <div className="flex-1 gap-3 flex items-center justify-end h-full">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather text-sidebar-font feather-moon icon-lg layout-mode-dark"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather text-sidebar-font feather-sun icon-lg layout-mode-light"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <div className=" flex items-center gap-2 border border-s-slate-300 bg-[#e9e9ef40] h-full px-4">
              <AccountCircleIcon className="border-2 border-blue-900 rounded-full" />
              <p className=" text-sm font-medium">{authData?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
