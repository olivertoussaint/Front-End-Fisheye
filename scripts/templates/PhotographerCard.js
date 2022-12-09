class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer;
    }

    createPhotographerCard() {
        const $link = document.createElement('a');
        $link.classList.add('card-photographer-link');
        $link.href = `photographer.html?photographer=${this._photographer.id}`;
        $link.setAttribute('tabindex', '0');
        $link.setAttribute('aria-label', this._photographer.name);
        $link.setAttribute('title', `portfolio de ${this._photographer.name}`)

        const $img = document.createElement('img');
        $img.classList.add('card-img')
        $img.setAttribute('src', this._photographer.portrait);
        $img.setAttribute('loading', "lazy");
        $img.setAttribute('alt', this._photographer.name);

        const $name = document.createElement('h2');
        $name.textContent = this._photographer.name;

        $link.appendChild($img);
        $link.appendChild($name);


        $link.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                window.location.href = `photographer.html?photographer=${this._photographer.id}`;
            }
        });

        const $description = document.createElement('div');
        $description.classList.add('photographer_card_description');

        const $location = document.createElement('p');
        $location.classList.add('card-location');
        $location.textContent = `${this._photographer.city}, ${this._photographer.country}`;

        const $tagline = document.createElement('p');
        $tagline.classList.add('card-tagline');
        $tagline.textContent = this._photographer.tagline;

        const $price = document.createElement('p');
        $price.classList.add('card-price');
        $price.textContent = `${this._photographer.price}€/jour`;

        $description.appendChild($location);
        $description.appendChild($tagline);
        $description.appendChild($price);

        const $articleWrapper = document.createElement('article');
        $article.classList.add('photographer-card');

        $articleWrapper.appendChild($link);
        $articleWrapper.appendChild($description);


        return $article;
    }
}