let class1 = document.querySelector(".one");
let class2 = document.querySelector(".two");

let bridge = class1.title;
class1.title = class2.title;
class2.title = bridge;

let mybridge = class1.textContent;
class1.textContent = class2.textContent;
class2.textContent = mybridge + " " + "2";

console.log(class1);
console.log(class2);
