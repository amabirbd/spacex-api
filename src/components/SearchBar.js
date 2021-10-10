import { Button, TextField } from "@mui/material";
import React from "react";

function SearchBar() {
  return (
    <div>
      <TextField
        id="search_text"
        label="search"
        placeholder="search by rocket name"
        variant="outlined"
      />
    </div>
  );
}

export default SearchBar;
