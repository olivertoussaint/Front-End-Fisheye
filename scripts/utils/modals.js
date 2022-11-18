// function backgroundChangeColor() {
//     const nodeList = document.querySelectorAll(".text-control");
//     for (let i = 0; i < nodeList.length; i++) {
//         nodeList[i].style.backgroundColor = "#f9f9f9c9";
//     }
// }

// const form               = document.getElementById('form');
// const firstName          = document.getElementById('first');
// const lastName           = document.getElementById('last');
// const email              = document.getElementById('email');
// const msg                = document.getElementById('msg');

// // PATTERN
// const pattern = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;


// function checkFirstName() {
//     const firstValue         = firstName.value.trim();
//     let firstError = document.getElementById('first-error');
//     if (firstValue === "") {
//         firstError.innerHTML = "Ce champ ne doit pas être vide";
//         firstName.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//     } else if (!firstValue.match(pattern)) {
//         firstError.innerHTML = "ce champ ne doit pas contenir de chiffres";
//         firstName.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//     } else {
//         let validMinimLetter = firstValue.length;
//         if (validMinimLetter < 2) {
//             firstError.innerHTML = "Il faut saisir au minimum 2 lettres";
//             firstName.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//         } else {
//             firstError.innerHTML = '';
//         firstName.parentElement.setAttribute('data-error-visible', 'false');
//         firstName.style.backgroundColor = "#fff";
//         return true;
//         }
//     }
        
//   }

//   // CHECK LAST NAME COMPLIANCE
//   function checkLastName() {
//     const lastValue         = lastName.value.trim();
//     let lastError = document.getElementById('last-error');

//     if (lastValue === "") {
//         lastError.innerHTML = "Ce champ ne doit pas être vide";
//         lastName.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//     } else if (!lastValue.match(pattern)) {
//         lastError.innerHTML = "ce champ ne doit pas contenir de chiffres";
//         lastName.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//     } else {
//         let validMinimLetter = lastValue.length;
//         if (validMinimLetter < 2) {
//             lastError.innerHTML = "Il faut saisir au minimum 2 lettres";
//             lastName.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//         } else {
//             lastError.innerHTML = '';
//         lastName.parentElement.setAttribute('data-error-visible', 'false');
//         lastName.style.backgroundColor = "#fff";
//         return true;
//         }
//     }
// }
// // CHECK EMAIL VALIDATION
// function checkEmail() {
//     const emailValue         = email.value.trim();
//     let emailError    = document.getElementById('email-error');
//     const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     if (emailValue === "") {
//         emailError.innerHTML = "Ce champ ne doit pas être vide";
//         email.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//     } else if (!emailValue.match(emailRegExp)) {
//         emailError.innerHTML = "saisissez un format valide";
//         email.parentElement.setAttribute('data-error-visible', 'true');
//         return false;
//     } else {
//         emailError.innerHTML = '';
//         email.parentElement.setAttribute('data-error-visible', 'false');
//         email.style.backgroundColor = "#fff";
//         return true;
//         }
//     }

//     // CHECK MSG VALIDATION
//     function checkMsg() {
//         const msgValue      = msg.value.trim();
//         let textareaError  = document.getElementById('textarea-error');

//         if (msgValue === "") {
//             textareaError.innerHTML = "un petit commantaire pour m'encourager svp ✍";
//             msg.parentElement.setAttribute('data-error-visible', 'true');
//             return false
//         } else {
//             textareaError .innerHTML = '';
//             msg.parentElement.setAttribute('data-error-visible', 'false');
//             msg.style.backgroundColor = "#fff";
//             return true;
//         }
//     }

// function displayModal() {
//     const buttonModal = document.querySelector(".banner-btn");
//     const dialog = document.querySelector(".dialog");
//     const main = document.querySelector(".main");
    
//     buttonModal.addEventListener("click", () => {
//         dialog.toggle("opened");
//         main.classList.add("anti-scroll");
//         main.setAttribute("aria-hidden", "true");
//         dialog.setAttribute("aria-hidden", "false");
//     });
// }

// function closeModal() {
//     const closeBtn = document.querySelector(".close-btn");
//     const dialog = document.querySelector(".dialog");
//     const main = document.querySelector(".main");
//        closeBtn.addEventListener("click", () => {
//        dialog.classList.remove("opened");
//        main.classList.remove("anti-scroll");
//        main.setAttribute("aria-hidden", "false");
//        dialog.setAttribute("aria-hidden", "true");
//     });
// }

// function openModalMobile() {
//     const btnMobile = document.querySelector(".modal-btn-mobile");
//     const dialog = document.querySelector(".dialog");
//     const main = document.querySelector(".main");
//     btnMobile.addEventListener("click", () => {
//         dialog.classList.add("opened");
//         main.classList.add("anti-scroll");
//         main.setAttribute("aria-hidden", "true");
//         dialog.setAttribute("aria-hidden", "false");
//     });
// }  

// displayModal()
// closeModal()
// openModalMobile()

// // LAUNCH ALL FUNCTIONS
// function launchAllFunctions() {
//     checkFirstName()
//     checkLastName()
//     checkEmail()
//     checkMsg()
// }


// function isValidedForm() {
//     if(checkFirstName()
//     && checkLastName()
//     && checkEmail()
//     && checkMsg()
//     ) {
//         return true;
//     }
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e);
//     if (isValidedForm()) {
//         const form               = document.getElementById('form');
//         const modalTitle = document.querySelector(".modal-title");
//         form.style.display = "none";
//         modalTitle.innerHTML = `Votre message <br />a bien été envoyé`;
//         function closeSubmit() {
//             setTimeout(() => {
//                 window.location.reload();
//             }, 2000);
//         }
//         closeSubmit()
//     }
//     launchAllFunctions();
// })

