function wasClicked(event) {
  console.log(`clicked a button: ${event.target.id}`);
};

function mouseOver(event) {
  console.log(`mouse on: ${event.target.id}`);
};

function mouseMove(event) {
  console.log(`mouse moving on: ${event.target.id}`);
};

function keyPressEvent(event) {
  console.log(`key pressed: ${event.key}`);
}

function keyUpEvent(event) {
  console.log(`key released: ${event.key}`);
}

function keyDownEvent(event) {
  console.log(`key down: ${event.key}`);
}