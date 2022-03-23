// six questions

// the first question

let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = 3;
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

//  the second question

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]

//  the third question

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr.push(
  arrTwo.pop(),
  arrOne.pop(),
  arrOne.pop(),
  arrOne.pop(),
  arrTwo.pop(),
  arrTwo.pop()
);
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

// the fourth question
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words.pop().shift().toUpperCase().slice(2)); // ZERO

// the fifth question

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

if (haystack.includes(needle) == true) {
  console.log("Found");
}

if (haystack.indexOf(needle) == 1) {
  console.log("found");
}

if (haystack.lastIndexOf(needle) == 1) {
  console.log("found");
}

// the sixth question

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs.push(
  arr1.pop().toLowerCase(),
  arr2.pop().toLowerCase(),
  arr2.pop().toLowerCase()
);
x = allArrs.sort();
console.log(x.join("")); // fxy
