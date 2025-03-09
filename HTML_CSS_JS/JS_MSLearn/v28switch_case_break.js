// switch only checks for equality
// it can't check for greater than or less than like if-else
// break is used to exit the switch statement
// if break is not used, it will execute all the cases after the matched case
// default is like else in if-else
// default is optional
// default can be placed anywhere in the switch statement
const state = 200;
switch (state) {
    case 200:
    console.log('OK!');
    break;
    case 400: // or
    case 500: // or
    console.log('Error!');
    break;
    default: // else
    console.log('Unknown state');
    break;
    }
