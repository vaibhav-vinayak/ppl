import { configureStore } from "@reduxjs/toolkit";
import auth from "pages/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth,
  },
});
