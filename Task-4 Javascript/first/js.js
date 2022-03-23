// seven small questions all on the same file

// the first one

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100 * 1000); // 100000
console.log(1e5); // 100000
console.log(10 ** 5); // 100000
console.log(100000.0); // 100000
console.log(1_00_000); // 100000

// the second one
console.log(Math.abs(Number.MIN_SAFE_INTEGER)); // 9007199254740991

// the third one
console.log(16); // 16

// the fourth one
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

//  the fifth one
let num = 10;
let one = +Number.isInteger(num);
console.log(++one); // 2

//  the sixth one

let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.trunc(flt)); // 10

//  the seventh one
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
