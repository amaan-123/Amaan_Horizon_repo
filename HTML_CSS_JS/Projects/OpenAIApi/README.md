# Azure OpenAI Web Chat Project

This repository demonstrates a simple web application that lets users enter a prompt and receive a response from the Azure OpenAI API. It uses a secure Node.js/Express backend to hide API keys and a plain HTML/CSS/JavaScript frontend.

---

## 📁 Project Structure

```md
.gitignore          # Repo-wide files/folders to ignore in Git
HTML_CSS_JS/Projects/OpenAIApi
├── .env                # Environment variables (API key, endpoint, port) - ignored
├── package.json        # NPM dependencies and scripts
├── package-lock.json   # Exact dependency tree
├── server.js           # Express server with /api/chat endpoint
└── public/             # Frontend static assets
    ├── index.html      # Main HTML page
    ├── styles.css      # Basic styling
    └── fetch.js        # Frontend JS to call /api/chat
```

---

## 🔧 Setup & Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/yourusername/azure-openai-webchat.git
   cd azure-openai-webchat
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a file** in the project root:

   ```env
   AZURE_OPENAI_KEY=your_api_key_here
   AZURE_OPENAI_ENDPOINT=https://<your-resource>.cognitiveservices.azure.com
   PORT=3000
   ```

4. **Git ignore secrets** by verifying `.gitignore` contains:

   ```gitignore
   node_modules/
   .env
   .vscode/
   ```

5. **Start the server**

   ```bash
   npm start
   ```

6. **Open the app** Navigate to `http://localhost:3000` in your browser.

---

## 🚀 How It Works

### **The flow:  form → fetch.js → server.js → Azure → back to fetch.js**

### 1. Frontend (`public/index.html` + `public/fetch.js`)

* Loads a simple form and two result tables (prompt & response).
* Listens for the form submission, reads the user prompt, and sends a POST to `/api/chat` using `fetch()`.
* The response from the server (JSON with the AI reply) is displayed in the page.

### 2. Backend (`server.js`)

* Uses **Express** to serve all files in `public/` as static assets.
* Parses JSON bodies with `express.json()`.
* Defines **POST \*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\***\`\`:

  1. Reads `{ prompt }` from the request body.
  2. Calls Azure OpenAI chat completions endpoint using `node-fetch` (or global fetch).
  3. Uses `process.env.AZURE_OPENAI_KEY` and `AZURE_OPENAI_ENDPOINT` from `.env`.
  4. Returns the JSON response to the frontend.

---

## 💡 Key Learnings

* **Security best practices**:

  * Never expose API keys in frontend code.
  * Use a `.env` file + `dotenv` to load secrets in Node.js.
  * Add `.env` and `node_modules/` to `.gitignore`.

* **Express fundamentals**:

  * Serving static files via `express.static()`.
  * Handling JSON POST requests.

* **Frontend basics**:

  * Using `fetch()` to call your own backend.
  * Updating the DOM with `querySelector` and event listeners.

* **Troubleshooting**:

  1. **404 when fetching** – Caused by serving frontend from a different origin (VS Code preview); solved by serving static files from Express on the same port.
  2. **Browser import errors** – Removing `import { AzureOpenAI } ...` from frontend and moving that logic to the backend.
  3. **CORS issues** – Avoided entirely by keeping frontend and backend on `localhost:3000`

---

## 🔮 Next Steps

* Add input validation and error messages in the UI.
* Implement rate limiting or caching on the backend.
* Migrate to a serverless function (e.g., Azure Functions) for easier deployment.
* Integrate a bundler (Vite/Rollup) when moving to more complex frontend frameworks.

---

*Enjoy building with Azure OpenAI!*
