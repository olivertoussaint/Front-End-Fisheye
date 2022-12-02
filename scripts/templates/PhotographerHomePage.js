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

    createSort() {
      const $filter = document.querySelector(".filter");
      const $dropDown = `
      <h3 id="sortBy">Trier par</h3>
      <div class="dropdown-Menu">
          <div class="filter-select">
              <a href="#" role="button" class="filter-select__trigger" aria-controls="filter-options"
                  aria-haspopup="listbox" aria-label="Trier par">
                  <span>Popularité</span>
                  <div class="arrow"></div>
              </a>
              <div class="filter-options-container" role="listbox" id="filter-options">
                  <a href="#" class="filter-option selected" value="popularite" aria-selected="true"
                      aria-label="Trier par popularité" role="option">Popularité</a>
                  <a href="#" class="filter-option" value="date" aria-selected="false"
                      aria-label="Trier par date" role="option">Date</a>
                  <a href="#" class="filter-option" value="titre" aria-selected="false"
                      aria-label="Trier par titre" role="option">Titre</a>
              </div>
          </div>
      </div>
      `
      $filter.innerHTML = $dropDown;

      return $filter;
    }

    createLikes() {
      const $main = document.querySelector(".main");
      const totalLikes = `
      <div class="total-likes-container">
        <div class="total-likes"></div>
        <div class="heart-counter"><i class="fas fa-heart"></i></div>
        <div class="price-container">
        <p class="price">${this._photographer.price}€/jour</p>
        </div>
      </div>   
        `;
  
        $main.innerHTML = totalLikes;
  
        return $main;
      }

    }
   
