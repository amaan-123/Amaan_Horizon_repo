const box1 = document.querySelector("#box-1");
box1.addEventListener('click', ()=>{
  console.log("click event on box1");
});
box1.addEventListener('click', ()=>{
  console.log("same click event on box1, via another listener for same event on same element, not possible via event handler(only last one executes for event handlers)");
})
box1.addEventListener('click', (e)=>{
  console.log('event object',e);
});

const box2 = document.querySelector("#box-2");
box2.addEventListener('mousemove', (e)=>{
  console.log("event object", e.clientX, e.clientY);
});

const nameInput = document.getElementById("nameInput");
nameInput.addEventListener('keypress', (e)=>{
  console.log('key pressed', e.key);
});
nameInput.addEventListener('keydown', (e)=>{
  console.log('key', e.key);
});
nameInput.addEventListener('keyup', (e)=>{
  console.log('key', e.key);
});