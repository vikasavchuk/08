import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    userData: null,
    token: null,
    isSignedIn: false,
    isRefreshing: false,
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload.user;
        state.token = payload.token;
        state.isSignedIn = true;
        state.error = false;
      })
      .addCase(register.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.userData = payload.user;
        state.token = payload.token;
        state.isSignedIn = true;
        state.error = false;
      })
      .addCase(login.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
        state.error = false;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.isRefreshing = false;
        state.userData = payload;
        state.isSignedIn = true;
        state.error = false;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.isRefreshing = false;
        state.error = true;
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(logout.fulfilled, (state) => {
        (state.userData = null),
          (state.token = null),
          (state.isSignedIn = false),
          (state.isRefreshing = false),
          (state.loading = false),
          (state.error = false);
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })

});

export const authReducer = authSlice.reducer;