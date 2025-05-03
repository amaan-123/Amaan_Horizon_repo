flowchart TD
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
