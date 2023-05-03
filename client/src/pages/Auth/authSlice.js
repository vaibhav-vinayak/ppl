import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: null,
  data: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
      state.data = null;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    loginFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailed } = authSlice.actions;

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;
