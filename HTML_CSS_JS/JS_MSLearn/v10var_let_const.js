// If the file was only between this and the next comment, that would be the function scope of var peace
var peace = "Var says Salaam!";
console.log(peace);
// prints the message

// but, if we were to change the order
console.log(trouble);
var trouble = "Troubling ya, ain't I!";
// prints undefined
// variable is available, but not yet assigned a value, so it's undefined
// This is different to when we have block scoped variables
// such as let and const

// var can be re-assigned
peace = "Var re-assigned says Salaam again";
console.log(peace);
// prints the message


// Now, let's try using let which is block scoped
// using an if true statement
if (true) {
  let world = "Let them ponder over the world!";
  console.log(world);
}
// prints the message, because variable is defined and is available

// Now, attempt to use variable before initializing & declaring it
if (true) {
  console.log(world);
  let world = "Let the World See";
}
// output says ReferenceError: Cannot access 'world' before initialization

if (true) {
  let world = "Let the World See";
}
console.log(world);
// Uncaught ReferenceError: world is not defined
// let variable is not available outside of the block scope

// This is the same for const
const firstname = "Adam";
console.log(firstname);
// prints the message

// but if we try to re-assign
firstname = "Eve";
// No can do! It's const! 
// gives TypeError: Assignment to constant variable.