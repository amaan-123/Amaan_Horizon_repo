const container = document.getElementById('container');
const box1 = document.querySelector("#box-1");
const box2 = document.querySelector("#box-2");
const box3 = document.querySelector("#box-3");

box1.addEventListener('click', () => {
  console.log("Click on box-1 by Event Listener 1");
});
box1.addEventListener('click', () => {
  console.log("Click on box-1 by Event Listener 2");
});
box1.addEventListener('click', (event) => {
  console.log("Event Object:", event);
  console.log("Click X:", event.clientX);
  console.log("Click Y:", event.clientY);
});


box2.addEventListener('mousemove', (e)=>{
  console.log("Mouse X:", e.clientX, "Mouse Y:", e.clientY);
});

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener('keypress', (e)=>{
  console.log('key pressed:', e.key, 'key');
});
nameInput.addEventListener('keydown', (e)=>{
  console.log('key', e.key, 'went down');
});
nameInput.addEventListener('keyup', (e)=>{
  console.log('key', e.key, 'rises up');
});

nameInput.addEventListener('focus', (event) => {
  console.log("Input focused:", event);
  //if we had event.key, it would be undefined(since we are clicking on the input)
});
nameInput.addEventListener('blur', (event) => {
  console.log("Input blurred:", event);
});

// Event Propagation: Bubbling and Capturing
// Bubbling (Default Behavior): The event first triggers the handler on the innermost element that generated the event, and then "bubbles up" to the handlers on its parent elements in the DOM tree, all the way up to the document.
box3.addEventListener('click', (event) => {
  console.log("Clicked on box");
});
container.addEventListener('click', (event) => {
  console.log("Clicked on container");
});

// Capturing: The event starts from the outermost element and "captures" down to the innermost element that generated the event. To enable capturing, we pass true as the third argument to addEventListener.
container.addEventListener('click', () => {
  console.log("Click on Container (Capturing)");
}, true); // 'true' enables capturing for the container's listener