// Section 1: Appending elements and text to the body
const body = document.body;
body.append(`append to body`, ` multiple`, ` string items`); // Appends multiple strings to the body
const div = document.createElement('div');
body.append(div); // Appends a new div to the body
div.innerText = `append to div using innerText`; // Sets text content of the div using innerText

// Section 2: Creating and appending another div
const div2 = document.createElement('div');
body.append(div2); // Appends another div to the body
div2.textContent = "append to another div using textContent"; // Sets text content of the div using textContent
console.log(body.textContent); // Logs all text content of the body
console.log(body.innerText); // Logs visible text content of the body

// Section 3: Modifying an existing span element using innerHTML
const spanElement1 = document.querySelector('#hi');
spanElement1.innerHTML = "<strong>setting the HTML content by innerHTML</strong>"; // Sets HTML content of the span

// Section 4: Creating and appending a strong element
const strong = document.createElement('strong');
strong.innerText = " strong element appended to another div"; // Sets text content of the strong element
div2.append(strong); // Appends the strong element to div2

// Section 5: Removing an element
const spanBye = document.querySelector('#bye');
spanBye.remove(); // Removes the span with id 'bye'
// div2.removeChild(strong);
// strong.remove();
const spanHi = document.querySelector('#hi');
console.log(spanHi.getAttribute('id')); // Logs the 'id' attribute
console.log(spanHi.getAttribute('title')); // Logs the 'title' attribute
console.log(spanHi.id); // Logs the 'id' property
console.log(spanHi.title); // Logs the 'title' property

// Modifying attributes
spanHi.setAttribute('id', 'new-id'); // Sets a new 'id' attribute
spanHi.setAttribute('title', 'new title'); // Sets a new 'title' attribute
spanHi.id = 'another-new-id'; // Updates the 'id' property
spanHi.title = 'another new title'; // Updates the 'title' property

// Removing attributes
spanHi.removeAttribute('title'); // Removes the 'title' attribute
spanHi.removeAttribute('id'); // Removes the 'id' attribute

// Section 7: Working with data attributes
console.log(spanHi.dataset); // Logs all data attributes as a DOMStringMap
console.log(spanHi.dataset.test); // Logs the value of 'data-test'
console.log(spanHi.dataset.longerName); // Logs the value of 'data-longer-name'

// Section 8: Working with classList
console.log(spanHi.classList); // Logs the list of classes
spanHi.classList.add('new-class'); // Adds a new class
console.log(spanHi.classList); // Logs updated class list
spanHi.classList.remove('hi1'); // Removes a class
console.log(spanHi.classList); // Logs updated class list
spanHi.classList.toggle('hi1'); // Toggles the 'hi1' class
console.log(spanHi.classList); // Logs updated class list
spanHi.classList.toggle('hi3'); // Toggles the 'hi3' class
console.log(spanHi.classList); // Logs updated class list
spanHi.classList.toggle('another-class', true); // Ensures 'another-class' is added
console.log(spanHi.classList); // Logs final class list
