class Aside {
    constructor(photographer, medias) {
        this._photographer = photographer;
        this._medias = medias;
    }

    getTotalLikes() {
        return this._medias.reduce(
            (acc, currentValue) => acc + currentValue.likes, 0
        );
    }

    createAside() {
        const wrapper = `
            <span class="total-likes">
                <span id="total_number_of_likes">${this.getTotalLikes()}</span> <i class="fas fa-heart" aria-label="likes"></i>
            </span>
            <div class="price-container">
            ${this._photographer.price}€/jour
            </div>
        `;
        return wrapper;

    }
}