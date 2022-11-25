class App {
  constructor() {
    this.$photographersSection = document.querySelector(".photographers_section");
    this.photographersApi = new PhotographerApi("./data/photographers.json");
  }

  async init() {
    const photographers = await this.photographersApi.getPhotographers();
    photographers.forEach((photographer) => {
      const Template = new PhotographerListCard(photographer);
      this.$photographersSection.appendChild(Template.createPhotographerCard());
    });
  }
}
const app = new App();
app.init();
// ----------------------------------------------------------------------

class PhotographerPortfolio {
  constructor() {
    this.$main = document.querySelector(".main");
    this.$lightboxContainer = document.createElement('div');
    this.$lightboxContainer.classList.add(".lightbox__container");
    this.$mediaContainer = document.createElement("div");
    this.$totalLikes = document.createElement("div");
    this.$totalLikes.classList.add("total-likes-container");
    this.$mediaContainer.classList.add("media_card_container");
    this.photographersApi = new PhotographerApi("./data/photographers.json");
    this.mediasApi = new MediaApi("./data/photographers.json");
  }

  async idInit() {
    let params = new URLSearchParams(document.location.search);
    let id = Number(params.get("id"));
    const photographers = await this.photographersApi.getPhotographers();
    const photographer = photographers.find((value) => value.id === id);
    const PhotographerProfil = new PhotographerHomePage(photographer);

    const photographerName = photographer.name
    console.log(photographerName)
    const modalTitle = document.querySelector('.modal-title');
     
    modalTitle.innerHTML += photographerName

    const footerPage = new PhotographerHomePage(photographer);
    this.$main.appendChild(
      PhotographerProfil.createPhotographerHomePage(),
      footerPage.createLikes()
    );
    const medias = await this.mediasApi.getMedias();
    const arrMedia = medias.filter((value) => value.photographerId === id);
  //   const severalTypeOfMedia = ({ id, date, price, ...lightboxMedia }) => { 
  //   return lightboxMedia;
  // };
  arrMedia.forEach((media) => {  
      const Gallery = new MediaCard(media);
      this.$mediaContainer.appendChild(Gallery.createMedia());
      this.$main.appendChild(this.$mediaContainer);
     console.log(Gallery)
    });
  
    const total = arrMedia.reduce((acc, curr) => {
      acc += curr.likes;
      return acc;
    }, 0);

    const $totalLikes = document.querySelector(".total-likes");
    const $numberOfhearts = document.createElement("i");
    $numberOfhearts.classList.add("fas", "fa-heart");
    $totalLikes.innerHTML += total;
    $totalLikes.appendChild($numberOfhearts);

    // TODO
    // const linksMedias = (array) => {
    //   const $mediaCards = document.querySelectorAll('.media_card_media');

    //   $mediaCards.forEach((card, index) => {
    //     card.addEventListener('click', () => { 
    //       displayLightbox(array, index);
    //     });
    //     card.addEventListener('keypress', (e) => {
    //       if (e.key === 'Enter') {
    //         displayLightbox(array, index)
    //       }
    //     })
    //   });

    //   function displayLightbox(array, index) {
    //     const lightbox = new Lightbox(array, index);
    //   }

    // }

    const clickManagerOfHearts = () => {
      const $hearts = document.querySelectorAll('.btn-heart');
  
      $hearts.forEach((heart) => {
          heart.addEventListener('click', () => {
            toggleNumberOfLikes(heart);
          });
          heart.addEventListener('keypress', (e) => {
              if (e.key === 'Enter') {
                toggleNumberOfLikes(heart);
              }
          });
      });
  
      function toggleNumberOfLikes(heart) {
          heart.parentElement.classList.toggle('liked');
          const $numberOfLikes = heart.parentElement.firstChild;
          const $totalNumberOfLikes = document.querySelector('.total-likes');
          let numberOfLikes = parseInt($numberOfLikes.textContent);
          let totalNumberOfLikes = parseInt($totalNumberOfLikes.textContent);
          if (heart.parentElement.classList.contains('liked')) {
              numberOfLikes++;
              totalNumberOfLikes++;
          } else {
              numberOfLikes--;
              totalNumberOfLikes--;
          }
          $numberOfLikes.textContent = numberOfLikes;
          $totalNumberOfLikes.textContent = totalNumberOfLikes;
      }
  }
  clickManagerOfHearts();


  }
}

const photographerHomePage = new PhotographerPortfolio();
photographerHomePage.idInit();
