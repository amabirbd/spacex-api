import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";

function SearchByDate() {
  const dispatch = useDispatch();
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Search by date</FormLabel>
        <RadioGroup
          aria-label=""
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="prev_week"
            control={<Radio />}
            label="previous week"
          />
          <FormControlLabel
            value="prev_month"
            control={<Radio />}
            label="previous month"
          />
          <FormControlLabel
            value="prev_year"
            control={<Radio />}
            label="previous year"
          />
        </RadioGroup>
        <Button type="submit">search</Button>
      </FormControl>
    </div>
  );
}

export default SearchByDate;
