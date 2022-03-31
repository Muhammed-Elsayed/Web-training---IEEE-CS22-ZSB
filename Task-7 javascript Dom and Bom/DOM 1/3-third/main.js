// let myelement = document.createElement("div");
// let myatt = document.createAttribute("title");
// let mytxt = document.createTextNode("product one");
// let mycomment = document.createComment(" hello this is mo elsayed");

// myelement.className = "product";
// myelement.setAttributeNode(myatt);
// myelement.id = "momo";
// myelement.setAttribute("title", "mohamed");
// myelement.appendChild(mytxt);
// myelement.appendChild(mycomment);
// console.log(myelement);

// document.body.appendChild(myelement);

// let myele = document.createElement("div");
// let headings = document.createElement("h3");
// let paragraph = document.createElement("p");

// let headingstext = document.createTextNode("Product title");
// let paragraphtext = document.createTextNode("Product description");

// headings.appendChild(headingstext);
// paragraph.appendChild(paragraphtext);
// myele.appendChild(headings);
// myele.appendChild(paragraph);
// document.body.appendChild(myele);

// let myele = document.querySelector("div");

// console.log(myele.children[0])

// let mybtn = document.getElementById("btn");

// mybtn.onclick = function () {
//   console.log("clicked");
// };

// window.onscroll = function () {
//   console.log("scrolling now");
// };

// let username = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='age']");

// document.forms[0].onsubmit = function (event) {
//   let uservalid = false;
//   let agevalid = false;

//   console.log(username.value);

//   if (username.value !== "" && username.value.length <= 10) {
//     console.log(username.value.length);
//     uservalid = true;
//     console.log(uservalid);
//   }
//   if (ageInput.value != "") {
//     agevalid = true;
//     console.log(agevalid);
//   }

//   if (uservalid === false || agevalid === false) {
//     event.preventDefault();
//     console.log("PREVENTED");
//   }
// };

let myinput = document.querySelector("input");
console.log(myinput);
console.log(myinput.value);

document.forms[0].onchange = function () {
  document.getElementsByClassName("result")[0].textContent = `{${
    myinput.value
  }} USD Dollar = {${(myinput.value * 15.6).toFixed(2)}} Egyptian Pound`;
};
