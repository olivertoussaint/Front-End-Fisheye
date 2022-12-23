class App {
  constructor() {
    this.$photographersSection = document.querySelector(
      ".photographers_section"
    );
    this.bannerWrapper = document.querySelector(".banner");
    this.mediaContainer = document.querySelector('.media_card_container');
    
    this._photographersApi = new PhotographerApi("./data/photographers.json");
    this._mediasApi = new MediaApi("./data/photographers.json");
  }

  async displayAllPhotographerBadges() {
    const photographers = await this._photographersApi.getPhotographers();
    photographers.forEach((photographer) => {
      const Template = new PhotographersCard(photographer);
      this.$photographersSection.appendChild(Template.createPhotographerCard());
    });
  }

  async displayPhotographerHomePage() {
    let params = new URLSearchParams(document.location.search);
    let id = Number(params.get("id"));
    const photographers = await this._photographersApi.getPhotographers();
    const photographer = photographers.find((value) => value.id === id);
    const medias = await this._mediasApi.getMedias();
    const arrayMedia = medias.filter((value) => value.photographerId === id);
    const photographerHomePageTemplate = new PhotographerHomePage(photographer);
    this.bannerWrapper.innerHTML = photographerHomePageTemplate.createPhotographerHomePage();
    const total = arrayMedia.reduce((acc, curr) => acc += curr.likes, 0);
    const $totalLikes = document.querySelector(".total-likes");
    $totalLikes.innerHTML += total;

    arrayMedia.forEach((media) => {
      const galleryTemplate = new MediaCard(media);
      this.mediaContainer.appendChild(galleryTemplate.createMedia());
    });

    const clickDropdown = () => {
      const $dropDownMenu = document.querySelector(".dropdown-menu");
      const filterSelect = document.querySelector(".filter-select");
      const $filterOptions = Array.from(document.querySelectorAll(".filter-option"));
      // const array = Array.from(arrayMedia)

      // console.log(array);
      // console.log($filterOptions);

      $filterOptions.forEach((e) => {
        e.addEventListener('click', () => {
            console.log('on a pratiquement fini !!!')

        })
      })

      $dropDownMenu.addEventListener("click", (e) => {
        e.preventDefault();
        filterSelect.classList.toggle('open')
      })
    };

    clickDropdown();

    function sortedListbox() {
      console.log(medias[0].image)
    } 

    sortedListbox()

    const clickManagerOfHearts = () => {
    const $hearts = document.querySelectorAll(".btn-heart");
      
    $hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      toggleNumberOfLikes(heart);
      });
      heart.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          toggleNumberOfLikes(heart);
        }
      });
    });
      
    function toggleNumberOfLikes(heart) {
      heart.parentElement.classList.toggle("liked");
      const $numberOfLikes = heart.previousElementSibling;
      const $totalNumberOfLikes = document.querySelector(".total-likes");
      let numberOfLikes = parseInt($numberOfLikes.textContent);
      let totalNumberOfLikes = parseInt($totalNumberOfLikes.textContent);
      if (heart.parentElement.classList.contains("liked")) {
      numberOfLikes++;
      totalNumberOfLikes++;
      } else {
      numberOfLikes--;
      totalNumberOfLikes--;
      }
      $numberOfLikes.textContent = numberOfLikes;
      $totalNumberOfLikes.textContent = totalNumberOfLikes;
      }
      };
      clickManagerOfHearts();
      


    const photographerName = photographer.name;
    const modalTitle = document.querySelector(".modal-title");
    modalTitle.innerHTML += photographerName;

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (isValidatedForm()) {
          const form = document.getElementById('form');
          form.style.display = "none";
          const dialogWindows = document.querySelector(".dialog-windows");
          dialogWindows.classList.toggle('sent');
          modalTitle.innerHTML = `Votre message <br />a bien été envoyé à ${photographerName} `;
          function closeSubmit() {
              setTimeout(() => {
                  window.location.reload();
              }, 2000);
          }
          closeSubmit()
      }
      launchAllFunctions();
  })

// ---------------------LIGHTBOX--------------------------

// const mediacardLinks = document.querySelectorAll('.media_card_media');
// const mediaArray = []
//  mediaArray = Array.from(arrayMedia)
// mediaArray.push(mediacardLinks)
// console.log(mediaArray)




  const dialog = document.querySelector('#lightbox')
  // const lightboxContainer = document.querySelector('.lightbox__container')
  const close = document.querySelector('.lightbox__close')
  const mediacardLinks = document.querySelectorAll('.media_card_media a');
  console.log(mediacardLinks);
  const picture = document.createElement('img')
  const player = document.createElement('video')
  player.setAttribute('controls', 'controls');

  
  for(let link of mediacardLinks){
    link.addEventListener('click', function(e) {
      e.preventDefault();
      dialog.classList.toggle('active')
      const lightboxContainer = document.querySelector('.lightbox__container')
      lightboxContainer.classList.toggle('open');
   
    // picture.src = this.href;
    player.src = this.href;

    console.log(e.currentTarget)
      // // 
      // // picture.innerHTML = "picture";
      // lightboxContainer.appendChild(picture)
      lightboxContainer.appendChild(player)
       
      

    })
  }

  close.addEventListener('click', function() {
    dialog.classList.remove('active');
  })


