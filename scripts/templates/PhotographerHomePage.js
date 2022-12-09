class  PhotographerHomePage {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerHomePage() {
    const photographerHomePage = `
    <div class="photographer-banner-info">
      <h1 class="banner-title">${this._photographer.name}</h1>
        <p class="banner-location">
          <span>${this._photographer.city}, ${this._photographer.country}</span>
        </p>     
        <p>${this._photographer.tagline}</p>
        <p>${this._photographer.price}€/jour</p>
    </div>
    
    <button class="modal-btn" tabindex="0" aria-label="ouvre le formulaire pour contacter ${this._photographer.name}">Contactez-moi</button>  
    <button class="modal-btn-mobile" tabindex="0" aria-label="ouvre le formulaire pour contacter ${this._photographer.name}">Contactez-moi</button>  
    <div class= banner-img>
      <img src="/assets/images/${this._photographer.portrait}" alt="${this._photographer.name}"/>  
    </div>  
 
    
    <div class="photographer_portfolio__sorted_by">
        <p class="legend">Trier par</p>
        <div class="dropdown_menu">
            <div class="listbox" role="button" tabindex="0" aria-label="trier les médias par ..."
                aria-haspopup="true" aria-expanded="false" aria-selected="true">
                <p class="active_option">Popularité</p>
                <i class="fas fa-angle-down"></i>
                <i class="fas fa-angle-up"></i>
            </div>
            <div class="hidden">
                <button class="sorting_option" value="popularity" role="listbox" tabindex="0" aria-label="tri des médias par popularité"
                    aria-selected="true">Popularité</button>
            </div>
            <button class="sorting_option" value="date" role="listbox" tabindex="0" aria-label="tri des médias par date"
                aria-selected="false">Date</button>
            <button class="sorting_option" value="title" role="listbox" tabindex="0" aria-label="tri des médias par titre"
                aria-selected="false">Titre</button>
        </div>
    </div>
  
      <div class="total-likes-container">
      <div class="total-likes"></div>
      <div class="heart-counter"><i class="fas fa-heart"></i></div>
        <div class="price-container">
          <p class="price">${this._photographer.price}€/jour</p>
      </div> 
      </div>   
        `;
        return photographerHomePage;
      }

    }
   
