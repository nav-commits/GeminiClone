"use client";
import React from "react";
import { Box } from "@mui/material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Chip from "@mui/material/Chip";
import Image from "next/image";

const TopContent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [advanced, setAdvanced] = useState(false);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", mt: "0.9rem" }}
    >
      <Button
        onClick={handleClick}
        sx={{
          color: "grey",
          fontSize: "1.3rem",

          textTransform: "none",
        }}
        endIcon={<ArrowDropDownIcon />}
      >
        Gemini
      </Button>

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
          <Box sx={{ display: "flex", gap: 1 }}>
            <Image src="gemini.svg" alt="face" width={15} height={15} />
            Gemini
          </Box>
          <IconButton style={{ marginLeft: "auto" }}>
            <ArrowRightIcon />
          </IconButton>
        </MenuItem>
        <MenuItem onClick={handleClose} disabled={!advanced}>
          <Box sx={{ display: "flex", gap: 1, opacity: advanced ? 1 : 0.5 }}>
            <Image src="gemini.svg" alt="face" width={15} height={15} />
            Gemini Advanced
          </Box>
          <IconButton style={{ marginLeft: "auto" }}>
            <ArrowRightIcon />
          </IconButton>
        </MenuItem>
      </Menu>
      <Chip
        sx={{
          backgroundColor: "#dde3ea",
          border: "none",
          borderRadius: "0.45rem",
          color: "black",
          mt: "0.8rem",
          pl: "0.5rem",
        }}
        icon={<Image src="gemini.svg" alt="face" width={15} height={15} />}
        label=" Try Gemini Advanced"
        component="a"
        href="https://one.google.com/explore-plan/gemini-advanced?utm_source=gemini&utm_medium=web&utm_campaign=sidenav_evo&g1_landing_page=65"
        clickable
      />
    </Box>
  );
};

export default TopContent;
