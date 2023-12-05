import { createSlice } from "@reduxjs/toolkit";

const initalState = {
  token: "",
};

const tokenSlice = createSlice({
  name: "TOKEN",
  initialState: initalState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    clearToken: (state) => {
      state.token = "";
    },
  },
});

export const { setToken, clearToken } = tokenSlice.actions;

export default tokenSlice.reducer;
