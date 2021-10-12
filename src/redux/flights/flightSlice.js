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

    searchByDate: (state, action) => {
      const value = action.payload;
      switch (value) {
        case "lastWeek":
          state.flights = state.flights.filter((val) => {
            return val;
          });
          break;
        default:
          state.flights = state.flights.filter((val) => {
            return val;
          });
      }
    },

    searchByLaunchStatus: (state, action) => {
      const value = action.payload;
      switch (value) {
        case "success":
          state.flights = state.flights.filter((val) => {
            if (val.launch_success) {
              return val;
            }
            return null;
          });
          break;
        case "failure":
          state.flights = state.flights.filter((val) => {
            if (!val.launch_success) {
              return val;
            }
            return null;
          });
          break;
        default:
          state.flights = state.flights.filter((val) => {
            return val;
          });
      }
    },

    isUpcoming: (state, action) => {
      // const value = action.payload;
      state.flights = state.flights.filter((val) => {
        if (val.upcoming) {
          return val;
        }
        return null;
      });
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

export const {
  searchByRocketName,
  isUpcoming,
  searchByLaunchStatus,
  searchByDate,
} = flightSlice.actions;
export default flightSlice.reducer;
