// five questions

// the first one
let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
list0 = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });
console.log(list0);
// Elzero

console.log("the first question ends here");
// // the second one

let myString = "EElllzzzzzzzeroo";

filterlist = myString
  .split("")
  .filter(function (ele, index) {
    return myString.indexOf(ele) === index;
  })
  .join("");
console.log(filterlist);
// Elzero

console.log("the second question ends here");

// the third one

let myArray = ["E", "l", "z", ["e", "r"], "o"];

list2 = myArray.reduce(function (acc, current) {
  return (acc + current).replace(",", "");
});
console.log(list2);
// Elzero

console.log("the third question ends here");

// the fourth one

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

list1 = numsAndStrings
  .filter(function (ele, index, array) {
    return !isNaN(ele);
  })
  .map(function (ele) {
    return -ele;
  });

console.log(list1);
// [-1, -10, 10, 20, -5, -3]

console.log("THE FOURTH QUESTION ENDS HERE");
// the fifth one

let nums = [2, 12, 11, 5, 10, 1, 99];

list5 = nums.reduce(function (acc, current) {
  if (current % 2 != 0) {
    return acc + current;
  } else {
    return acc * current;
  }
}, 1);
console.log(list5);

// 500
