// Postman
// Collection: AzureOpenAIAPI
// Folder: ChatCompletion
// Request: POST ChatCompletion

// Handlebars template with two tables: one for the user prompt, then one for the AI response
var template = `
<style type="text/css">
    .tftable {font-size:14px;color:#333333;background-color:#d0e0e3;width:100%;border-width:1px;border-color:#87ceeb;border-collapse:collapse;}
    .tftable th {font-size:20px;background-color:#073763;color:#ffffff;border-width:1px;padding:8px;border-style:solid;border-color:#87ceeb;text-align:left;}
    .tftable td {font-size:14px;border-width:1px;padding:8px;border-style:solid;border-color:#87ceeb;}
    .sub-heading {font-size:16px;background-color:#84c5df;border-width:1px;padding:8px;border-style:solid;border-color:#87ceeb;}
    .tftable tr:hover {background-color:#e0ffff;}
</style>

<!-- Table 1: User's input -->
<table class="tftable" border="1" style="margin-bottom:20px">
  <tr><th>Your “user” prompt:</th></tr>
  <tr><td>{{{userMessage}}}</td></tr>
</table>

<!-- Table 2: Model's output -->
<table class="tftable" border="1">
  <tr><th>Response from {{{response.model}}}:</th></tr>
  <tr><td>{{{response.choices.[0].message.content}}}</td></tr>

  <tr><th>Usage</th></tr>
  <tr><td class = "sub-heading">Completion Tokens: {{{response.usage.completion_tokens}}}</td></tr>
  <tr><td>Accepted Prediction Tokens: {{{response.usage.completion_tokens_details.accepted_prediction_tokens}}}</td></tr>
  <tr><td>Audio Tokens: {{{response.usage.completion_tokens_details.audio_tokens}}}</td></tr>
  <tr><td>Reasoning Tokens: {{{response.usage.completion_tokens_details.reasoning_tokens}}}</td></tr>
  <tr><td>Rejected Prediction Tokens: {{{response.usage.completion_tokens_details.rejected_prediction_tokens}}}</td></tr>
  <tr><td class = "sub-heading">Prompt Tokens: {{{response.usage.prompt_tokens}}}</td></tr>
  <tr><td>Audio Tokens: {{{response.usage.prompt_tokens_details.audio_tokens}}}</td></tr>
  <tr><td>Cached Tokens: {{{response.usage.prompt_tokens_details.cached_tokens}}}</td></tr>
  <tr><td class = "sub-heading">Total Tokens: {{{response.usage.total_tokens}}}</td></tr>
</table>
`;

// Grab both the response JSON and your original request body:
function constructVisualizerPayload() {
    const response = pm.response.json();

    // parse the raw JSON you sent in the request
    // 🛠 Fix: Access raw body correctly as a property, not a function
    const rawBody = pm.request.body.raw;

    let userMessage = "";
    try {
        const requestBody = JSON.parse(rawBody);

        // find the first message whose role is "user" in the messages array
        for (let msg of requestBody.messages) {
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

// Render both table outputs with the visualizer
pm.visualizer.set(template, constructVisualizerPayload());