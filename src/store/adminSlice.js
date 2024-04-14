import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const adminSlice = createSlice({
  name: "isAdmin",
  initialState,
  reducers: {
    makeAdmin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { makeAdmin } = adminSlice.actions;

export default adminSlice.reducer;
