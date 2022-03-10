console.group("group1");
console.log("message one");
console.log("message two");

console.group("child group");
console.log("message one");
console.log("message two");

console.group("grand child group");
console.log("message one");
console.log("message two");

console.groupEnd();
console.groupEnd();
console.groupEnd();

console.group("group2");
console.log("message one");
console.log("message two");
