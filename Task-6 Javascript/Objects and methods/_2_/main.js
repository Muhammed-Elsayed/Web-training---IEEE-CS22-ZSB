// Method One
let objMethodOne = { property: "mohamed" };

console.log(objMethodOne.property); // "Method One"

// Method Two
let objMethodTwo = new Object({ property: "mohamed" });

console.log(objMethodTwo.property); // "Method Two"

// Method Three
let objMethodThree = Object.create(objMethodOne);

console.log(objMethodThree.property); // "Method Three"

// Method Four
// Create Your Object Here
let objMethodFour = Object.assign(objMethodOne, objMethodTwo);
console.log(objMethodFour.property); // "Method Four"
