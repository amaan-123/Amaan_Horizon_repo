# Using Azure OpenAI API

Comparing **two different ways to call Azure OpenAI's API**:

---

## ✅ Approach 1: **Using the official `openai` NPM package**

(Postman\Code\script.js: sourced from Azure website deployment model page)

```js
import { AzureOpenAI } from "openai";
...
const client = new AzureOpenAI(options);
await client.chat.completions.create({...});
```

## 🆚 Approach 2: **Using `fetch()` (manual HTTP request)**

(Postman\Code\temp.js: sourced via Postman's suggested code)

```js
fetch("https://.../chat/completions?api-version=...", requestOptions)
  .then(...);
```

---

## 🔍 Key Differences

| Feature / Aspect               | `openai` SDK (Approach 1)                            | `fetch()` (Postman Approach 2)                                       |
| ------------------------------ | ---------------------------------------------------- | -------------------------------------------------------------------- |
| ✅ **Ease of use**              | Simple, less boilerplate                             | Verbose; you manually build headers, URL, and JSON body              |
| ✅ **Built-in features**        | Auto handles parsing, retries, validation, and types | You must do all error checking, retries, and parsing yourself        |
| ✅ **Maintainability**          | Easier to read, debug, and extend                    | More prone to bugs or missing pieces (e.g., headers, URL formatting) |
| ✅ **Type safety (in TS)**      | SDK has typed definitions                            | No types unless you add them yourself                                |
| 🛠️ **Fine-grained control**   | Less exposed (you use SDK abstraction)               | Total control over raw HTTP call                                     |
| 🌍 **Environment flexibility** | Best in Node.js environments                         | Works in both Node.js *and* browsers (if CORS is allowed)            |
| 📦 **Dependencies**            | Requires `openai` NPM package                        | Native JS (no external libs needed)                                  |

---

### 🔎 Which is better and why?

#### ✅ **Recommended: Use the SDK (Approach 1)** if

* You're building **Node.js apps** (backend, CLI tools, server-side logic).
* You want **cleaner code, error handling, and official support**.
* You're still learning — it reduces complexity and focuses on logic.

#### ✅ **Use `fetch()` (Approach 2)** if

* You're writing **frontend code in a browser** (like in React/Vue apps).
* You want **zero dependencies** or don’t want to install a package.
* You're debugging or exploring via Postman or quick demos.

---

### 💡 Conclusion

For your **current C#/.NET/JavaScript full-stack learning path**, and especially for **Node.js apps**, using the **`openai` SDK** is the better and more professional approach. Use `fetch()` mainly for front-end or when you need low-level control (e.g., custom HTTP clients).

---

## Understanding script.js (Approach 1)

Let's walk through the working Azure OpenAI script step by step — **line by line, in easy terms**, especially focusing on the parts highlighted: `import`, `export`, `options`, `new AzureOpenAI()`, and `chat.completions.create()`.

## Using Azure OpenAI Services for chat completions

---

### 🔹1. `import { AzureOpenAI } from "openai";`

* **What's happening:**  
  You're telling JavaScript to use the `AzureOpenAI` class from the `"openai"` library you installed using `npm install openai`.
  
* **Why:**  
  This class is your **entry point** to connect and talk to Azure's OpenAI API.

---

### 🔹2. Constants for configuration

```js
const endpoint = "placeholder.cognitiveservices.azure.com/";
const modelName = "o3-mini";
const deployment = "o3-mini";
```

* **`endpoint`:**  
  This is your Azure OpenAI **resource URL** (from your Azure portal). It tells the code **where** to send requests.

* **`modelName` and `deployment`:**  
  These tell Azure which AI model to use (like GPT-4 or GPT-3.5), and the exact **deployment name** you've configured on Azure.

---

### 🔹3. `export async function main() { ... }`

* **`export` keyword:**  
  Makes this `main()` function available for import in other files (you’re writing a module). Even if you're not using it elsewhere now, it’s a **good habit**.

* **`async function`:**  
  Because talking to an API involves **waiting** for a response (i.e., it's asynchronous), this function is marked `async` so we can use `await` inside it.

---

### 🔹4. `const apiKey`, `apiVersion`, and `options`

```js
const apiKey = "placeholder";
const apiVersion = "2024-12-01-preview";
const options = { endpoint, apiKey, deployment, apiVersion }
```

* **`apiKey`:**  
  A secret key that proves you're allowed to access the Azure OpenAI API.

* **`apiVersion`:**  
  Azure requires specifying which **version of the API** you're using. Different versions may support different models and features.

* **`options` object:**  
  You're bundling all the necessary config info (like a form) to **pass into the AzureOpenAI class** in the next step.

---

### 🔹5. `const client = new AzureOpenAI(options);`

* **What's happening:**  
  This line **creates a connection object** to Azure OpenAI.

* **`new AzureOpenAI(...)`:**  
  You're telling JavaScript:  
  > "Hey, use these settings to create a working OpenAI client I can talk to."

* **Now you can send prompts and receive answers using this `client`.**

---

### 🔹6. Send a message to the model

```js
const response = await client.chat.completions.create({
  messages: [
    { role:"system", content: "You are a helpful assistant." },
    { role:"user", content: "I am going to Paris, what should I see?" }
  ],
  max_completion_tokens: 100000,
  model: modelName
});
```

* **`client.chat.completions.create()`**:  
  This is the **main function that sends your prompt to Azure's AI model** (like ChatGPT).

* **`messages`:**  
  You're simulating a conversation:
  * `"system"` message sets the model's **personality** or role.
  * `"user"` message is your **actual question** to the AI.

* **`max_completion_tokens`:**  
  This sets the **maximum length of the response**. (Though the correct parameter is `max_tokens`, not `max_completion_tokens`. You may want to fix that.)

* **`model`:**  
  You're telling Azure which model to use (e.g., `"o3-mini"`).

---

### 🔹7. Error checking (optional)

```js
if (response?.error !== undefined && response.status !== "200") {
  throw response.error;
}
```

* **Checks** if there’s an error in the response.
* If so, it throws the error so it can be caught in the `catch` block.

(You could remove this, since you're already handling errors in `catch`.)

---

### 🔹8. Print the model's response

```js
console.log(response.choices[0].message.content);
```

* **`choices[0]`**:  
  Azure sends back an array of choices (like different possible responses). You're picking the first one.

* **`message.content`**:  
  This is the **actual text reply** from the AI.

---

### 🔹9. Error handling

```js
main().catch((err) => {
  console.error("The sample encountered an error:", err);
});
```

* This runs your `main()` function.
* If anything goes wrong (like no internet, wrong key, or API error), it logs the error.

---

### ✅ Summary

| Concept              | Meaning                                                                 |
|----------------------|-------------------------------------------------------------------------|
| `import`             | Brings in AzureOpenAI class from the library                           |
| `export`             | Makes the function usable in other files (optional but good practice)  |
| `options`            | Bundle of settings (endpoint, key, version) used to configure the API  |
| `new AzureOpenAI()`  | Connects to Azure's AI using your options                               |
| `chat.completions.create()` | Sends your messages to the AI and gets a response                 |

---
