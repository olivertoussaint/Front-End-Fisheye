class StickyFooter {
  constructor(photographer, medias) {
    this._photographer = photographer;
    this._medias = medias;
  }

  getTotalLikes() {
    return this._medias.reduce(
      (acc, curr) => acc + curr.likes,
      0
    );
  }

  createStickyFooter() {
    const wrapper = `
            <span class="total-likes">
                <span id="total_number_of_likes">${this.getTotalLikes()}</span> <i class="fas fa-heart" aria-label="likes"></i>
            </span>
            <span class="price-container">
            ${this._photographer.price}€/jour
            </span>
        `;
    return wrapper;
  }
}
