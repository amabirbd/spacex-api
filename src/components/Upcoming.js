import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";

function Upcoming() {
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
            value="upcoming"
            control={<Radio />}
            label="Upcoming"
          />
        </RadioGroup>
        <Button type="submit">search</Button>
      </FormControl>
    </div>
  );
}

export default Upcoming;
