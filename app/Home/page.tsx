import * as React from "react";
import Sidebar from "../Components/SideBar/Sidebar";
import TopContent from "../Components/TopContent/TopContent";
import MainContent from "../Components/MainContent/MainContent";
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      {/* Main Content */}
      <Grid item xs={10}>
        <Box display="flex" flexDirection="column" height="100%">
          {/* Top Content */}
          <TopContent />
          {/* Main Content */}
          <MainContent />
        </Box>
      </Grid>
    </Grid>
  );
}
