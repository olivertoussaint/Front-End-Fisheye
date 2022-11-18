class MediaCard {
  constructor(media) {
    // this._photographer = photographer;
    this._media = media;
  }
  createMedia() {
    const media = this._media.image;
    const video = this._media.video;
    const $article = document.createElement("article");
    const $mediaContainer = document.createElement("div");
    $mediaContainer.classList.add("media_card_container");
    $article.setAttribute("id", `${this._media.id}`);
    $article.classList.add("media_card");

    const galleryPicture = `
        <div class="card_media">
            <a href="#" role="button" class="card-media"  title ="${this._media.title}">
                <img class="img-card" src="../../assets/images/${this._media.photographerId}/${media}" alt="${this._media.title}" />
            </a>
            <div class="card-media-footer">
                <p class="card-media-title">${this._media.title}</p>
                <div class="card-media-likes">
                    <p class="counter" aria-label="nombre de likes ${this._media.likes}">${this._media.likes}</p>
                    <button class="btn-heart" role="button" aria-label="cliquez sur le coeur tabindex="0">
                        <i class="heart far fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>        
        `;

    const galleryVideo = `
      <div class="card_media">
            <a href="#" role="button" class="video-card"  title ="${this._media.title}">
                <video controls class="video-card" type="video/mp4"> 
                  <source src="../../assets/images/${this._media.photographerId}/${video}"> 
                  </video>
                  
            </a>
          <div class="play-icon"><i class="far fa-play-circle"></i></div>
            <div class="card-media-footer">
                <p class="card-media-title">${this._media.title}</p>
                <div class="card-media-likes">
                    <p class="counter" aria-label="nombre de likes ${this._media.likes}">${this._media.likes}</p>
                    <button role="button" class="btn-heart"  aria-label="cliquez sur le coeur tabindex="0">
                        <i class="heart far fa-heart"></i>
                    </button>
            </div>
            </div>
        </div>
      
      `;
    if (!media) {
      $article.innerHTML = galleryVideo;
    } else {
      $article.innerHTML = galleryPicture;
    }
    return $article;
  }

  createLightboxImgCard() {
    const $mediaWrapper = document.querySelector('.lightbox__container');
    const $img = document.createElement('img');
    $img.setAttribute('src', `../../assets/images/${this._media.photographerId}/${media}`);
    $img.setAttribute('alt', `${this._media.title}`);
    $img.setAttribute('data-media-id', this._media.id);

    $mediaWrapper.appendChild($img);


  }

}
