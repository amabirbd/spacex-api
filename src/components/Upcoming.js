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
import { isUpcoming } from "../redux/flights/flightSlice";

function Upcoming() {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(isUpcoming(e.target.value));
  };

  const handleRadioChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Is upcoming?</FormLabel>
        <RadioGroup
          aria-label="isUpcoming"
          name="isUpcoming"
          vlaue={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel
            value="upComing"
            control={<Radio />}
            label="Up coming"
          />
        </RadioGroup>
        <Button type="submit">Filter</Button>
      </FormControl>
    </form>
  );
}

export default Upcoming;
