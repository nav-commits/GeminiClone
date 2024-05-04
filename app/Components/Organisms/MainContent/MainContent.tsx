import React from "react";
import { Box, Typography } from "@mui/material";
import { GoogleGenerativeAI } from "@google/generative-ai";
import PromptContent from "../../Molecules/PromptContent/PromptContent";

interface MainContentProps {}
const MainContent: React.FC<MainContentProps> = (props) => {
  const apiKey: string = process.env.NEXT_PUBLIC_API_KEY ?? "";
  const genAI = new GoogleGenerativeAI(apiKey);

  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: "Hello, I have 2 dogs in my house." }],
        },
        {
          role: "model",
          parts: [{ text: "Great to meet you. What would you like to know?" }],
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    const msg = "Who is tripleh ?";
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    console.log(chat);
  }

  const paperData = [
    { text: "Road trip drive time and kid entertainment ideas" },
    { text: "Create an image of an intergalactic event" },
    { text: "Give me ways to add certain foods to my diet" },
    { text: "Help me draft a response to a friend" },
  ];

  return (
    <Box
      sx={{
        mt: 10,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          backgroundImage: `linear-gradient(16deg, 
            #4285f4 0, 
            #4285f4 9%, 
            #4285f4 20%, 
            #FF7EB3 24%, 
            #d96570 35%, 
            #9b72cb 44%, 
            #FF5F6D 50%, 
            #FF7EB3 56%, 
            #FFF 75%, 
            #FFF 100%)`,
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
          <PromptContent key={index} text={data.text} />
        ))}
      </Box>
    </Box>
  );
};

export default MainContent;
