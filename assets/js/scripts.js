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
