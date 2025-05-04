//  Approach 2: Using fetch() (manual HTTP request)
// As documented in Postman\Code\README.md
// Below script code is suggested by Postman
// It is from the code snippets suggestion in:
// Collection: AzureOpenAIAPI
// Folder: ChatCompletion
// Request: POST ChatCompletion

// Edit key & endpoint to use.
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("api-key", "placeholder");

const raw = JSON.stringify({
  "messages": [
    {
      "role": "system",
      "content": "You are a helpful assistant."
    },
    {
      "role": "user",
      "content": "Is web development a useful skill of the future? Answer in one line only."
    }
  ],
  "max_completion_tokens": 1000,
  "model": "modelName"
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://placeholder.cognitiveservices.azure.com/openai/deployments/o3-mini/chat/completions?api-version=2024-12-01-preview", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));