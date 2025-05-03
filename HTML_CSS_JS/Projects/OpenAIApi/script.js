// Approach 1: Using the official openai NPM package
// Initial test in node.js worked correctly.
// TO-DO: Use in browser environment via suggested method

import { AzureOpenAI } from "openai";

const endpoint = "https://pl.cognitiveservices.azure.com";
const modelName = "o3-mini";
const deployment = "o3-mini";

export async function main() {

  const apiKey = "pl";
  const apiVersion = "2024-12-01-preview";
  const options = { endpoint, apiKey, deployment, apiVersion }

  const client = new AzureOpenAI(options);

  document.getElementById("ask").addEventListener("click", answer());

  async function answer() {
  const userPrompt = document.getElementById("userPrompt").innerText; // string
  document.getElementById("userQuery").innerText = userPrompt;
  const rawBody = {
    messages: [
      { role:"system", content: "You are a helpful assistant." },
      { role:"user", content: `${userPrompt} Answer in one line only.`}
    ],
    max_completion_tokens: 1000,
    model: modelName
  };
  const response = await client.chat.completions.create(rawBody);
  if (response?.error !== undefined && response.status !== "200") {
    throw response.error;
  }
  console.log(response.choices[0].message.content);
  main().catch((err) => {
    console.error("The sample encountered an error:", err);
  });
  }
}

