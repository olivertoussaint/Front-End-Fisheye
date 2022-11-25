class Lightbox {
    constructor(media, array, index){
        this._media = media
        this._array = array
        this._index = index
    }

    display() {
        const $img = this._media.image;
        const $video = this._media.video;
        const $main = document.getElementById('main');
        const $lightbox = document.getElementById('lightbox');
        $main.setAttribute('aria-hidden', 'true');
        $lightbox.setAttribute('aria-hidden', 'false');
        $lightbox.style.display = 'block';

        const media = this._array[this._index];
        
        if (media) {
            const imageCardTemplate = new MediaCard($img);
            imageCardTemplate.createLightboxMediaCard();
        } else {
            const videoCardTemplate = new MediaCard($video);
            videoCardTemplate.createLightboxMediaCard();
        }
        const $title = document.querySelector('.lightbox__container__title');
        const title = media._title;
        $title.textContent = title;
    }

    close() {
        const $main = document.getElementById('main');
        const $lightbox = document.getElementById('lightbox');
        $main.setAttribute('aria-hidden', 'false');
        $lightbox.setAttribute('aria-hidden', 'true');
        $lightbox.style.display = 'none';
        $lightbox.close();
    }

    next() {
        const $mediaWrapper = document.querySelector('.lightbox__container');
        const $titleWrapper = document.querySelector('.lightbox__container__title');
        let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
        let index = this._array.findIndex((media) => media._id === mediaId);
        let indexOfNextMedia = (index !== (this._array.length - 1) ? index + 1 : 0);

        if ($mediaWrapper.firstChild) {
            $mediaWrapper.firstChild.remove();
        }
        $titleWrapper.textContent = '';

        const nextMedia = this._array[indexOfNextMedia];
        if (media) {
            const imageCardTemplate = new MediaCard(this._array[indexOfNextMedia]);
            imageCardTemplate.createLightboxMediaCard();
        } else {
            const videoCardTemplate = new MediaCard(this._array[indexOfNextMedia])
            videoCardTemplate.ccreateLightboxMediaCard();
        }
        $titleWrapper.textContent = this._array[indexOfNextMedia]._title;
    }

    previous() {
        const $mediaWrapper = document.querySelector('.lightbox__container');
        const $titleWrapper = document.querySelector('.lightbox__container__title');
        let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
        let index = this._array.findIndex((media) => media._id === mediaId);
        let indexOfPreviousMedia = (index !== 0 ? index - 1 : this._array.length - 1);

        if ($mediaWrapper.firstChild) {
            $mediaWrapper.firstChild.remove();
        }
        $titleWrapper.textContent = '';

        const previousMedia = this._array[indexOfPreviousMedia];
        if (media) {
            const imageCardTemplate = new MediaCard(this._array[indexOfPreviousMedia]);
            imageCardTemplate.createLightboxMediaCard();
        } else {
            const videoCardTemplate = new MediaCard(this._array[indexOfPreviousMedia])
            videoCardTemplate.createLightboxMediaCard();
        }
        $titleWrapper.textContent = this._array[indexOfPreviousMedia]._title;
    }

}


