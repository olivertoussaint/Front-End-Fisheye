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
