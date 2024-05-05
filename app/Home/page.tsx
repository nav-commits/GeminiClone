import * as React from "react";
import Sidebar from "../Components/Organisms/SideBar/Sidebar";
import TopContent from "../Components/Molecules/TopContent/TopContent";
import MainContent from "../Components/Organisms/MainContent/MainContent";
import { Box, Grid } from "@mui/material";
import SearchBar from "../Components/Atoms/SearchBar";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';

export default function Home() {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={1.3}>
        <Sidebar />
      </Grid>
      {/* Main Content */}
      <Grid item xs={10}>
        <TopContent />
        <Box display="flex" justifyContent={"center"}>
          <MainContent />
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
              gap: "1rem",
            }}
          >
            <SearchBar />
            <AddPhotoAlternateOutlinedIcon  />
            <KeyboardVoiceOutlinedIcon />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
