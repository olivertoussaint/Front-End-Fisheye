class Lightbox extends Media {
    constructor(data) {
        super(data);
        this._image = data.image;
        this._video = data.video;
    }
    
    get image() {
        return this._image;
    }

    get video() {
        return this._video;
    }
}