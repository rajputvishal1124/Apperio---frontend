import { createSlice } from "@reduxjs/toolkit";
import {
  getAppointedPatientById,
  updateVideoCallStatus,
} from "../action/patient";

export const activeCallSlice = createSlice({
  name: "activeCallSlice",
  initialState: {
    isLoading: false,
    appointedPatient: null,
    isMessage: null,
    isError: null,
  },
  reducers: {
    activeVideoCall: (state, action) => {
      state.appointedPatient = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateVideoCallStatus.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateVideoCallStatus.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointedPatient = action.payload.patientDetail;
    });
    builder.addCase(updateVideoCallStatus.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getAppointedPatientById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAppointedPatientById.fulfilled, (state, action) => {
      state.isLoading = false;
      state.appointedPatient = action.payload.appointedPatient;
    });
    builder.addCase(getAppointedPatientById.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export const { activeVideoCall } = activeCallSlice.actions;
