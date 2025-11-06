# Flowchart for simple prompt/answer tabular output visualiser showing token usage & model also: using Azure OpenAI API (Postman)

```flowchart TD
    A[User clicks “Send” in Postman] --> B[Postman sends HTTP request]
    B --> C[Response arrives: pm.response.json()]
    B --> D[pm.request.body.raw]
    subgraph Payload Builder
      C --> E[Parse response JSON]
      D --> F[Parse request JSON]
      F --> G[Extract userMessage]
      E --> H[Extract response.choices + usage]
    end
    subgraph Template Renderer
      G --> I[Handlebars template <style> + <table>]
      H --> I
      I --> J[pm.visualizer.set(template, {userMessage, response})]
    end
    J --> K[Visualizer Tab: Rendered HTML tables]
```

# Doubts

## Question 1

For the postman response script for visualiser Azure Open AI API project, why have we not used await if we have used async for the response? we have used try catch for userMessage but not for model response. Is this wrong?

## Answer 1

## 🧩 1️⃣ Why no `await` — even though the function *feels* asynchronous?

### 💡 Key idea

**Postman Visualizer scripts are not like normal async JavaScript running in Node or browsers.**

In Postman’s sandbox:

* The script runs **after** the response has already arrived.
* `pm.response.json()` is a **synchronous function** that returns the already-parsed JSON object from the response body.
* There’s nothing to “await,” because the response data is available immediately — Postman has finished the network call before your test/visualizer script starts running.

So even though you might think in terms of:

```js
async function getData() {
  const response = await fetch(...);
}
```

That’s not what’s happening here. Postman has *already done* the fetch; your script only gets to process the result.

✅ **Summary:**

> No `await` is needed because the response is already fully available; `pm.response.json()` is synchronous inside Postman’s execution environment.

---

## 🧩 2️⃣ Why try/catch for `userMessage` but not for `response`

You have:

```js
const response = pm.response.json(); // No try/catch
```

and

```js
try {
   const requestBody = JSON.parse(rawBody);
   ...
} catch(e) { ... }
```

### ⚙️ Reason

`pm.response.json()` is **safe and guaranteed** to return a parsed object if the response’s `Content-Type` is JSON.
Postman internally validates and parses it for you.

But `pm.request.body.raw` is **literally the raw text string** you sent — it’s not automatically parsed. If it has a syntax error, missing braces, or isn’t JSON, your script would crash unless you wrap it in `try/catch`.

✅ **Summary:**

> * `pm.response.json()` → already valid JSON (safe, no try/catch needed).
> * `JSON.parse(rawBody)` → may fail (needs try/catch).

---

## 🧠 3️⃣ Could we *optionally* add try/catch for `response`?

Yes, you could defensively do:

```js
let response = {};
try {
  response = pm.response.json();
} catch (e) {
  console.error("Response was not valid JSON:", e);
}
```

But in most of your Azure OpenAI Postman calls:

* You’re guaranteed to receive `Content-Type: application/json`
* Errors still produce JSON with `error.message` fields

So practically, `pm.response.json()` almost never fails, unless you’re testing endpoints that sometimes return non-JSON (like a file or 500-error HTML page).

---

## 🧭 4️⃣ Putting it all together (execution flow recap)

Here’s what actually happens when you hit “Send” in Postman:

| Step | Who runs it                                      | Async? | What happens                                |
| ---- | ------------------------------------------------ | ------ | ------------------------------------------- |
| 1️⃣  | Postman                                          | ✅ Yes  | Sends your HTTP request (with prompt JSON). |
| 2️⃣  | Server (Azure OpenAI)                            | ✅ Yes  | Processes it and returns JSON response.     |
| 3️⃣  | Postman receives response                        | —      | Response is now fully ready.                |
| 4️⃣  | Postman test/visualizer scripts                  | ❌ Sync | Run **after** the response is received.     |
| 5️⃣  | `pm.response.json()`                             | ❌ Sync | Returns parsed JSON instantly.              |
| 6️⃣  | Your visualizer renders tables using Handlebars. |        |                                             |

So your code only handles **data transformation & display**, not network waiting.

---

## ✅ 5️⃣ Optional improvement (if you want best practices)

You could wrap both parsing sections for consistency:

```js
function constructVisualizerPayload() {
  let response = {};
  let userMessage = "";

  try {
    response = pm.response.json();
  } catch (e) {
    console.error("Response not JSON:", e);
  }

  try {
    const requestBody = JSON.parse(pm.request.body.raw);
    for (const msg of requestBody.messages || []) {
      if (msg.role === "user") {
        userMessage = msg.content;
        break;
      }
    }
  } catch (e) {
    console.error("Failed to parse request body:", e);
  }

  return { response, userMessage };
}
```

Not required, but a little safer and symmetrical.

---

### ✅ TL;DR Summary

| Concept                     | Why it is so                                                   |
| --------------------------- | -------------------------------------------------------------- |
| No `await`                  | Postman already got the response; no async fetch is happening. |
| `try/catch` for userMessage | You manually parse raw JSON, which can fail.                   |
| No `try/catch` for response | Postman’s `pm.response.json()` safely parses it internally.    |
| Safe improvement            | Wrap both in try/catch if you want extra safety or uniformity. |

---
