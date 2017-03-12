/*
*
* startsWith()
* endsWith()
* includes()
* */


const mystring = "this is javascript es6";
console.log(mystring.startsWith('this'));
console.log(mystring.startsWith('s'));
console.log(mystring.endsWith('es6'));
console.log(mystring.includes('javascript'));


/*
* HEX
* OCT
* BINARY
*
* */

console.log(0xF10);
console.log(0o451);
console.log(0b10101010);


console.log(Number.isFinite(2));
console.log(Number.isFinite(-2));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite("string"));
console.log(Number.isInteger("string"));
console.log(Number.isInteger(4));