class MediaCard {
  constructor(media) {
    this._media = media;
  }
  createMedia() {
    const media = this._media.image;
    const video = this._media.video;
    const $article = document.createElement("article");
    const $mediaContainer = document.createElement("div");
    $mediaContainer.classList.add("media_card_container");
    $article.classList.add("media_card");
    $article.setAttribute("id", `${this._media.id}`);

    const pictureInGallery = `
        <div class="media_card_media">
            <a href="#" role="button"  title ="${this._media.title}">
                <img class="img-card" src="../../assets/images/${this._media.photographerId}/${media}" alt="${this._media.title}" data-media-id=${this._media.id}/>
            </a>
            <div class="media_card_footer">
                <p class="media_card_title">${this._media.title}</p>
                <div class="media_card_likes">
                    <p class="counter" aria-label="nombre de likes ${this._media.likes}">${this._media.likes}</p>
                    <button class="btn-heart" role="button" aria-label="cliquez sur le coeur tabindex="0">
                        <i class="heart far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>        
        `;

    const videoInGallery = `
      <div class="media_card_media">
            <a href="#" role="button" title ="${this._media.title}">
                <video class="video-card" type="video/mp4"> 
                  <source src="../../assets/images/${this._media.photographerId}/${video}">
                </video>
                <div class="play-icon"><i class="far fa-play-circle"></i></div>
            </a>
            <div class="media_card_footer">
                <p class="media_card_title">${this._media.title}</p>
                <div class="media_card_likes">
                    <p class="counter" aria-label="nombre de likes ${this._media.likes}">${this._media.likes}</p>
                    <button role="button" class="btn-heart"  aria-label="cliquez sur le coeur tabindex="0">
                        <i class="heart far fa-heart"></i>
                    </button>
              </div>
            </div>
          </div>
          `;

    if (!media) {
      $article.innerHTML = videoInGallery;
    } else {
      $article.innerHTML = pictureInGallery;
    }
    return $article;
  }

  createLightboxMediaCard() {
    const media = this._media.image;
    const video = this._media.video;
    const dialog = document.getElementById("#lightbox");
    const $mediaWrapper = document.querySelector(".lightbox__container");

    const lightboxImage = `
      <img class="img-card" src="../../assets/images/${this._media.photographerId}/${media}" alt="${this._media.title}" />`;

    const lightboxVideo = `
      <video controls class="video-card" type="video/mp4"> 
        <source src="../../assets/images/${this._media.photographerId}/${video}"> 
      </video>
      <div class="play-icon"><i class="far fa-play-circle"></i></div>
    `;

    if (media) {
      $mediaWrapper.innerHTML = lightboxImage;
    } else {
      $mediaWrapper.innerHTML = lightboxVideo;
    }
    return dialog;
  }
}
