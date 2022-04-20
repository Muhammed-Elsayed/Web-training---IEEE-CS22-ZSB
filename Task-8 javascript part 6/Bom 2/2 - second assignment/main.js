let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");

let selectBox = document.getElementById("selectbox");

// first one condition

if (window.sessionStorage.getItem("first")) {
  first.value = window.sessionStorage.getItem("first");
}

// second one condition
if (window.sessionStorage.getItem("second")) {
  second.value = window.sessionStorage.getItem("second");
}
// third one condition
if (window.sessionStorage.getItem("third")) {
  third.value = window.sessionStorage.getItem("third");
}

// select box condition
if (window.sessionStorage.getItem("select_box")) {
  selectBox.value = window.sessionStorage.getItem("select_box");
}

// first one
first.addEventListener("input", function (e) {
  window.sessionStorage.setItem("first", e.currentTarget.value);
});

// second one
second.addEventListener("input", function (e) {
  window.sessionStorage.setItem("second", e.currentTarget.value);
});

// third one
third.addEventListener("input", function (e) {
  window.sessionStorage.setItem("third", e.currentTarget.value);
});

// select box
selectBox.addEventListener("change", function (e) {
  window.sessionStorage.setItem("select_box", e.currentTarget.value);
});
