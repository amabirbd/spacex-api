import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchByLaunchStatus } from "../redux/flights/flightSlice";

function SearchByLaunchStatus() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleRadioChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    dispatch(searchByLaunchStatus(e.target.value));
    console.log("target value -");
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Launch status</FormLabel>
        <RadioGroup
          aria-label="isUpcoming"
          name="isUpcoming"
          vlaue={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="success"
            control={<Radio />}
            label="Success"
          />
          <FormControlLabel
            value="failure"
            control={<Radio />}
            label="Failure"
          />
        </RadioGroup>
        <Button type="submit">Filter</Button>
      </FormControl>
    </form>
  );
}

export default SearchByLaunchStatus;
