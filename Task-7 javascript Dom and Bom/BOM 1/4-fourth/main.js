let mydiv = document.querySelector("div");

function countdown() {
  mydiv.innerHTML -= 1;
  if (mydiv.innerHTML === "0") {
    location.href = "https://elzero.org/";
  }
}

let counter = setInterval(countdown, 300);
