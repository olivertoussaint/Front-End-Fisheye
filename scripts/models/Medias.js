class Media {
  constructor(media, photographer) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._image = media.image;
    this._video = media.video;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;

    this._photographer = photographer
  }

  get photographerId() {
    return this._photographerId;
  }

  get title() {
    return this._title;
  }

  get image() {
    return `/assets/images/${this._photographerId}/${this._image}`;
  }

  get video() {
    return `/assets/images/${this._photographerId}/${this._video}`;
  }

  get likes() {
    return this._likes;
  }

  get date() {
    return this._date;
  }

  get price() {
    return this._price;
  }
}
