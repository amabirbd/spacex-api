import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function SearchByLaunchStatus() {
  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Search by Launch Status</FormLabel>
        <RadioGroup
          aria-label=""
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="prev_week"
            control={<Radio />}
            label="Success"
          />
          <FormControlLabel
            value="prev_month"
            control={<Radio />}
            label="Failure"
          />
        </RadioGroup>
        <Button type="submit">search</Button>
      </FormControl>
    </div>
  );
}

export default SearchByLaunchStatus;
