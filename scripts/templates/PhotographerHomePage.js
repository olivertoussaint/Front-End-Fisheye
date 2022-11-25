class  PhotographerHomePage {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerHomePage() {
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
    
    <button class="modal-btn" tabindex="0">Contactez-moi</button>  
    <button class="modal-btn-mobile" tabindex="0">Contactez-moi</button>  
    <div class= banner-img>
      <img src="/assets/images/${this._photographer.portrait}" alt="${this._photographer.name}"/>  
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
   
