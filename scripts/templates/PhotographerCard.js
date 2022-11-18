class  PhotographerCard{
  constructor(photographer,media) {
    this._photographer = photographer;
    this._media = media;
  }

  createPhotographer() {
    const $section = document.createElement("section");
    $section.classList.add("banner");
    const photographerBanner = `
    <div class="photographer-banner-info">
      <h1 class="banner-title">${this._photographer.name}</h1>
        <p class="banner-location">
          <span>${this._photographer.city}, ${this._photographer.country}</span>
        </p>     
        <p>${this._photographer.tagline}</p>
        <p>${this._photographer.price}€/jour</p>
    </div>
    
    <button class="banner-btn" type="button">Contactez-moi</button>
    <button class="modal-btn-mobile" type="button">Contactez-moi</button>
    
    <div class= banner-img>
      <img
      alt="${this._photographer.name}"
      src="/assets/images/${this._photographer.portrait}"/>  
    </div>   
      `;

      $section.innerHTML = photographerBanner;

      return $section;
    };

    createLikes() {
      const $main = document.querySelector(".main");
      const totalLikes = `
      <div class="total-likes-container">
        <div class="total-likes"></div>
        <div class="price-container">
        <p class="price">${this._photographer.price}€/jour</p>
        </div>
      </div>   
        `;
  
        $main.innerHTML = totalLikes;
  
        return $main;
      }

    }
   
