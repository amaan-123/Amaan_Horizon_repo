'use strict';

document.getElementById("getData").addEventListener("click", response);

async function response() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = ""; // Clear previous content

    const heading = document.createElement("h2");
    heading.textContent = "Response Text";
    responseDiv.appendChild(heading);

    data.forEach(comment => {
      const hr = document.createElement("hr");
      responseDiv.appendChild(hr);

      const title = document.createElement("h3");
      title.textContent = comment.name;
      responseDiv.appendChild(title);

      const body = document.createElement("p");
      body.textContent = comment.body;
      responseDiv.appendChild(body);
    });
  } catch (error) {
    console.error(error);
  }
}
