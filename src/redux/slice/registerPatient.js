import { createSlice } from "@reduxjs/toolkit";
import {
  getAllRegisteredPatient,
  getPatientById,
  newRegisterPatient,
  searchPatient,
} from "../action/patient";

export const registerPatientSlice = createSlice({
  name: "registerPatient",
  initialState: {
    isLoading: false,
    isMessage: null,
    registerPatient: null,
    isError: null,
  },
  reducers: {
    clearRegisterPatientError: (state) => {
      state.isError = null;
    },
    clearRegisterPatientMsg: (state) => {
      state.isMessage = null;
    },
    addRegisterPatient: (state, action) => {
      state.registerPatient.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(newRegisterPatient.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(newRegisterPatient.fulfilled, (state, action) => {
      state.isLoading = false;
      // state.registerPatient = action.payload.newPatient;
      state.isMessage = "Patient Registered Successfully";
    });
    builder.addCase(newRegisterPatient.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getAllRegisteredPatient.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllRegisteredPatient.fulfilled, (state, action) => {
      state.isLoading = false;
      state.registerPatient = action.payload.registeredPatient;
    });
    builder.addCase(getAllRegisteredPatient.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(searchPatient.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchPatient.fulfilled, (state, action) => {
      state.isLoading = false;
      state.registerPatient = action.payload.patientRegistered;
    });
    builder.addCase(searchPatient.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getPatientById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatientById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.registerPatient = action.payload;
    });
    builder.addCase(getPatientById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export const {
  clearRegisterPatientError,
  addRegisterPatient,
  clearRegisterPatientMsg,
} = registerPatientSlice.actions;
