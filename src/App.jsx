import React, { Suspense, useEffect } from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import {
  Appointment,
  CreateAppointment,
  Dashboard,
  DoctorDashboard,
  DoctorVideoCall,
  Home,
  InvoicePage,
  Login,
  PatientProfile,
  PrescriptionPage,
  ProfileList,
  RegisterPatient,
  VideoCall,
} from "./pages";
import ThemeContext from "./context/sidebarContext";
import { DashNavbar, Sidebar } from "./components/elements";
import { Toaster } from "react-hot-toast";
import Navbar from "./pages/Navbar";

const App = () => {
  return (
    <main className="font-manrope w-full h-screen overflow-auto overflow-x-hidden relative">
      <Suspense fallback={<h1>Loading...</h1>}>
        <Toaster />
        <HashRouter>
          <Routes>
            <Route path="/*" element={<HomeRoutes />} />

            <Route path="/dash/*" element={<DashRoutes />} />
          </Routes>
        </HashRouter>
      </Suspense>
    </main>
  );
};

const DashRoutes = () => {
  return (
    <ThemeContext>
      <Sidebar>
        <DashNavbar />
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route
            path="/operator/patient/*"
            element={
              <Routes>
                <Route element={<RegisterPatient />} path="/create-register" />
                <Route
                  element={<CreateAppointment />}
                  path="/create-appointment"
                />
                <Route element={<Dashboard />} path="/register" />
                <Route element={<Appointment />} path="/appointment" />
              </Routes>
            }
          />
          <Route element={<ProfileList />} path="/patient/profiles" />
          <Route path="/operator/doctor" element={<Dashboard />} />
          <Route path="/operator/prescription" element={<PrescriptionPage />} />
          <Route path="/operator/invoice" element={<InvoicePage />} />
          <Route path="/logout" element={<Dashboard />} />
          <Route path="/room/:roomId" element={<VideoCall />} />
          {/* <Route path="/doctor/room/:roomId" element={<DoctorVideoCall />} /> */}
          <Route path="/profile/:id" element={<PatientProfile />} />
        </Routes>
      </Sidebar>
    </ThemeContext>
  );
};

const HomeRoutes = () => {
  return (
    // <Navbar>
    //   </Navbar>
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
