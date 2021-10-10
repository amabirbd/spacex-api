import { configureStore } from "@reduxjs/toolkit";
import flightSlice from "./flights/flightSlice";

const store = configureStore({
  reducer: {
    flights: flightSlice,
  },
});

export default store;
