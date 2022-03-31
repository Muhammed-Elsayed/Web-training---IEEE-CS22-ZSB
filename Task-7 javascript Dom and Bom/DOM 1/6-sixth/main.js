let element = document.querySelector("[name='elements']");
let text = document.querySelector("[name='texts']");
let type = document.querySelector("[name='type']");
let result = document.querySelector(".results");

document.forms[0].onsubmit = function (e) {
  document.querySelectorAll(".box").forEach((el) => el.remove());
  e.preventDefault();
  for (let i = 0; i < element.value; i++) {
    myBox = document.createElement(type.value);

    myBox.className = "box";
    myBox.id = `id-${i + 1}`;
    myBox.title = "Element";
    myText = document.createTextNode(text.value);
    myBox.appendChild(myText);
    result.appendChild(myBox);
  }
};
