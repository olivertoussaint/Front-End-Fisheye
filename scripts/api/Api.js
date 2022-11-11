class Api {
    constructor(url) {
        this._url = url
    }
    async getPhotographerData() {
        return fetch(this._url)
        .then(res => res.json())
       .then(res => res.photographers)
       .catch(err => console.log('an error occurs', err))
    }
    async getMedias() {
        return fetch(this._url)
        .then(res => res.json())
       .then(res => res.media)
       .catch(err => console.log('an error occurs', err))
    }
}

class PhotographerApi extends Api {
    constructor(url) {
        super(url)
    }
    async getPhotographers() {
        return await this.getPhotographerData()
    }
}

class MediaApi extends Api {
    constructor(url) {
        super(url)
    }
    async getMediaType() {
        return await this.getMedias()
    }
}