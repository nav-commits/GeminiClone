import React from "react";
import TextField from "@mui/material/TextField";
import { SearchBarProps } from "../SearchBar/SearchBar.types";

const SearchBar: React.FC<SearchBarProps> = ({value, onChange}) => {
  return (
    <>
      <TextField
        placeholder="Enter a prompt here"
        variant="standard"  
        value={value}
        onChange={onChange}
        fullWidth
        sx={{
          backgroundColor: "#f0f4f9",
          borderRadius: "4px",
          "& .MuiInputBase-root": {
            color: "black",
            padding: "15px 8px,0px 15px"
          },
          "& .MuiInputBase-input::placeholder": {
            color: "black",
          
          },
        }}
        InputProps={{
          disableUnderline: true,
        }}
      />
    </>
  );
};

export default SearchBar;
