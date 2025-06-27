import { createSlice } from "@reduxjs/toolkit";
import { getUser, logOut, signInUser } from "../action/auth";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    authData: null,
    isError: null,
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authData = action.payload.user;
    });
    builder.addCase(signInUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(getUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authData = action.payload.user;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
    builder.addCase(logOut.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authData = null;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
