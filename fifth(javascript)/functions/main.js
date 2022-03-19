// six questions

// first one
function sayHello(theName, theGender) {
  if (theGender == "Male") {
    x = "Mr";
  } else if (theGender == "Female") {
    x = "Miss";
  } else {
    x = "";
  }

  console.log(`Hello ${x} ${theName}`);
}

// Needed Output
// sayHello("Osama", "Male"); // "Hello Mr Osama"
// sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("first question ends here");

// second one

function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    return console.log("Second Number Not Found");
  }
  if (operation === "subtract") {
    sum = firstNum - secondNum;
  } else if (operation === "multiply") {
    sum = firstNum * secondNum;
  } else {
    sum = firstNum + secondNum;
  }
  console.log(sum);
}

// Needed Output
// calculate(20); // Second Number Not Found

calculate(20, 30, "multiply"); // 600

// fourth one

function checkStatus(a, b, c) {
  let age = 0;
  let bolean1 = true;

  list1 = [a, b, c];

  for (i = 0; i < 3; i++) {
    if (typeof list1[i] == "string") {
      name1 = list1[i];
    } else if (typeof list1[i] == "number") {
      age = list1[i];
    } else {
      bolean1 = list1[i];
    }
  }
  if (bolean1 == true) {
    message = "You Are Available For Hire";
  } else {
    message = "You Are Not Available For Hire";
  }
  console.log(`Hello ${name1}, Your Age is ${age}, ${message}`);
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
// checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("fourth one ended here");
// fifth one

function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value="${i}">`);
    document.write(i);
    document.write(`</option>`);
  }
  document.write(`</selct>`);
}
createSelectBox(2000, 2021);

console.log("fifth one ends here");
// sixth one

function multiply(...parameters) {
  let product1 = 1;

  for (i = 0; i < parameters.length; i++) {
    if (typeof parameters[i] == "string") {
      continue;
    } else {
      product1 = parseInt(parameters[i]) * product1;
    }
  }

  console.log(product1);
}

multiply("A", 10, 30); // 300
