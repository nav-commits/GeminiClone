
import React from "react";
import { Box, Typography } from "@mui/material";
import PromptContent from "../../Molecules/PromptContent/PromptContent";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import Image from "next/image";
import DriveFileRenameOutlineOutlinedIcon from "@mui/icons-material/DriveFileRenameOutlineOutlined";
interface MainContentProps {}
const MainContent: React.FC<MainContentProps> = (props) => {

  const paperData = [
    { text: "Road trip drive time and kid entertainment ideas" },
    {
      text: "Create an image of an intergalactic event",
      icon: <DriveFileRenameOutlineOutlinedIcon />,
    },
    {
      text: "Give me ways to add certain foods to my diet",
      icon: <LightbulbOutlinedIcon />,
    },
    {
      text: "Help me draft a response to a friend",
      icon: <DriveFileRenameOutlineOutlinedIcon />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            backgroundImage: `linear-gradient(16deg, 
              #4285f4 0, 
              #4285f4 25%, 
              #4285f4 10%, 
              #FF7EB3 24%, 
              #d96570 15%, 
              #9b72cb 20%, 
              #FF5F6D 50%, 
              #FF7EB3 56%, 
              #FFF 75%, 
              #FFF 60%)`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
          variant="h2"
        >
          Hello, Navdeep
        </Typography>
        <Typography sx={{ color: "#c4c7c5" }} variant="h3">
          How can I help you today?
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {paperData.map((data, index) => (
            <PromptContent
              key={index}
              text={data.text}
              icon={
                data.icon ? (
                  data.icon
                ) : (
                  <Image
                    src={"google.svg"}
                    height={20}
                    alt="googleImage"
                    width={20}
                  />
                )
              }
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MainContent;
