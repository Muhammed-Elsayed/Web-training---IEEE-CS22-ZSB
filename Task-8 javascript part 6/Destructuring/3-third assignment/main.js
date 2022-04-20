let arr1 = ["Ahmed", "Sameh", "Sayed"];
let arr2 = ["Mohamed", "Gamal", "Amir"];
let arr3 = ["Haytham", "Shady", "Mahmoud"];

arr2[0] = arr3[1];
arr2[1] = arr3[2];
arr2[2] = arr1[0];

let [a, b, c] = arr2;

console.log(`My Best Friends: ${a}, ${b}, ${c}`);

// My Best Friends: Shady, Mahmoud, Ahmed
