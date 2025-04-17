// TODO: Handle case when user enters spaces in the input field

const firstname = ''; // empty string is falsy
// const firstname = ' '; // space or any other character is truthy
if (firstname) {
    console.log('We have a name!');
} else {
    console.log('No name provided');
}