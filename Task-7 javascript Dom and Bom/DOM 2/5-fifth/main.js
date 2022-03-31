let myform = document.querySelector("form");
myform.onclick = function (e) {
  console.log(`This is ${e.target.tagName}`);
};
