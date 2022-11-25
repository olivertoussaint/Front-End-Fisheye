window.onload = function () {
  const buttonModal = document.querySelector(".modal-btn");
  const buttonModalMobile = document.querySelector(".modal-btn-mobile");
  const dialog = document.querySelector(".dialog");
  const main = document.querySelector(".main");
  const closeButton = document.querySelector(".close-btn");

  buttonModal.addEventListener("click", displayModal);
  buttonModalMobile.addEventListener("click", displayModal);
  closeButton.addEventListener("click", closeModal);

  function displayModal() {
    dialog.classList.toggle("opened");
    main.classList.add("anti-scroll");
    main.setAttribute("aria-hidden", "true");

    dialog.setAttribute("aria-hidden", "false");
  }

  function closeModal() {
    dialog.classList.remove("opened");
    main.classList.remove("anti-scroll");
    main.setAttribute("aria-hidden", "false");
    dialog.setAttribute("aria-hidden", "true");
  }
};
