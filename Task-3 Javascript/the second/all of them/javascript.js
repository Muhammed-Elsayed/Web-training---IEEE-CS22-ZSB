// four questions
// the first one
let numberOne = 10,
  numberTwo = 20;
console.log(numberOne.toString() + numberTwo.toString());
console.log(numberOne.toString() + numberTwo.toString());

console.log(`${numberOne}${numberTwo}`);
console.log(`${numberOne}${numberTwo}`);

console.log(numberOne + "\n" + numberTwo);
console.log(`${numberTwo}
${numberOne}`);

// the second one
let elzero = [1, 2, 3];
console.log((elzero.innerHTML = "object")); // object
console.log(typeof elzero); // object

// the third one

console.log(`I'm In
\\\
Love \\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""`);

// the fourth one
let a = 21;
let b = 20;
let c = b + "" + a + "_";

console.log(`// _${a}_${c.repeat(3)}${b}_`); // _21_2021_2021_2021_20_
