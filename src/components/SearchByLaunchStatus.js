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

function SearchByLaunchDate() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByLaunchStatus(value));
  };

  const handleRadioChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Search by launch date</FormLabel>
        <RadioGroup
          aria-label="launchDate"
          name="launchDate"
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

export default SearchByLaunchDate;
