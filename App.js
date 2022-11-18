class Photographers {
  constructor() {
    this.$photographerSection = document.querySelector(".photographer_section");
    this.photographersApi = new PhotographerApi("./data/photographers.json");
  }

  async init() {
    const photographers = await this.photographersApi.getPhotographers();
    photographers.forEach((photographer) => {
      const Template = new PhotographerListCard(photographer);
      this.$photographerSection.appendChild(Template.createPhotographerCard());
    });
  }
}
const photographers = new Photographers();
photographers.init();
// ----------------------------------------------------------------------

class Photographer {
  constructor() {
    this.$main = document.querySelector(".main");
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
    const PhotographerProfil = new PhotographerCard(photographer);
    const footer = new PhotographerCard(photographer);
    this.$main.appendChild(
      PhotographerProfil.createPhotographer(),
      footer.createLikes()
    );
    const medias = await this.mediasApi.getMedias();
    const arrMedia = medias.filter((value) => value.photographerId === id);
    arrMedia.forEach((media) => {
      const Gallery = new MediaCard(media);
      this.$mediaContainer.appendChild(Gallery.createMedia());
      this.$main.appendChild(this.$mediaContainer);

      // const image = media.image
      // const video = media.video
      // console.log(image || video)

      // const array = [];
      // console.log(array)
      const images = { ...media };
      const onlyMedias = ({ id, title, date, price, ...rest }) => {
        // console.log(id, title, date, price);
        return rest;
      };

      const loopMedias = onlyMedias(images);
      console.log(loopMedias);
    });

   
    document.querySelectorAll('.media_card_container .card-media').forEach(media => {
      console.log(media)

      media.onclick = () =>{
        document.querySelector(".lightbox__container").getElementsByClassName.display = 'block';
        document.querySelector(".lightbox__container .img-card").src = image.getAttribute('src') ;
      }

    })

    // const lightboxContainer = document.querySelector(".lightbox__container");
    // const lightboxNext = document.querySelector(".lightbox__next");
    // const lightboxPrevious = document.querySelector(".lightbox__previous");


    const total = arrMedia.reduce((acc, curr) => {
      acc += curr.likes;
      return acc;
    }, 0);

    const $totalLikes = document.querySelector(".total-likes");
    const $numberOfhearts = document.createElement("i");
    $numberOfhearts.classList.add("fas", "fa-heart");
    $totalLikes.innerHTML += total;
    $totalLikes.appendChild($numberOfhearts);
  }
}

const photographerId = new Photographer();
photographerId.idInit();
