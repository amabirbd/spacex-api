import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function SearchByDate() {
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
        <Button type="submit">search</Button>
      </FormControl>
    </div>
  );
}

export default SearchByDate;
