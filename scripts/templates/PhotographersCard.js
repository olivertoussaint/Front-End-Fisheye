class PhotographerListCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const $section = document.createElement('section')
        $section.classList.add('photographer-card')

        const photographerCard = `
            <div class="photographer-card">
                <a class="card-photographer-link" href="photographer.html?id=${this._photographer.id}" title="portfolio de ${this._photographer.name}" aria-label="portfolio de ${this._photographer.name}">
                    <img class="card-img"
                    alt="${this._photographer.name}"
                    src="/assets/images/${this._photographer.portrait}"/>
                    <h2>${this._photographer.name}</h2>
                </a>
            </div>
            <p class="card-location">
                <span>${this._photographer.city}, ${this._photographer.country}</span>
            </p>
            <p class="card-tagline">
                <span>${this._photographer.tagline}</span>
            </p>
            <p class="card-price">
                <span>${this._photographer.price}€/jour</span>
        `
        
        $section.innerHTML = photographerCard
        return $section
    }
  }
  

