const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", checkContent);

async function checkContent() {
  const text = document.getElementById("userInput").value.trim();
  console.log("User Input: ", text);
  console.log("JSON-encoded: ", JSON.stringify({ text }));

  const endpoint = "https://placeholder.cognitiveservices.azure.com";
  const apiKey = "placeholder";
  const apiVersion = "2024-09-01";

  const url = `${endpoint}/contentsafety/text:analyze?api-version=${apiVersion}`;
  console.log("URL is: ", url);

  if (!text) {
    console.error("Comment cannot be empty.");
    return;
  }
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": apiKey,
      },
      body: JSON.stringify({ text }),
    });

    const data = await response.json();
    console.log("API Response:", data); // Log the response to inspect its structure

    const categoriesAnalysis = data.categoriesAnalysis;

    if (Array.isArray(categoriesAnalysis)) {
      const table = document.getElementById("result");
      table.innerHTML = "";
      categoriesAnalysis.forEach((item) => {
        const row = document.createElement("tr");
        const categoryData = document.createElement("td");
        const severityData = document.createElement("td");

        categoryData.innerHTML = item.category;
        severityData.innerHTML = item.severity;

        row.appendChild(categoryData);
        row.appendChild(severityData);
        table.appendChild(row);
      });
    } else {
      console.error(
        "Unexpected data structure for categoriesAnalysis:",
        categoriesAnalysis
      );
    }
  } catch (error) {
    console.error("Error during API call:", error);
  }
}
