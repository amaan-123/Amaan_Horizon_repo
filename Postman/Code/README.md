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

---

## what is difference between Open AI SDK & Azure Open AI SDK on the Model or Deployments + Endpoint page for using a model like o3-mini in Azure AI foundry like I did in my postman user prompt & response(including model response & token usage) visualiser project?

### Short answer

* **OpenAI (Platform) SDK / API** is the direct OpenAI-hosted service (platform.openai.com). You call `/v1/...` endpoints, authenticate with a **Bearer** token, and specify a **model** name directly (e.g., `gpt-4o`). ([OpenAI Platform][1])
* **Azure OpenAI (Azure AI / Foundry) SDK / API** runs the models inside Azure, and you call **resource/region-specific endpoints** that refer to a **deployment** you created in your Azure resource. You authenticate using Azure **api-key** (or managed identity) and must include an **api-version** query param; some models require specific API versions (for example `o3-mini` needs `2024-12-01-preview` or later). ([Microsoft Learn][2])

Which to use? If your infrastructure & billing are on Azure (or you need Azure security/compliance, regional endpoints, VNet/private endpoint, managed identity), use **Azure OpenAI**. If you want to use OpenAI’s hosted platform directly, use **OpenAI**.

---

### Detailed differences (what you actually see / change)

#### 1) How you address the model: *model name* vs *deployment*

* **OpenAI (platform):**

  * You pass `model: "model-name"` (e.g., `gpt-4o-mini`) in the request body to `/v1/chat/completions`. ([OpenAI Platform][1])
* **Azure OpenAI:**

  * You **create a deployment** in Azure AI Foundry / Azure OpenAI Studio that maps an underlying model to a **deployment name** (e.g., `o3-mini` deployed as `o3-mini`). Then you call the **deployment** via a resource endpoint:

    ```
    POST https://<your-resource>.cognitiveservices.azure.com/openai/deployments/<deployment>/chat/completions?api-version=<version>
    ```

  * That `deployment` path segment is required; you don’t just pass the model name like OpenAI platform does. ([Microsoft Learn][3])

#### 2) Endpoint & URL structure

* **OpenAI**: `https://api.openai.com/v1/...` (region-agnostic; platform-hosted). ([OpenAI Platform][1])
* **Azure**: `https://<resource>.cognitiveservices.azure.com/openai/deployments/<deployment>/... ?api-version=<x>` (resource + region specific and **requires** `api-version`). ([Microsoft Learn][3])

#### 3) Authentication / headers

* **OpenAI**: `Authorization: Bearer <OPENAI_KEY>`. ([OpenAI Platform][1])
* **Azure**: `api-key: <AZURE_KEY>` (or use Azure AD/managed identity patterns described in Azure docs). Azure endpoints may also be fronted by API Management and have extra auth options. ([Microsoft Learn][4])

#### 4) API versioning & model availability

* Azure makes you pick an **api-version** and different models may require particular preview or later API versions. Example: `o3-mini` requires `2024-12-01-preview` or later. If you call an older API version you’ll get the exact error you saw earlier. ([Microsoft Learn][5])

#### 5) SDK differences

* **OpenAI SDKs** (the official OpenAI client) are primarily targeted at the OpenAI platform, and use the platform endpoints by default. ([OpenAI Platform][1])
* **Azure SDKs / AzureOpenAI**: Microsoft documentation and Azure SDKs describe how to call Azure endpoints (and the new `openai` package also includes Azure-specific classes/flows in some versions). In practice you either:

  * Use OpenAI client configured to call Azure (some SDKs provide an `AzureOpenAI` or Azure-specific entry), **or**
  * Use plain `fetch`/HTTP to the Azure endpoint — which is what you did with Postman. The key is to supply the resource endpoint, `deployment`, `api-version`, and `api-key`. ([Microsoft Learn][6])

#### 6) Response shape & telemetry

