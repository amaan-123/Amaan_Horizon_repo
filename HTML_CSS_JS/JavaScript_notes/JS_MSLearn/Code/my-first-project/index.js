const place = "World";
const greeting = "Hello";
// can use '', or "" with fixed message or %s substitution
console.log("%s, %s", greeting, place);
// can also use ``,called template literal with ${} to insert variables, this is easier to read
console.log(`${greeting}, ${place}`);
