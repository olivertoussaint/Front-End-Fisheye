class VideoCard extends MediaCard {
    constructor(media) {
        super(media);
    }

    createVideoCard() {
        const $mediaCard = document.createElement('article');
        $mediaCard.classList.add('media_card');
        const mediaCard = `
            <div class="media_card__media" tabindex="0" title="${this._media.title}" aria-labelledby="media_card__description__title">
                <video  class="video-card" data-media-id=${this._media.id}>
                    <source src="assets/images/${this._media.photographerId}/${this._media.video}" type="video/mp4">
                </video>
                <div class="play-icon"><i class="far fa-play-circle"></i></div>
            </div>
            <div class="media_card_footer">
                <h2 class="media_card_title" class="media_card__description__title">${this._media.title}</h2>
                <p class="media_card__description__popularity"><span class="number_of_likes">${this._media.likes}</span> <span class="heart"><i class="fas fa-heart" tabindex="0" aria-label="Cliquez pour liker le média"></i></span></p>
            </div>
        `;
        $mediaCard.innerHTML = mediaCard;
        return $mediaCard;
    }

    createLightboxVideoCard() {
        const $mediaWrapper = document.querySelector('.lightbox__container');
        
        const $source = document.createElement('source');
        $source.setAttribute('src', `assets/images/${this._media.photographerId}/${this._media.video}`);
        $source.setAttribute('type', 'video/mp4');

        const $video = document.createElement('video');
        $video.setAttribute('controls', 'controls');
        $video.setAttribute('title', this._media.title);
        $video.setAttribute('aria-label', this._media.title);
        $video.setAttribute('data-media-id', this._media.id);
        $video.appendChild($source);

        $mediaWrapper.appendChild($video);
    }    
}