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

function displayModal() {
    const buttonModal = document.querySelector(".modal-btn");
    const dialog = document.querySelector(".dialog");
    const main = document.querySelector(".main");
    
    buttonModal.addEventListener("click", () => {
        dialog.toggle("opened");
        main.classList.add("anti-scroll");
        main.setAttribute("aria-hidden", "true");
        dialog.setAttribute("aria-hidden", "false");
    });
}

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

displayModal()
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

// const elts = document.querySelectorAll('.img-card')
// console.log(elts)
// const dialog = document.getElementById('lightbox')

// for (const elt of elts) {
//     elt.addEventListener('click', function onClick() {
//       console.log('media clicked');
//     });
//   }

// function openDialog() {
//     const dialog = document.querySelector(".dialog");
//     const main = document.querySelector(".main");
//     const closeBtn = document.querySelector(".close-btn");
//     const overlay = document.querySelector(".overlay");
  
//     dialog.classList.add("opened");
//     closeBtn.focus();
//     overlay.addEventListener("click", closeDialog);
//     main.classList.add("anti-scroll");
//     main.setAttribute("aria-hidden", "true");
//     dialog.setAttribute("aria-hidden", "false");
//   }

//   openDialog()

@media screen and (max-width: 1500px) {
    .photographer_section {
      grid-template-columns: 1fr 1fr;
    }
  }
  
  @media screen and (max-width: 822px) {
    .modal-btn {
      display: none;
    }
    .dialog-windows {
      width: 360px;
      height: auto;
    }
    .total-likes-container {
      display: none;
    }
    form input {
      height: 1.5rem;
      padding: 0 0 5px 0;
    }
  }
  
  @media screen and (max-width: 768px) {
    #main,
    .main {
      margin: 0px 0.5rem;
    }
    h1.main-title {
      margin-right: 0;
    }
    .media_card_container {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 17px;
      row-gap: 54px;
    }
  
    .card_media,
    .img-card,
    .video-card {
      width: 100%;
      height: 30vh;
    }
    .card-media-footer {
      font-size: 1em;
    }
    .btn-heart {
      font-size: 1em;
      position: relative;
      top: 2px;
    }
  }
  
  @media screen and (max-width: 680px) {
    .banner-title {
      margin: 0;
    }
    .fa-play-circle {
      margin-top: -259px;
  }
  }
  
  @media screen and (max-width: 600px) {
    .media_card_container {
      grid-template-columns: 1fr;
    }
  
    .card_media,
    .img-card,
    .video-card {
      width: 100%;
      height: 240px;
    }
    .logo {
      height: 35px;
      margin-left: 5px;
    }
    h1.main-title {
      font-size: 1.5rem;
    }
  }
  
  @media screen and (max-width: 672px) {
    #main {
      position: relative;
      top: -90px;
    }
    h1.main-title {
      margin-right: 0;
    }
    .dialog-windows {
      width: 80%;
      height: 70%;
    }
  }
  
  @media screen and (max-width: 480px) {
    #main,
    .main {
      margin: 0 0.1rem;
    }
  
    h1.banner-title {
      margin: 0 0.25rem 0 0;
      font-size: 2rem;
    }
  
    .banner-img img {
      width: 140px;
      height: 175px;
    }
    /* .media_card_container {
      grid-template-columns: 1fr;
    }
  
    .card_media,
    .img-card,
    .video-card {
      width: 100%;
      height: 240px;
    } */
  
    #sortBy {
      font-size: 1.5rem;
    }
  
    .filter-select__trigger {
      height: 2.5rem;
    }
  
    .filter span {
      font-size: 1rem;
    }
  
    .filter-options-container {
      top: 25.75rem;
      min-width: 9.5625rem;
    }
    .modal-btn-mobile button {
      width: 140px;
      max-width: 200px;
      font-size: 1rem;
    }
    .modal-close {
      font-size: 2rem;
    }
  
    .dialog-windows {
      width: 90%;
      height: auto;
    }
  
    form label {
      font-size: 1.5rem;
    }
  
    form input {
      height: 2.5rem;
    }
  }
  
  @media screen and (max-width: 420px) {
    .logo {
      height: 25px;
      margin-left: 5px;
    }
    h1.main-title {
      font-size: 1rem;
    }
    #modal-title {
      font-size: 1.2rem;
    }
    form label {
      font-size: 1.2rem;
    }
  
    form input {
      height: 1.8125rem;
      padding: 0 0 2px 0;
    }
  
    .btn-submit.button {
      padding: 20px;
    }
    .filter-options-container {
      top: 23.8rem;
    }
  }
  
  @media screen and (max-width: 360px) {
    .filter-options-container {
      top: 22.3rem;
    }
    .filter-option {
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 822px) {
    .modal-btn-mobile {
      display: none;
    }
    .dialog-windows {
      max-width: 380px;
      height: auto;
    }
    form input {
      height: 2.5rem;
      font-size: 1.5rem;
    }
  }