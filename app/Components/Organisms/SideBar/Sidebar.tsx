"use client";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { MenuList, MenuItem, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import UpdateIcon from "@mui/icons-material/Update";
import BrightnessHighOutlinedIcon from "@mui/icons-material/BrightnessHighOutlined";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const [hoveredItem, setHoveredItem] = useState<Number>();
  const tooltips = [
    { title: "Link 1", content: "Some Content showed up" },
    { title: "Link 2", content: "Link 2" },
    { title: "Link 3", content: "Link 3" },
    { title: "Link 4", content: "Link 4" },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#f0f4f9",
          width: !open ? "17rem" : "4rem",
          p: "1rem",
          justifyContent: "space-between",
          transition: "width 0.3s ease",
        }}
      >
        <Box>
          <Box>
            <Tooltip
              sx={{ mb: 2 }}
              title={!open ? "Expand menu" : "Collapse menu"}
              placement="bottom"
            >
              <IconButton onClick={handleClick}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </Box>
          {!open ? (
            <Tooltip title="New Chat" placement="bottom">
              <Button
                sx={{
                  backgroundColor: "#dde3ea",
                  mt: 5,
                  pl: 2,
                  pr: 2,
                  color: "grey",
                  borderRadius: "2rem",
                  textTransform: "none",
                }}
                startIcon={<AddIcon />}
              >
                New Chat
              </Button>
            </Tooltip>
          ) : (
            <Tooltip title="New Chat" placement="bottom">
              <IconButton sx={{ backgroundColor: "#dde3ea", mt: 5 }}>
                <AddIcon />
              </IconButton>
            </Tooltip>
          )}

          {!open && (
            <Typography sx={{ mt: 2, ml: 1 }} variant="body2">
              Recent
            </Typography>
          )}

          {!open && (
            <MenuList>
              {tooltips.map((tooltip, index) => (
                <Tooltip
                  key={index}
                  title={tooltip.title}
                  placement="right-start"
                >
                  <MenuItem sx={{ borderRadius: "1.1rem", p: "0.5rem" }}>
                    <ListItemIcon>
                      <ChatBubbleOutlineIcon sx={{ fontSize: "1rem" }} />
                    </ListItemIcon>
                    <Typography variant="body2">{tooltip.content}</Typography>
                    <IconButton
                      onMouseEnter={() => setHoveredItem(index)}
                      onMouseLeave={() => setHoveredItem(index)}
                    >
                      {hoveredItem === index && <MoreVertIcon />}
                    </IconButton>
                  </MenuItem>
                </Tooltip>
              ))}
            </MenuList>
          )}
        </Box>
        <Box sx={{ flexGrow: 1, color: "#0b57d0" }} />{" "}
        <MenuList>
          <Tooltip title="Help" placement="right-start">
            <MenuItem>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <HelpOutlineIcon sx={{ fontSize: "1.2rem" }} />
                {!open && <Typography variant="body2">Help</Typography>}
              </Box>
            </MenuItem>
          </Tooltip>
          <Tooltip title="Activity" placement="right-start">
            <MenuItem>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <UpdateIcon sx={{ fontSize: "1.2rem" }} />
                {!open && <Typography variant="body2">Activity</Typography>}
              </Box>
            </MenuItem>
          </Tooltip>
          <Tooltip title="Settings" placement="right-start">
            <MenuItem>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <BrightnessHighOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                {!open && <Typography variant="body2">Settings</Typography>}
              </Box>
            </MenuItem>
          </Tooltip>
        </MenuList>
        {!open && (
          <Box sx={{ display: "flex", mt: 2, flexDirection: "column", ml: 2 }}>
            <Box>
              <FiberManualRecordIcon
                fontSize="small"
                sx={{ fontSize: "0.7rem", color: "grey" }}
              />
              <Typography sx={{ fontSize: "0.7rem" }} variant="caption">
                {" "}
                Brampton, ON, Canada
              </Typography>
            </Box>
            <Typography
              sx={{ color: "#0b57d0", fontSize: "0.7rem", ml: "0.9rem" }}
              variant="caption"
            >
              Based on your places(Home){" "}
              <FiberManualRecordIcon
                sx={{ fontSize: "0.4rem", color: "grey" }}
              />{" "}
              Update location
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
};

export default Sidebar;
