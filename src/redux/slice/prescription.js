import { createSlice } from "@reduxjs/toolkit";
import { createPrescription, getPatientPrescription } from "../action/patient";

export const prescriptionSlice = createSlice({
  name: "prescriptionSlice",
  initialState: {
    isLoading: false,
    prescriptionData: null,
    isMessage: null,
    isError: null,
  },
  reducers: {
    clearPrescriptionError: (state) => {
      state.isError = null;
    },
    clearPrescriptionMsg: (state) => {
      state.isMessage = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPrescription.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createPrescription.fulfilled, (state, action) => {
      state.isLoading = false;
      state.prescriptionData = action.payload.prescription;
      state.isMessage = "Prescription Created Successfully";
    });
    builder.addCase(createPrescription.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getPatientPrescription.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPatientPrescription.fulfilled, (state, action) => {
      state.isLoading = false;
      state.prescriptionData = action.payload;
      state.isMessage = "Prescription Created Successfully";
    });
    builder.addCase(getPatientPrescription.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});

export const { clearPrescriptionError, clearPrescriptionMsg } =
  prescriptionSlice.actions;
