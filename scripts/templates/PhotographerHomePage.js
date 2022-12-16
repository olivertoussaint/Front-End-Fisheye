class PhotographerHomePage {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerHomePage() {
    const photographerHomePage = `
    <div class="photographer_presentation">
    <div class="photographer_presentation__data">
        <h1>${this._photographer.name}</h1>
        <p class="place">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="tagline">${this._photographer.tagline}</p>
    </div>
    <div class="photographer_presentation__button">
        <button class="modal-btn" tabindex="0">Contactez-moi</button>
        <button class="modal-btn-mobile" tabindex="0">Contactez-moi</button>
    </div>
    <div class="photographer_presentation__picture">
        <img src="assets/images/${this._photographer.portrait}" alt="">
    </div>
</div>
<div class="photographer_portfolio">
    <div class="photographer_portfolio__sorted_by">
        <h3 class="sortBy">Trier par</h3>
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
    <section class="media_card__container"></section>
</div>
<aside class="aside"></aside>
        `;
    return photographerHomePage;
  }
}
