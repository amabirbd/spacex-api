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

  reducers: {
    searchByRocketName: (state, action) => {
      const value = action.payload;
      state.flights = state.flights.filter((val) =>
        val.rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
      );
    },
    searchByLastWeek: (state, action) => {
      const value = action.payload;
      state.flights = state.flights.filter((val) =>
        val.rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
      );
    },
    searchByLastMonth: (state, action) => {
      const value = action.payload;
      state.flights = state.flights.filter((val) =>
        val.rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
      );
    },
    searchByLastYear: (state, action) => {
      const value = action.payload;
      state.flights = state.flights.filter((val) =>
        val.rocket.rocket_name.toLowerCase().includes(value.toLowerCase())
      );
    },
  },

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

export const { searchByRocketName } = flightSlice.actions;
export default flightSlice.reducer;
