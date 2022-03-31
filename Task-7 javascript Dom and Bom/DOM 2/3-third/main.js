let paragraph1 = document.querySelector("p");
let original_div = document.querySelector("div");
let div1 = document.createElement("div");
let div2 = document.createElement("div");

div1.className = "start";
div1.title = "Start Element";
div1.setAttribute("data-value", "Start");
div1.textContent = "Start";

div2.className = "end";
div2.title = "End Element";
div2.setAttribute("data-value", "End");
div2.textContent = "End";

original_div.before(div1);
original_div.after(div2);
