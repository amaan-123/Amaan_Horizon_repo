let num1 = '150';
let flo1 = '1.50';

console.log("********* Convert strings to integers *********");
console.log(parseInt('100'));
console.log(parseInt(num1));
console.log(parseInt('ABC')); //Non-numeric string => NaN
console.log(parseInt('0xF')); 
//Javascript treats it as Hexadecimal number, since it starts with 0x

console.log("********Converting strings to float**********");  
console.log(parseFloat('1.00'));
console.log(parseFloat(flo1));
//JavaScript's default behavior of omitting trailing zeros in the decimal 
//part results in the outputs 1 and 1.5, respectively.
console.log(parseFloat('ABC'));

console.log("*********More Conversion Examples**********");
//Numbers after special characters are ignored in parseInt 
console.log(parseInt('1.5')); 
console.log(parseInt('1 + 1'));

//Using Template Literals
console.log(parseInt(`${1 + 1}`));

console.log("*********Converting numbers to strings**********");
console.log(num1.toString());
console.log(flo1.toString());
console.log((100).toString());