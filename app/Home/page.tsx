import * as React from "react";
import Sidebar from "../Components/Organisms/SideBar/Sidebar";
import TopContent from "../Components/Molecules/TopContent/TopContent";
import MainContent from "../Components/Organisms/MainContent/MainContent";
import { Box, Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={1.5}>
        <Sidebar />
      </Grid>
      {/* Main Content */}
      <Grid item xs={10}>
        <TopContent />
        <Box display="flex" justifyContent={"center"}>
          <MainContent />
        </Box>
      </Grid>
    </Grid>
  );
}
