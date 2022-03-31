const openmodelbutton = document.querySelectorAll("[data-model-target]");
const closemodelbutton = document.querySelectorAll("[data-close-model]");
const overlay = document.getElementById("overlay");

openmodelbutton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closemodelbutton.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classlist.add("active");
  overlay.classlist.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classlist.remove("active");
  overlay.classlist.remove("active");
}
