import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getFlights = createAsyncThunk("flights/fetchFlights", async () => {
  return await fetch("https://api.spacexdata.com/v3/launches").then((res) =>
    res.json()
  );
});

const initialState = {
  status: null,
  flights: [],
};

const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {},

  extraReducers: {
    [getFlights.pending]: (state, action) => {
      state.status = "loading";
    },
    [getFlights.fulfilled]: (state, action) => {
      state.flights = action.payload;
      state.status = "success";
    },
    [getFlights.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
});

// const {} = flightSlice.actions;
export default flightSlice.reducer;
