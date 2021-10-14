import {
  Button,

} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { launchSuccess, launchFailure } from "../redux/flights/flightSlice";

function SearchByLaunchDate() {
  const dispatch = useDispatch();

  const handleSuccess = (e) => {
    e.preventDefault();
    dispatch(launchSuccess(e.target.value));
    console.log(e.target.value);
  };

  const handleFailure = (e) => {
    e.preventDefault();
    dispatch(launchFailure(e.target.value));
    console.log(e.target.value);
  };


  return (
    <div>
      <Button type="submit" value="success" variant="outlined" onClick={handleSuccess}>Success</Button>
      <Button type="submit" value="failure" variant="outlined" onClick={handleFailure}>Failure</Button>
    </div>

  );
}

export default SearchByLaunchDate;
