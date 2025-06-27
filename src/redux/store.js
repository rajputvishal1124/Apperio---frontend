import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slice/auth";
import { registerPatientSlice } from "./slice/registerPatient";
import { appointedPatientSlice } from "./slice/appointedPatient";
import { activeCallSlice } from "./slice/activeCall";
import { prescriptionSlice } from "./slice/prescription";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    registerPatient: registerPatientSlice.reducer,
    appointedPatient: appointedPatientSlice.reducer,
    activeCall: activeCallSlice.reducer,
    prescription: prescriptionSlice.reducer,
  },
});

export default store;
