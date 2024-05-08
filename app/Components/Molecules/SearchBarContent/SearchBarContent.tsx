"use client";
import React from "react";
import { Box, IconButton } from "@mui/material";
import SearchBar from "../../Atoms/SearchBar/SearchBar";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import KeyboardVoiceOutlinedIcon from "@mui/icons-material/KeyboardVoiceOutlined";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import { SearchBarContentProps } from "../SearchBarContent/SearchBarContent.types";

const SearchBarContent: React.FC<SearchBarContentProps> = ({
  submitChat,
}) => {
  const [value, setValue] = React.useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 20,
        minWidth: "50%",
        zIndex: 1000,
        paddingTop: "0.9rem",
        paddingBottom: "0.9rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        backgroundColor: "#f0f4f9",
        borderRadius: "2rem",
        display: "flex",
        gap: "0.6rem",
      }}
    >
      <SearchBar value={value} onChange={handleSearch} />
      <IconButton>
        <LightbulbOutlinedIcon sx={{ color: "black" }} />
      </IconButton>
      <IconButton>
        <KeyboardVoiceOutlinedIcon sx={{ color: "black" }} />
      </IconButton>
      <Box sx={{ transform: "rotate(90deg)" }}>
        {value.length > 0 && (
          <IconButton onClick={submitChat}>
            <NavigationOutlinedIcon sx={{ color: "black" }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default SearchBarContent;
