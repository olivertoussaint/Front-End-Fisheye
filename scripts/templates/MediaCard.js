class MediaCard {
  constructor(media) {
    // this._photographer = photographer;
    this._media = media;
  }
  createMedia() {
    const galleryImage = this._media.image;
    const galleryVideo = this._media.video;
    const $article = document.createElement("article");
    const $mediaContainer = document.createElement("div");
    $mediaContainer.classList.add("media_card_container");
    $article.classList.add("media_card");
    const gallery = `
        <div class="card_media">
            <a class="card-media" role="button" title ="${this._media.title}">
                <img src="/assets/images/${this._media.photographerId}/${galleryVideo}" />
            </a>
            <div class="card-media-footer">
                <p class="card-media-title">${this._media.title}</p>
            </div>
            <div class="card-media-likes">
                <p class="counter" aria-label="nombre de likes ${this._media.likes}">${this._media.likes}</p>
                <button class="btn-heart" role="button" aria-label="cliquez sur le coeur tabindex="0">
                    <i class="heart far fa-heart"></i>
                </button>
            </div>
        </div>
        
        `;
    // $mediaContainer.appendChild($article)
    $article.innerHTML = gallery;
    return $article;
  }
}
