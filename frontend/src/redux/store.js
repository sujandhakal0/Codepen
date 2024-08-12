import { configureStore } from "@reduxjs/toolkit";
import penSlice from "./slices/penSlice";

export const store = configureStore({
  reducer: {
    penSlice,
  },
});

export const getRootState = () => store.getState();
