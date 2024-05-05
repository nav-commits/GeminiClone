import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { CustomPaperProps } from "./PromptContent.types";
import Box from "@mui/material/Box";

const CustomPaper: React.FC<CustomPaperProps> = ({ text, icon }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        mt: 5,
        p: 2.5,
        backgroundColor: "#f0f4f9",
        borderRadius: "0.5rem",
        width: "12.5rem",
        height: "12rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#cfd8dc",
        },
      }}
    >
      <Typography variant="body1">{text}</Typography>
      {icon && (
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "1.2rem",
              p: 1,
            }}
          >
            {icon}
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default CustomPaper;
