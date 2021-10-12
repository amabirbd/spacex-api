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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchByDate(value));
  };

  const handleRadioChange = (e) => {
    setValue(e.target.value);
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
            value="lastWeek"
            control={<Radio />}
            label="Previous week"
          />
          <FormControlLabel
            value="lastMonth"
            control={<Radio />}
            label="Previous month"
          />
          <FormControlLabel
            value="lastYear"
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
