const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const showDays = () => {
    const list = document.getElementById("days-list");
    list.innerHTML = ""; // Clear old list if button is clicked multiple times
  
    days.forEach(day => {
      const li = document.createElement("li");
      li.textContent = day;
      list.appendChild(li);
    });
  };
  
  document.getElementById("show-days-btn").addEventListener("click", showDays);
  