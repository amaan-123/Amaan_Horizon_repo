const names = ['Justin', 'Burke', 'Sarah'];

// In each iteration of the loop, a new block scope is created, and a new name variable is declared for that iteration. This is why it appears as though const is being reassigned, but in reality, a new name is created for each iteration.

console.log('-- while loop --');
let whileIndex = 0;
while (whileIndex < names.length) {
    const name = names[whileIndex];
    console.log(name); 
    whileIndex++;
}

console.log('\n -- for loop --');
for (let forIndex = 0; forIndex < names.length; forIndex++) { 
    const name = names[forIndex];
    console.log(name);
}

console.log('\n-- for ... of --');
for (const name of names) { 
    console.log(name);
}




