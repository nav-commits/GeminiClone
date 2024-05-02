import React from 'react';
import { Box, Typography } from '@mui/material';
import { GoogleGenerativeAI } from '@google/generative-ai';
interface MainContentProps {
}
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
              sx={{ color: "linear-gradient(to right, #FFC371, #FF5F6D)" }}
              variant="h2"
            >
              Hello, Navdeep
            </Typography>
            <Typography variant="h3">How can I help you today?</Typography>
          </Box>
    );
};

export default MainContent;