import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Typography } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { MenuList, MenuItem, ListItemIcon } from "@mui/material";
import Box from "@mui/material/Box";

interface SidebarProps {
  // Define your props here
}
const Sidebar: React.FC<SidebarProps> = ({}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f0f4f9",
        width: "17rem",
        p: "1rem",
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
          <MenuItem>
            <ListItemIcon>
              <ChatBubbleOutlineIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2">Link 1</Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <ChatBubbleOutlineIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="body2">Link 2</Typography>
          </MenuItem>
        </MenuList>
      </Box>
    </Box>
  );
};

export default Sidebar;
