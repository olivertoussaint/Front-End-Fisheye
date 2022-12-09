class ImageCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    createImageCard() {
        const $mediaCard = document.createElement('article');
        $mediaCard.classList.add('media_card');
        const mediaCard = `
            <div class="media_card__media" tabindex="0" aria-labelledby="media_card__description__title">
                <img  class="img-card" src="assets/images/${this._media.photographerId}/${this._media.image}" alt="${this._media.title}" data-media-id=${this._media.id}>
            </div>
            <div class="media_card_footer">
                <h2 class="media_card_title" class="media_card__description__title">${this._media.title}</h2>
                <p class="media_card__description__popularity"><span class="number_of_likes">${this._media.likes}</span> <span class="heart"><i class="fas fa-heart" tabindex="0" aria-label="Cliquez pour liker le média"></i></span></p>
            </div>
        `;
        $mediaCard.innerHTML = mediaCard
        return $mediaCard;
    }

    createLightboxImageCard() {
        const $mediaWrapper = document.querySelector('.lightbox__container');

        const $img = document.createElement('img');
        $img.setAttribute('src', `assets/images/${this._media.photographerId}/${this._media.image}`);
        $img.setAttribute('alt', this._media.title);
        $img.setAttribute('data-media-id', this._media.id);
        
        $mediaWrapper.appendChild($img);
    }  
}