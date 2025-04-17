// Concise body (implicit return)
const add = (a,b) => a + b;
console.log(add(3,-4));

// Block body (explicit return)
// can declare a variable with let or const inside the multi line arrow function
const subtract = (a,b) => {
    const difference = a-b;
    return difference; 
}
console.log(subtract(1,9));