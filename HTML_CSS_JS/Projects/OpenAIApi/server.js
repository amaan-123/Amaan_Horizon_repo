import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
// This is the correct way to load environment variables when using ES modules (`import` syntax like above: import dotenv from "dotenv";).  
// The `require("dotenv").config();` form is only needed if you use CommonJS (`require` syntax).

const app = express();
const port = process.env.PORT;

// __dirname workaround for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1) Serve static assets from the `/public` folder
app.use(express.static(path.join(__dirname, "public")));

// 2) Parse JSON bodies for POST /api/chat
app.use(express.json());

// Your chat endpoint
app.post("/api/chat", async (req, res) => {
  const { prompt } = req.body;

  // … call Azure OpenAI with your key and return the JSON …
  const response = await fetch(`${process.env.AZURE_OPENAI_ENDPOINT}/openai/deployments/o3-mini/chat/completions?api-version=2024-12-01-preview`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.AZURE_OPENAI_KEY
    },
    body: JSON.stringify({
      model: "o3-mini",
      max_completion_tokens: 1000,
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt + " Answer in one line only." }
      ]
    })
  });

  const data = await response.json();
  res.json(data);
});

// 3) Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
