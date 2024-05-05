import React from "react";
import TextField from "@mui/material/TextField";

const SearchBar = () => {
//   const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     onSearch(value);
//   };

  return (
    <>
      <TextField
        placeholder="Enter a prompt here"
        variant="standard"  
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
