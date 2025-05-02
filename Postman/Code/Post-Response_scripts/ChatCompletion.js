// Postman
// Collection: AzureOpenAIAPI
// Folder: ChatCompletion
// Request: POST ChatCompletion

var template = `
<style type="text/css">
    .tftable {font-size:14px;color:#333333;width:100%;border-width: 1px;border-color: #87ceeb;border-collapse: collapse;}
    .tftable th {font-size:18px;background-color:#87ceeb;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;text-align:left;}
    .tftable tr {background-color:#ffffff;}
    .tftable td {font-size:14px;border-width: 1px;padding: 8px;border-style: solid;border-color: #87ceeb;}
    .tftable tr:hover {background-color:#e0ffff;}
    #responseMessage {font-size:16px;border-width: 2px;padding: 8px;border-style: solid;border-color: #1f1e33;}
</style>

<table class="tftable" border="1">
    <tr>
        <th>Response from {{{response.model}}}:</th>
    </tr>
    <tr>
       <td id = "responseMessage">{{{response.choices.[0].message.content}}}</td>
    </tr>
    <tr>
        <th>Usage</th>
    </tr>
    <tr>
        <td>Completion Tokens: {{{response.usage.completion_tokens}}}</td>
    </tr>
    <tr>
        <td>Reasoning Tokens: {{{response.usage.completion_tokens_details.reasoning_tokens}}}</td>
    </tr>
    <tr>
        <td>Prompt Tokens: {{{response.usage.prompt_tokens}}}</td>
    </tr>
    <tr>
        <td>Total Tokens: {{{response.usage.total_tokens}}}</td>
    </tr>
</table>
`;

function constructVisualizerPayload() {
    return {response: pm.response.json()}
}

pm.visualizer.set(template, constructVisualizerPayload());
