import {
  Button

} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { isUpcoming } from "../redux/flights/flightSlice";

function Upcoming() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue(e.target.value);
    dispatch(isUpcoming(value));
  };


  return (
    <Button type="submit" value="upcoming" variant="outlined" onClick={handleSubmit}>Upcoming</Button>

  );
}

export default Upcoming;
