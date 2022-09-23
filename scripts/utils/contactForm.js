// function displayModal() {
//     const modal = document.querySelector(".dialog");
// 	modal.style.display = "block";
//     console.log(modal)
// }

// function closeModal() {
//     const modal = document.getElementById("contact_modal");
//     modal.style.display = "none";
// }

const buttonModal = document.querySelector(".btn-banner");


buttonModal.addEventListener("click", (e) => {
    const dialog = document.querySelector(".dialog");
    const main = document.querySelector(".main");
   
    const dialogMask = document.querySelector(".dialog-mask");
    dialog.classList.add("opened");
    dialogMask.addEventListener("click", (e) => {
    const dialog = document.querySelector(".dialog");
    const main = document.querySelector(".main");
    dialog.classList.remove("opened");
    main.classList.remove("anti-scroll");
    main.setAttribute("aria-hidden", "false");
    dialog.setAttribute("aria-hidden", "true");
});
    main.classList.add("anti-scroll");
    main.setAttribute("aria-hidden", "true");
    dialog.setAttribute("aria-hidden", "false");
});

 const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", (e) => {
    const dialog = document.querySelector(".dialog");
    dialog.classList.remove("opened");
    dialog.style.display = "none";
 })


 const btnMobile = document.querySelector(".btn-modal-mobile");

 btnMobile.addEventListener("click", (e) => {
    const dialog = document.querySelector(".dialog");
    const main = document.querySelector(".main");
   
    const dialogMask = document.querySelector(".dialog-mask");
    dialog.classList.add("opened");
    dialogMask.addEventListener("click", (e) => {
    const dialog = document.querySelector(".dialog");
    const main = document.querySelector(".main");
    dialog.classList.remove("opened");
    main.classList.remove("anti-scroll");
    main.setAttribute("aria-hidden", "false");
    dialog.setAttribute("aria-hidden", "true");
});
    main.classList.add("anti-scroll");
    main.setAttribute("aria-hidden", "true");
    dialog.setAttribute("aria-hidden", "false");
});
