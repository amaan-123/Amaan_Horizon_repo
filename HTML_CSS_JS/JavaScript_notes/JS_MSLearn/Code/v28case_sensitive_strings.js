// strings are case-sensitive so 'error' is not === 'ERROR'
// so the output will be 'Looks great!!'
const state = 'error';
if (state === 'ERROR') {
console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}

// to fix this, we can use the toUpperCase() method to convert the string 'error' to uppercase
// and then compare it with 'ERROR'
// correct output will be 'Something went wrong!'
if (state.toUpperCase() === 'ERROR') {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}

// Using localeCompare instead of toUpperCase()
// localeCompare() method compares two strings in the current locale
// returns 0 if the strings are equal
// returns 1 if the string is greater than the other
// returns -1 if the string is less than the other
// sensitivity: 'base' makes the comparison case-insensitive
// correct output will be 'Something went wrong!'
if (state.localeCompare('ERROR', undefined, { sensitivity: 'base' }) === 0) {
    console.log('Something went wrong!');
} else {
    console.log('Looks great!!');
}