* **Both** provide model output in similar chat-completion structures (messages/choices). The **usage** object (token counts) also appears in responses on both platforms (so you can show tokens used), and Azure portal provides additional telemetry (request IDs, region info, and portal metrics) separately. Portal metrics may also show aggregate usage and per-deployment stats. You’ll often see Azure-specific response headers like `apim-request-id` and region info. ([Microsoft Learn][3])

#### 7) Billing, compliance & deployment features

* **OpenAI (platform)** bills through OpenAI and is fastest to get started for many.
* **Azure OpenAI** bills via your Azure subscription and gives enterprise features: regional controls, private endpoints / VNet, integration with Azure identity & policy, enterprise SLAs, and availability within Azure compliance boundaries. If you need those (or want to consolidate billing), Azure is the natural choice. ([US Cloud][7])

---

### Practical example — how requests differ

**OpenAI (platform) example**

```http
POST https://api.openai.com/v1/chat/completions
Authorization: Bearer <OPENAI_KEY>
Content-Type: application/json

{
  "model": "gpt-4o",
  "messages": [{"role":"user","content":"Hello"}]
}
```

([OpenAI Platform][1])

**Azure OpenAI example**

```http
POST https://<your-resource>.cognitiveservices.azure.com/openai/deployments/o3-mini/chat/completions?api-version=2024-12-01-preview
api-key: <AZURE_KEY>
Content-Type: application/json

{
  "messages": [{"role":"user","content":"Hello"}],
  "model": "o3-mini"    // sometimes used; primary selector is the deployment path
}
```

Note: the required **deployment path** and **api-version** are the main differences. ([Microsoft Learn][3])

---

### For your Postman visualiser / token usage project — what to watch for

1. **Use the correct api-version** for the model you deployed (e.g., `o3-mini` → `2024-12-01-preview+`), otherwise you’ll get the “Model {modelName} is enabled only for api versions …” error. ([Microsoft Learn][5])
2. **Use the deployment name** in the path (not just a model name) when calling Azure endpoints. ([Microsoft Learn][3])
3. **Tokens & usage**: expect `usage` in the response body for client-side display; supplement with Azure portal metrics for aggregate monitoring. ([Microsoft Learn][3])
4. **Headers**: Azure responses include Azure-specific headers (request ID, region) you can surface in your visualiser for troubleshooting. ([Microsoft Learn][3])

---

### Recommendation (for your projects)

* Since you’re already using **Azure AI Foundry / Azure OpenAI** and deployments like `o3-mini`, keep using the **Azure-style calls** (deployment + api-version + api-key). It matches your portal and gives you portal metrics, regional control, and Azure security features. ([Microsoft Learn][2])
* If you ever move to the OpenAI platform, you’ll adjust the endpoint, auth header (Bearer), and model parameter accordingly.

---

[1]: https://platform.openai.com/docs/api-reference/introduction?utm_source=chatgpt.com "API Reference - OpenAI API"
[2]: https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/models?utm_source=chatgpt.com "Azure OpenAI in Azure AI Foundry Models - Microsoft Learn"
[3]: https://learn.microsoft.com/en-us/azure/ai-foundry/openai/chatgpt-quickstart?utm_source=chatgpt.com "Quickstart - Get started using chat completions with Azure OpenAI in ..."
[4]: https://learn.microsoft.com/en-us/azure/api-management/api-management-authenticate-authorize-azure-openai?utm_source=chatgpt.com "Authenticate to Azure OpenAI API - Azure API Management"
[5]: https://learn.microsoft.com/en-us/answers/questions/2264407/how-do-i-fix-the-model-%28%28modelname%29%29-is-enabled-on?utm_source=chatgpt.com "How do I fix the ''Model {modelName} is enabled only for api ..."
[6]: https://learn.microsoft.com/en-us/azure/ai-foundry/openai/reference-preview?utm_source=chatgpt.com "Azure OpenAI in Azure AI Foundry Models REST API preview ..."
[7]: https://www.uscloud.com/blog/the-differences-between-openai-and-microsoft-azure-openai/?utm_source=chatgpt.com "The 5 Main Differences Between OpenAI and Microsoft ..."

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
