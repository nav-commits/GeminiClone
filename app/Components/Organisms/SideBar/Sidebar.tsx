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

const Sidebar = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "#f0f4f9",
          width: "17rem",
          p: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box>
            <IconButton>
              <MenuIcon />
            </IconButton>
          </Box>
          <MenuList sx={{ mt: 7 }}>
            <MenuItem>
              <Typography variant="body2">Recent</Typography>
            </MenuItem>
            <Tooltip title="Link 1" placement="right-start">
              <MenuItem>
                <ListItemIcon>
                  <ChatBubbleOutlineIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2">Some Content showed up</Typography>
              </MenuItem>
            </Tooltip>
            <Tooltip title="Link 2" placement="right-start">
              <MenuItem>
                <ListItemIcon>
                  <ChatBubbleOutlineIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2">Link 2</Typography>
              </MenuItem>
            </Tooltip>
            <Tooltip title="Link 3" placement="right-start">
              <MenuItem>
                <ListItemIcon>
                  <ChatBubbleOutlineIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2">Link 3</Typography>
              </MenuItem>
            </Tooltip>
            <Tooltip title="Link 4" placement="right-start">
              <MenuItem>
                <ListItemIcon>
                  <ChatBubbleOutlineIcon fontSize="small" />
                </ListItemIcon>
                <Typography variant="body2">Link 4</Typography>
              </MenuItem>
            </Tooltip>
          </MenuList>
        </Box>
        <Box sx={{ flexGrow: 1, color: "#0b57d0" }} />{" "}
        <MenuList>
          <Tooltip title="Help" placement="right-start">
            <MenuItem>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <HelpOutlineIcon sx={{ fontSize: "1.2rem" }} />
                <Typography variant="body2">Help</Typography>
              </Box>
            </MenuItem>
          </Tooltip>
          <Tooltip title="Activity" placement="right-start">
            <MenuItem>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <UpdateIcon sx={{ fontSize: "1.2rem" }} />
                <Typography variant="body2">Activity</Typography>
              </Box>
            </MenuItem>
          </Tooltip>
          <Tooltip title="Settings" placement="right-start">
            <MenuItem>
              <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                <BrightnessHighOutlinedIcon sx={{ fontSize: "1.2rem" }} />
                <Typography variant="body2">Settings</Typography>
              </Box>
            </MenuItem>
          </Tooltip>
        </MenuList>
        <Box sx={{ display: "flex", mt: 2, flexDirection: "column", ml: 2 }}>
          <Box>
            <FiberManualRecordIcon
              fontSize="small"
              sx={{ fontSize: "0.7rem", color:'grey' }}
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
            <FiberManualRecordIcon sx={{ fontSize: "0.4rem", color:'grey' }} /> Update
            location
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
