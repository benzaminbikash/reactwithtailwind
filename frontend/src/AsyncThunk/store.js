import { configureStore } from "@reduxjs/toolkit";
import UserApi from "./features/UserApi";

export const store = configureStore({
  reducer: {
    USER: UserApi,
  },
});
