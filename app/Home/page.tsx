'use client'
import * as React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import Sidebar from "../Components/Organisms/SideBar/Sidebar";
import TopContent from "../Components/Molecules/TopContent/TopContent";
import MainContent from "../Components/Organisms/MainContent/MainContent";
import { Box, Grid } from "@mui/material";
import SearchBarContent from "../Components/Molecules/SearchBarContent/SearchBarContent";

export default function Home() {
  const apiKey: string = process.env.NEXT_PUBLIC_API_KEY ?? "";
  const genAI = new GoogleGenerativeAI(apiKey);
  async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-pro"}); 
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
 
    const msg = "Who is the rock?"; 
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = response.text();
    console.log(text);
  }
  
  return (
    <Grid container>
      {/* Sidebar */}
      <Grid item xs={2}>
        <Sidebar />
      </Grid>
      {/* Main Content */}
      <Grid item xs={10}>
        <TopContent />
        <Box display="flex" justifyContent={"center"}>
          <MainContent />
          <SearchBarContent submitChat={run} />
        </Box>
      </Grid>
    </Grid>
  );
}
