// "use strict";
// open modal
const showModal = (openButton, modalContent) => {
  const openBtn = document.getElementById(openButton);
  const modalContainer = document.getElementById(modalContent);

  if (openBtn && modalContainer) {
    openBtn.addEventListener("click", function () {
      modalContainer.classList.add("show-modal");
    });
  }
};

// call function
showModal("open-modal", "modal-container");

// close modal
const closeModal = document.querySelectorAll(".close-modal");
const modalContainer = document.getElementById("modal-container");

// iterate over each Nodelist
closeModal.forEach((button) => {
  button.addEventListener("click", () => {
    modalContainer.classList.remove("show-modal");
  });
});

// close modal by clicking on escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    modalContainer.classList.remove("show-modal");
  }
});