// ---------------------END LIGHTBOX----------------------

  }  
}

const currentPage = document.location.pathname;
const app = new App();

switch (currentPage) {
  case "/index.html":
    app.displayAllPhotographerBadges();
    break;
  case "/photographer.html":
    app.displayPhotographerHomePage();
}
// ---------------------------------CSS-------------------------------------------------------









a {
  text-decoration: none;
  color: inherit;
  font-weight: 600;
}

li {
  list-style: none;
}









.photographer_gallery_sorted_by {
  display: flex;
  align-items: center;
  margin: 2rem 0;
}

.filter-dropdown-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  /* margin: 1rem 3%; */
  /* margin-bottom: 55px; */
  font-weight: 500;
}

.dropdown_menu {
  display: flex;
flex-direction: column;
padding: 0px 10px;
background: #901C1C;
border-radius: 5px;
cursor: pointer;
z-index: 10;
position: absolute;
left: 300px;
}

#sortBy {
  margin-right: 2rem;
  font-size: 1.2rem;
}

.filter-select {
  display: flex;
  flex-direction: column;
}

.filter-dropdown-wrapper span {
  margin-right: 2rem;
  font-size: 1.2rem;
}

.filter-select__trigger {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem 0 1rem;
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  height: 3.5rem;
  line-height: 6rem;
  background: #901c1c;
  border-radius: 5px;
  cursor: pointer;
}

.filter-options-container {
  top: 27.15rem;
  background: #901c1c;
  transition: all 0.5s;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 2;
  border-bottom-left-radius: 0.6rem;
  border-bottom-right-radius: 0.6rem;
  min-width: 168px;
}

.filter-select.open .filter-options-container {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.filter-select.open .filter-select__trigger {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.filter-option {
  position: relative;
  display: block;
  margin: 0 1rem 0;
  font-size: 1.2rem;
  font-weight: 400;
  color: #fff;
  line-height: 3rem;
  cursor: pointer;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.filter-option:hover {
  cursor: pointer;
  text-decoration: underline;
}

.filter-option.selected {
  display: none;
}

.filter-option:not(.selected) {
  border-top: solid 0.1rem #fff;
}

/* -------------------------Lightbox---------------------------------------- */

#lightbox {
  display: none;
  position: fixed;
  border: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.446);
  z-index: 600;
  animation: lightboxIn 0.5s;
}

#lightbox.active {
  display: flex;
}

.lightbox__close,
.lightbox__next,
.lightbox__previous {
  border: none;
  font-size: 2rem;
  color: #d3573c;
  background: transparent;
}

.lightbox__next,
.lightbox__previous {
  position: fixed;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 100%;
  margin-top: -14px;
  z-index: 11;
}

.lightbox__previous {
  right: auto;
  left: 0;
}

.lightbox__close {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 12;
}

#lightbox button {
  opacity: 1;
  cursor: pointer;
  transition: opacity 0.3s;
}

#lightbox button:hover {
  opacity: 0.8;
}

.lightbox__container img {
  max-width: 100%;
  height: auto;
  animation: lightboxIn 0.5s;
}

.lightbox__container video {
  max-width: 100%;
  height: auto;
  animation: lightboxIn 0.5s;
}

.lightbox__container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 50px;
  margin-right: 50px;
  min-height: 100vh;
  z-index: 500;
}

@keyframes lightboxIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
/* -------------------------End of Lightbox-------------------------------- */







.modal header img {
  cursor: pointer;
}


// ------------------------------------------------------------------------------

class Lightbox {

  constructor(array, position) {
      this._array = array;
      this._position = position;
  }

  display() {
      const $header = document.getElementById('header');
      const $main = document.getElementById('main');
      const $lightbox = document.getElementById('lightbox');
      // $lightbox.classList.toggle('open')
      // const $modal = document.getElementById('contact_modal');
      $header.setAttribute('aria-hidden', 'true');
      $main.setAttribute('aria-hidden', 'true');
      $lightbox.setAttribute('aria-hidden', 'false');
      // $modal.setAttribute('aria-hidden', 'true');
      $lightbox.style.display = 'block';
      $lightbox.showModal();
      const media = this._array[this._position];
      
      if (media instanceof Image) {
          const imageCardTemplate = new ImageCard(media);
          imageCardTemplate.createLightboxImageCard();
      } else if (media instanceof Video) {
          const videoCardTemplate = new VideoCard(media)
          videoCardTemplate.createLightboxVideoCard();
      }
      const $title = document.querySelector('.lightbox__container__title');
      const title = media._title;
      $title.textContent = title;
  }


  close() {
      const $header = document.getElementById('header');
      const $main = document.getElementById('main');
      const $lightbox = document.getElementById('lightbox');
      // const $modal = document.getElementById('contact_modal');
      $header.setAttribute('aria-hidden', 'false');
      $main.setAttribute('aria-hidden', 'false');
      $lightbox.setAttribute('aria-hidden', 'true');
      // $modal.setAttribute('aria-hidden', 'true');
      $lightbox.style.display = 'none';
      $lightbox.close();
  }

