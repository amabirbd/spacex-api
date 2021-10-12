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
import { searchByDate } from "../redux/flights/flightSlice";

function SearchByDate() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleRadioChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByDate(value));
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Search by date</FormLabel>
        <RadioGroup
          aria-label=""
          name="radio-buttons-group"
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="prev_week"
            control={<Radio />}
            label="Previous week"
          />
          <FormControlLabel
            value="prev_month"
            control={<Radio />}
            label="Previous month"
          />
          <FormControlLabel
            value="prev_year"
            control={<Radio />}
            label="Previous year"
          />
        </RadioGroup>
        <Button type="submit">Filter</Button>
      </FormControl>
    </form>
  );
}

export default SearchByDate;
