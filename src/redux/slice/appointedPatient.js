import { createSlice } from "@reduxjs/toolkit";
import {
  getPatientAppointment,
  newPatientAppointment,
} from "../action/patient";

export const appointedPatientSlice = createSlice({
  name: "appointedPatient",
  initialState: {
    isLoading: false,
    appointedPatient: null,
    isMessage: null,
    isError: null,
  },
  reducers: {
    clearAppointedPatientError: (state) => {
      state.isError = null;
    },
    clearAppointedPatientMsg: (state) => {
      state.isMessage = null;
    },
    clearAppointedPatient: (state) => {
      state.appointedPatient = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newPatientAppointment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(newPatientAppointment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isMessage = "Patient Appointed Successfully";
    });
    builder.addCase(newPatientAppointment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getPatientAppointment.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatientAppointment.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointedPatient = action.payload.appointedPatients;
    });
    builder.addCase(getPatientAppointment.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export const {
  clearAppointedPatientError,
  clearAppointedPatient,
  clearAppointedPatientMsg,
} = appointedPatientSlice.actions;
