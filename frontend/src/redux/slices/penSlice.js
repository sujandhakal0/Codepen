import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  html: "",
  css: "",
  js: "",
  output: "",
};

const penSlice = createSlice({
  name: "penSlice",
  initialState,
  reducers: {
    updateFullCode(state, action) {
      state.fullCode = action.payload;
    },
  },
});

export default penSlice.reducer;
export const { updateFullCode } = penSlice.actions;
