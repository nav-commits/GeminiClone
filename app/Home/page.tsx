"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Typography } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

export default function Home() {
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
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
      >
        <MenuIcon />
      </IconButton>
      <Button onClick={() => run()} variant="contained">
        Hello world
      </Button>
      <Box>
        <Typography sx={{color: '#5f6368'}} variant="h5">Gemini</Typography>

        <Drawer
          variant="temporary"
          open={open}
          onClose={handleDrawerClose}
          anchor="left"
          BackdropProps={{ invisible: true }}
        >
          <Box>
            <IconButton
              onClick={handleDrawerClose}
              sx={{ marginTop: 2, marginLeft: "auto" }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box sx={{ minWidth: 240, flexShrink: 0, p: 5 }}>
            <List>
              {["Item 1", "Item 2", "Item 3", "Item 4"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </main>
  );
}
