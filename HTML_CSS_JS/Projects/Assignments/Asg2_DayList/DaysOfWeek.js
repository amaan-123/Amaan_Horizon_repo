const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const list = document.getElementById('list');

function display() {
  if (!list) return;
  list.innerHTML = ""; // Clear the list
  const fragment = document.createDocumentFragment(); // Create a DocumentFragment

  days.forEach(day => {
    const li = document.createElement('li'); // Create a new <li> element
    li.innerText = day; // Set the text of the <li>
    if (day === "Saturday" || day === "Sunday") {
      li.classList.add('weekend'); // Add the 'weekend' class for styling
    }
    fragment.appendChild(li); // Add the <li> to the fragment
  });

  list.appendChild(fragment); // Append the fragment to the DOM
}

const erase = () => {
  if (!list) return;
  list.innerHTML = ""; // Clear the list
};

document.getElementById('show').addEventListener('click', display);
document.getElementById('clear').addEventListener('click', erase);