// Array, Number, String, Boolean, Object, Function
const people = ["Aaron", "Mel", "John"]; 
const one = 1;
const str = "Hello World"; 
const b = true; 
const person = {
  firstName: "Aaron",
  lastName: "Powell",
};
function sayHello(person) {
  console.log("Hello " + person.firstName);
}

// typeof will test against the primitive type inside of the JavaScript type system
// typeof output displays array to be an object
console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);


console.log("-- instanceof --"); 
console.log(people instanceof Array); 
console.log(one instanceof Number); 
console.log(str instanceof String);
console.log(b instanceof Boolean); 
console.log(person instanceof Object); 
console.log(sayHello instanceof Function);
// instanceof evaluates array to be an array
// but instanceof test compares against the instance constructor
// that is used to create the variable
// whether any object/array/number constructor, etc.
// when we created number, string and boolean variables (lines 3,4 and 5)
// we used literal values and not the constructors

// instead if we do:
const two = new Number(2);
console.log("-- instanceof --");
console.log(two instanceof Number); 
// true: because it is an instance of Number constructor
//but now, if we do:
console.log("-- typeof --");
console.log(typeof two);
// object: because it was created using a constructor, not a literal
