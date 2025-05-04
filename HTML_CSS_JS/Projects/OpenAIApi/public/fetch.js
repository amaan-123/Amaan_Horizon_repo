// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
  // Get references to form and relevant DOM elements
  const form        = document.querySelector("form");
  const promptInput = document.getElementById("userPrompt");
  const userQueryEl = document.getElementById("userQuery");
  const modelNameEl = document.getElementById("modelName");
  const modelOutput = document.getElementById("modelOutput");

  // Listen for form submission
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    const prompt = promptInput.value.trim(); // Get user input and trim whitespace
    if (!prompt) return; // Do nothing if input is empty

    // Display the user's query and reset output fields
    userQueryEl.innerText = prompt;
    modelNameEl.innerText = "Model used:";    // reset model name
    modelOutput.innerText = "Thinking…";      // show loading message

    try {
      // Send POST request to backend API with user's prompt
      const resp = await fetch("/api/chat", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({ prompt })
      });
      if (!resp.ok) throw new Error(`Server error: ${resp.status}`);
      const data = await resp.json();

      // Display the model name and the response from the API
      modelNameEl.innerText = `Model used: ${data.model}`;
      modelOutput.innerText = data.choices?.[0]?.message?.content || "(no response)";
    } catch (err) {
      // Handle errors (network/server issues)
      console.error("Fetch error:", err);
      modelOutput.innerText = "Sorry, something went wrong.";
    }
  });
});

