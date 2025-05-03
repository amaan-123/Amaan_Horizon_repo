// fetch.js

const endpoint = "https://***.cognitiveservices.azure.com";
const deployment = "o3-mini";
const apiVersion = "2024-12-01-preview";
const apiKey = "***";   // <-- not safe for real apps!

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const userPromptEl = document.getElementById("userPrompt");
  const userQueryEl  = document.getElementById("userQuery");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userPrompt = userPromptEl.value.trim();
    if (!userPrompt) return;

    // Show what the user asked
    userQueryEl.innerText = userPrompt;

    // Build the fetch call
    const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;
    const headers = {
      "Content-Type": "application/json",
      "api-key": apiKey
    };
    const body = JSON.stringify({
      model: deployment,
      max_completion_tokens: 1000,
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user",   content: userPrompt + " Answer in one line only." }
      ]
    });

    try {
      const resp = await fetch(url, {
        method:  "POST",
        headers,
        body
      });
      if (!resp.ok) throw new Error(`API error ${resp.status}`);
      const data = await resp.json();
      const answer = data.choices?.[0]?.message?.content || "(no response)";
      console.log(answer);

      const modelNameEl = document.getElementById("modelName");
      modelNameEl.innerText = `Model Used: ${data.model}`;
      // You can display it somewhere, e.g.:
      const modelOutputEl = document.getElementById("modelOutput");
      modelOutputEl.innerText = answer;

    } catch (err) {
      console.error("Error calling Azure OpenAI:", err);
    }
  });
});
