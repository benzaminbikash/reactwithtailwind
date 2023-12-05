import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./tokenslice";

export const store = configureStore({
  reducer: {
    token: tokenSlice,
  },
});
