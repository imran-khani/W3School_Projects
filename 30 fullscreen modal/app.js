console.clear();
let modal_container = document.querySelector(".modal_container");
let openModal = document.querySelector("#openModal");
let closeBtn = document.querySelector(".close_modal");

let isOpen = false;

openModal.addEventListener("click", () => {
  if (!isOpen) {
    modal_container.style.transform = "translateY(0)";
    isOpen = true;
  }
});

closeBtn.addEventListener("click", () => {
  modal_container.style.transform = 'translateY(100%)';
  isOpen = false;
});
