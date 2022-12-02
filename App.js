class App {
  constructor() {
    this.$photographersSection = document.querySelector(
      ".photographers_section"
    );
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
    this.$filter = document.querySelector(".filter");
    this.$lightboxContainer = document.createElement("div");
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
    const photographerName = photographer.name;
    const modalTitle = document.querySelector(".modal-title");
    modalTitle.innerHTML += photographerName;
    const footerPage = new PhotographerHomePage(photographer);
    this.$main.appendChild(
      PhotographerProfil.createPhotographerHomePage(),
      footerPage.createLikes()
    );

    const medias = await this.mediasApi.getMedias();
    const arrMedia = medias.filter((value) => value.photographerId === id);
    const DropDown = new PhotographerHomePage(photographer);
    this.$main.appendChild(DropDown.createSort());

    arrMedia.forEach((media) => {
      const Gallery = new MediaCard(media);
      this.$mediaContainer.appendChild(Gallery.createMedia());
      this.$main.appendChild(this.$mediaContainer);
    });

    const total = arrMedia.reduce((acc, curr) => {
      acc += curr.likes;
      return acc;
    }, 0);

    const $totalLikes = document.querySelector(".total-likes");
    $totalLikes.innerHTML += total;

    // TODO
    
    const $lightboxLinks = document.querySelectorAll(".media_card_media");
    $lightboxLinks.forEach((link) => {
      const lightboxContainer = document.querySelector(".lightbox__container");
      const lightbox = document.getElementById("lightbox");
      const playerCard = document.querySelector(".video-card");
      const playIcon = document.querySelector(".play-icon");
      const lightboxClose = document.querySelector(".lightbox__close");
      // const mediaCardLikes = document.querySelector(".media_card_likes");
      // const mediaCardTitle = document.querySelector(".media_card_title");
      const lightboxMediaLink = link;
      
      lightboxMediaLink.firstElementChild.addEventListener("click", () => {
        lightbox.classList.add("show");
        lightboxMediaLink.classList.remove('media_card_media')
        lightboxMediaLink.classList.add('slide')
        lightboxContainer.classList.add("no-effect");
        playerCard.setAttribute("controls", "controls");
        playIcon.style.display = "none";
        // mediaCardLikes.style.display = "none";
        lightboxContainer.appendChild(lightboxMediaLink);
      });

      lightboxMediaLink.firstElementChild.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          lightbox.classList.add("show");
          lightboxContainer.classList.add("no-effect");
          playerCard.setAttribute("controls", "controls");
          playIcon.style.display = "none";
          lightboxContainer.appendChild(lightboxMediaLink);
        }
      });

    });

    

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

    //-----------------------------------------------------------

    const clickDropdown = () => {
      const $dropDownMenu = document.querySelector(".dropdown-Menu");
      const filterSelect = document.querySelector(".filter-select");
      const $filterOptions = Array.from(document.querySelectorAll(".filter-option"));
      const array = Array.from(arrMedia)
      console.log(...array);
      console.log($filterOptions);

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



   //------------------------------------------------------------
    
   
  }
}

const photographerHomePage = new PhotographerPortfolio();
photographerHomePage.idInit();
