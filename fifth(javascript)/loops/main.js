// seven questions

// first question
let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i < end; i = i + 10) {
  if (i != 40) {
    console.log(i);
  }
}

console.log("first question ends here");
// second question

let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (let j = start2; j >= stop2; j--) {
  if (j < start2) {
    console.log(`${end2}${j}`);
  } else {
    console.log(j);
  }
}

console.log("second question ends here");
// third question
let start3 = 1;
let end3 = 6;
let breaker3 = 2;

for (i = start3; i <= end3; i++) {
  console.log(i);
  for (j = breaker3; j < end3; j += 2) {
    console.log(`--${j}`);
  }
}
console.log("third question ends here");
// fourth question

let index4 = 10;
let jump4 = 2;
let end4 = 0;

for (;;) {
  console.log(index4);
  index4 -= 2;
  if (index4 < 4) {
    break;
  }
}

console.log("fourth question ends here");
// fifth question

let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0; i < friends.length; i++) {
  if (friends[i].startsWith("A")) {
    continue;
  }
  console.log(`"${i} => ${friends[i]} `);
}

// // Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh"

console.log("the fifth question ends here");
// sixth question

let swappedName = "elZerO";
for (const i in swappedName) {
  if (i.toUpperCase() === i) {
    swappedName.replace(i, i.toLowerCase);
  } else {
    swappedName.replace(i, i.toUpperCase);
  }
}
console.log(`"${swappedName}"`);

// seventh question

let start7 = 1;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (i = start7; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    console.log(mix[i]);
  }
}
