let mydiv = document.querySelector("div");

function countdown() {
  mydiv.innerHTML -= 1;
  if (mydiv.innerHTML === "5") {
    window.open("https://elzero.org/", "", "width = 400px, height = 500px");
  }
  if (mydiv.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 300);
