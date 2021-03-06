import { TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { searchByRocketName } from "../redux/flights/flightSlice";

function SearchBar() {
  const dispatch = useDispatch();

  return (
    <div>
      <TextField
        id="search_text"
        label="search"
        placeholder="search by rocket name"
        variant="outlined"
        onChange={(e) => {
          dispatch(searchByRocketName(e.target.value));
        }}
      />
    </div>
  );
}

export default SearchBar;
