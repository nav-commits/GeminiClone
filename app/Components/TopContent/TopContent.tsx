"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import LanguageIcon from "@mui/icons-material/Language";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const TopContent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", mr: 2, mt: 2 }}
    >
      <Box sx={{ display: "flex", justifyContent: "flex-start", }}>
        <Button
          onClick={handleClick}
          sx={{ color: "grey", fontSize: "1.3rem", mt: 2,  textTransform: 'none' }}
          endIcon={<ArrowDropDownIcon />}
        >
          Gemini
        </Button>
      </Box>
      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          style: {
            backgroundColor: "#dde3ea",
            width: "17rem",
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <LanguageIcon style={{ marginRight: "8px" }} />
          Gemini
          <IconButton style={{ marginLeft: "auto" }}>
            <ArrowRightIcon />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <LanguageIcon style={{ marginRight: "8px" }} />
          Gemini Advanced
          <IconButton style={{ marginLeft: "auto" }}>
            <ArrowRightIcon />
          </IconButton>
        </MenuItem>
      </Menu>

      <Button
        sx={{ backgroundColor: "#dde3ea", color: "black", textTransform: 'none', width: '12rem'}}
        startIcon={<ArrowForwardIcon />}
      >
        <Link href="/next-page" passHref>
          NextPage
        </Link>
      </Button>
    </Box>
  );
};

export default TopContent;
