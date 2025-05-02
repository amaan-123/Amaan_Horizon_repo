import { AzureOpenAI } from "openai";

const endpoint = "placeholder.cognitiveservices.azure.com/";
const modelName = "o3-mini";
const deployment = "o3-mini";

export async function main() {

  const apiKey = "placeholder";
  const apiVersion = "2024-12-01-preview";
  const options = { endpoint, apiKey, deployment, apiVersion }

  const client = new AzureOpenAI(options);

  const response = await client.chat.completions.create({
    messages: [
      { role:"system", content: "You are a helpful assistant." },
      { role:"user", content: "I am going to Paris, what should I see?" }
    ],
    max_completion_tokens: 100000,
      model: modelName
  });

  if (response?.error !== undefined && response.status !== "200") {
    throw response.error;
  }
  console.log(response.choices[0].message.content);
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});