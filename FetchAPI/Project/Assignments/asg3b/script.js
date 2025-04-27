'use strict';

let userData = []; // Store API response data
let currentIndex = 0; // Track the current row to display

document.getElementById("getData").addEventListener("click", response);

async function response() {
  try {
    // Fetch data only if not already fetched
    if (userData.length === 0) {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      userData = await res.json();

      // Remove placeholder row
      const placeholderRow = document.querySelector("#userTable .placeholder-row");
      if (placeholderRow) {
        placeholderRow.remove();
      }
    }

    // Add one row per click
    if (currentIndex < userData.length) {
      const user = userData[currentIndex];
      const table = document.getElementById("userTable");

      const tRow = document.createElement("tr");
      const tId = document.createElement("td");
      tId.innerHTML = user.id;
      const tName = document.createElement("td");
      tName.innerHTML = user.name;
      const tEmail = document.createElement("td");
      tEmail.innerHTML = user.email;

      tRow.append(tId, tName, tEmail);
      table.append(tRow);

      currentIndex++; // Increment index for the next row
    } else {
      alert("All rows have been displayed.");
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
