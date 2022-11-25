class PhotographerListCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const $article = document.createElement('article')
        $article.classList.add('photographer-card')

        const photographerCard = `
            <div class="photographer-card">
                <a class="card-photographer-link" href="photographer.html?id=${this._photographer.id}" title="portfolio de ${this._photographer.name}" aria-label="portfolio de ${this._photographer.name}">
                    <img class="card-img"
                    src="/assets/images/${this._photographer.portrait}"
                    alt="${this._photographer.name}"
                    />
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
        
        $article.innerHTML = photographerCard
        return $article
    }
  }
  

