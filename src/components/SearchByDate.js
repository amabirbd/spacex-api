import {
  Button,

} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { launchedLastWeek, launchedLastMonth, launchedLastYear } from "../redux/flights/flightSlice";

function SearchByDate() {
  const dispatch = useDispatch();



  return (
    <div>
      <Button type="submit" value="lastWeek" variant="outlined" onClick={e => dispatch(launchedLastWeek(e.target.value))}>Last Week</Button>
      <Button type="submit" value="lastMonth" variant="outlined" onClick={e => dispatch(launchedLastMonth(e.target.value))}>Last Month</Button>
      <Button type="submit" value="lastYear" variant="outlined" onClick={e => dispatch(launchedLastYear(e.target.value))}>Last Year</Button>

    </div>
  );
}

export default SearchByDate;
