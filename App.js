class Photographers {
  constructor() {
    this.$photographerSection = document.querySelector('.photographer_section')
    this.photographersApi = new PhotographerApi('./data/photographers.json')
  }
  
  async init() {
    const photographers = await this.photographersApi.getPhotographers()
    photographers.forEach(photographer => {
      const Template = new PhotographerListCard(photographer)
      this.$photographerSection.appendChild(Template.createPhotographerCard())
    })
  }
}
// ----------------------------------------------------------------------

class Photographer {
  constructor() {
    this.$main = document.querySelector('.main') 
    this.$mediaContainer = document.createElement('div')
    this.$mediaContainer.classList.add('media_card_container')
    this.photographersApi = new PhotographerApi('./data/photographers.json')
    this.mediasApi = new MediaApi('./data/photographers.json')
  }
  
  async idInit() {
    let params = new URLSearchParams(document.location.search);
    let id = Number(params.get("id"));
    const photographers = await this.photographersApi.getPhotographers()
    console.log(photographers)
    const photographer = photographers.find((value) => value.id === id);
    console.log(photographer)
    
    const PhotographerProfil = new PhotographerCard(photographer)
    this.$main.appendChild(PhotographerProfil.createPhotographer())
    
    
    const medias = await this.mediasApi.getMediaType()
    console.log(medias)
    const arrMedia = medias.filter((value) => value.photographerId === id);
    console.log(arrMedia) 
    
    arrMedia.forEach(media => {
      console.log(media)
      const Gallery = new MediaCard(media)
      this.$mediaContainer.appendChild(Gallery.createMedia())
      this.$main.appendChild(this.$mediaContainer);
    })
  }
  
}

const photographers = new Photographers()
const photographerId = new Photographer()

photographers.init()
photographerId.idInit()