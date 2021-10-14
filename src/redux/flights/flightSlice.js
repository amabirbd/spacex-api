import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import moment from "moment";

export const getFlights = createAsyncThunk("flights/fetchFlights", async () => {
  return await fetch("https://api.spacexdata.com/v3/launches").then((res) =>
    res.json()
  );
});

const initialState = {
  status: null,
  flights: [],
  updatedFlights: []
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

    launchedLastWeek: (state, action) => {
      state.updatedFlights = state.flights.filter((val) => {
        let launchTime = moment(val.launch_date_utc);

        if (launchTime.isBetween(moment().subtract(1, "weeks"), undefined)) {
          return val;
        }
        return null;
      });
    },

    launchedLastMonth: (state, action) => {
      state.updatedFlights = state.flights.filter((val) => {
        let launchTime = moment(val.launch_date_utc);

        if (launchTime.isBetween(moment().subtract(1, "month"), undefined)) {
          return val;
        }
        return null;
      });
    },

    launchedLastYear: (state, action) => {
      state.updatedFlights = state.flights.filter((val) => {
        let launchTime = moment(val.launch_date_utc);

        if (launchTime.isBetween(moment().subtract(1, "years"), undefined)) {
          return val;
        }
        return null;
      });
    },

    launchSuccess: (state, action) => {
      state.updatedFlights = state.flights.filter((val) => {
        if (val.launch_success) {
          return val;
        }
        return null;
      })
    },

    launchFailure: (state, action) => {
      state.updatedFlights = state.flights.filter((val) => {
        if (!val.launch_success) {
          return val;
        }
        return null;
      })
    },


    isUpcoming: (state, action) => {
      // const value = action.payload;
      state.updatedFlights = state.flights.filter((val) => {
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
      state.updatedFlights = action.payload;

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
  launchSuccess,
  launchFailure,
  launchedLastWeek,
  launchedLastMonth,
  launchedLastYear,
} = flightSlice.actions;
export default flightSlice.reducer;
