const number = 200;
console.log(42 == "42");
console.log(42 === "42");

// way1: if else
if (number === 200) {
  console.log("OK!");
} else if (number === 400 || number === 500) {
  console.log("Error!");
} else {
  console.log("Unknown state");
}

// way2: ternary (instant)
const message = number === 200 ? "OK!" : "Error!";
console.log(message);