  next() {
      const $mediaWrapper = document.querySelector('.lightbox__container__media');
      const $titleWrapper = document.querySelector('.lightbox__container__title');
      let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
      let index = this._array.findIndex((media) => media._id === mediaId);
      let indexOfNextMedia = (index !== (this._array.length - 1) ? index + 1 : 0);

      if ($mediaWrapper.firstChild) {
          $mediaWrapper.firstChild.remove();
      }
      $titleWrapper.textContent = '';

      const nextMedia = this._array[indexOfNextMedia];
      if (nextMedia instanceof Image) {
          const imageCardTemplate = new ImageCard(this._array[indexOfNextMedia]);
          imageCardTemplate.createLightboxImageCard();
      } else if (nextMedia instanceof Video) {
          const videoCardTemplate = new VideoCard(this._array[indexOfNextMedia])
          videoCardTemplate.createLightboxVideoCard();
      }
      $titleWrapper.textContent = this._array[indexOfNextMedia]._title;
  }

  previous() {
      const $mediaWrapper = document.querySelector('.lightbox__container');
      const $titleWrapper = document.querySelector('.lightbox__container__title');
      let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
      let index = this._array.findIndex((media) => media._id === mediaId);
      let indexOfPreviousMedia = (index !== 0 ? index - 1 : this._array.length - 1);

      if ($mediaWrapper.firstChild) {
          $mediaWrapper.firstChild.remove();
      }
      $titleWrapper.textContent = '';

      const previousMedia = this._array[indexOfPreviousMedia];
      if (previousMedia instanceof Image) {
          const imageCardTemplate = new ImageCard(this._array[indexOfPreviousMedia]);
          imageCardTemplate.createLightboxImageCard();
      } else if (previousMedia instanceof Video) {
          const videoCardTemplate = new VideoCard(this._array[indexOfPreviousMedia])
          videoCardTemplate.createLightboxVideoCard();
      }
      $titleWrapper.textContent = this._array[indexOfPreviousMedia]._title;
  }

}
















.arrow {
  position: relative;
  height: 0.9rem;
  width: 0.9rem;
}

.arrow::before,
.arrow::after {
  content: "";
  position: absolute;
  bottom: 0px;
  width: 0.15rem;
  height: 100%;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.arrow::before {
  left: -0.05rem;
  transform: rotate(45deg);
  background-color: #fff;
}

.arrow::after {
  left: 0.55rem;
  transform: rotate(-45deg);
  background-color: #fff;
}

.open .arrow::before {
  left: -0.1rem;
  transform: rotate(-45deg);
}

.open .arrow::after {
  left: 0.5rem;
  transform: rotate(45deg);
}























.lightbox__container .img-card,
.lightbox__container .video-card {
  border-radius: 0.2rem;
  cursor: pointer;
  transform: none;
  box-shadow: none;
  transition: none;
  height: 79vh;
}

.lightbox__container .media_card_title {
  width: 100%;
  display: flex;
  justify-content: initial;
  align-items: center;
}

.lightbox__container .media_card_footer {
  padding: 0;
  position: absolute;
  bottom: 28%;
  left: 12.5%;
  align-items: center;
  color: #d3573c;
}

.lightbox__container .media_card_likes {
  display: none;
}

.lightbox__container .slide {
  height: 29vh;
}












.media_card_likes {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-heart {
  border: none;
  background: transparent;
  margin-left: 10px;
  color: #901c1c;
  font-size: 1.5rem;
  margin-top: 2.5px;
  cursor: pointer;
}

.heart-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 60px;
}

/* ---------------------- MEDIA QUERIES -------------------------- */

@media screen and (min-width: 900px) {
  #main,
  .main {
    margin: 0 12rem;
    height: auto;
  }
}

@media screen and (max-width: 800px) {
  #main,
  .main {
    margin: 0 0.9rem;
    height: auto;
  }
  .banner-img img {
    width: 7.5rem;
    height: 9.6875rem;
    border-radius: 50%;
    padding: 1.25rem 0 0.9375rem 0;
    object-fit: fill;
  }
}



@media screen and (max-width: 950px) {
  .photographers_section {
    grid-template-columns: repeat(2, 1fr);
    gap: 60px;
  }
  .media_card_container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 50px;
  }
  .lightbox__container {
    margin-left: 100px;
    margin-right: 100px;
    min-height: 60vh;
  }
}

@media screen and (max-width: 500px) {
  h1.main-title {
    width: 100%;
    justify-content: center;
  }
  .photographers_section {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .media_card_container {
    grid-template-columns: 1fr;
  }
  .dialog-windows {
    width: 90vw;
  }
  .total-likes-container {
    right: 1%;
    font-size: .8rem;
    width: 38%;
    padding: 7px;
}
.heart-counter {
  left: 35px;
  bottom: 8px;
}
.modal-btn-mobile {
  padding: 0.6rem 0.5rem;
  font-size: 1rem;
  bottom: 2.5rem;
}
.media_card_footer {
  font-size: .8em;
}
.media_card_NumberOfLikes {
  font-size: 1.2rem;
}
}
