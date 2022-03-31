let mydiv = document.querySelector("div");

function countdown() {
  mydiv.innerHTML -= 1;
  if (mydiv.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countdown, 300);
