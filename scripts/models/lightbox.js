class Lightbox {

    constructor(array, index) {
        this._array = array;
        this._index = index;
    }

    display() {
        const $header = document.getElementById('header');
        const $main = document.getElementById('main');
        const $lightbox = document.getElementById('lightbox');
        $header.setAttribute('aria-hidden', 'true');
        $main.setAttribute('aria-hidden', 'true');
        $lightbox.setAttribute('aria-hidden', 'false');
        $lightbox.classList.add('active')
        const media = this._array[this._index];
        console.log(media)
        
        if (media instanceof Image) {
            const imageCardTemplate = new PictureCard(media);
            imageCardTemplate.createLightboxPictureCard();
        } else if (media instanceof Video) {
            const videoCardTemplate = new MediaCardWidthPlayer(media)
            videoCardTemplate.createLightboxMediaCardWidthPlayer();
        }
        const $title = document.querySelector('.lightbox__container__title');
        const title = media._title;
        $title.textContent = title;
    }

    reset() {
        const $mediaWrapper = document.querySelector('.lightbox__container');
        const $titleWrapper = document.querySelector('.lightbox__container__title');
        if ($mediaWrapper.firstChild) {
            $mediaWrapper.firstChild.remove();
        }
        $titleWrapper.textContent = '';
    }

    close() {
        const $lightbox = document.getElementById('lightbox');
        const $header = document.getElementById('header');
        const $main = document.getElementById('main');
        $header.setAttribute('aria-hidden', 'false');
        $main.setAttribute('aria-hidden', 'false');
        $lightbox.setAttribute('aria-hidden', 'true');
        $lightbox.classList.remove('active');
        $lightbox.close();
    }

    next() {
        const $mediaWrapper = document.querySelector('.lightbox__container');
        const $titleWrapper = document.querySelector('.lightbox__container__title');
        let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
        let index = this._array.findIndex((media) => media._id === mediaId);
        let nextSlide = (index !== (this._array.length - 1) ? index + 1 : 0);

        if ($mediaWrapper.firstChild) {
            $mediaWrapper.firstChild.remove();
        }
        $titleWrapper.textContent = '';

        const $nextSlide = this._array[nextSlide];
        if ($nextSlide instanceof Image) {
            const imageCardTemplate = new PictureCard(this._array[nextSlide]);
            imageCardTemplate.createLightboxPictureCard();
        } else if ($nextSlide instanceof Video) {
            const videoCardTemplate = new MediaCardWidthPlayer(this._array[nextSlide])
            videoCardTemplate.createLightboxMediaCardWidthPlayer();
        }
        $titleWrapper.textContent = this._array[nextSlide]._title;
    }

    previous() {
        const $mediaWrapper = document.querySelector('.lightbox__container');
        const $titleWrapper = document.querySelector('.lightbox__container__title');
        let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
        let index = this._array.findIndex((media) => media._id === mediaId);
        let previousSlide = (index !== 0 ? index - 1 : this._array.length - 1);

        if ($mediaWrapper.firstChild) {
            $mediaWrapper.firstChild.remove();
        }
        $titleWrapper.textContent = '';

        const $previousSlide = this._array[previousSlide];
        if ($previousSlide instanceof Image) {
            const imageCardTemplate = new PictureCard(this._array[previousSlide]);
            imageCardTemplate.createLightboxPictureCard();
        } else if ($previousSlide instanceof Video) {
            const videoCardTemplate = new MediaCardWidthPlayer(this._array[previousSlide])
            videoCardTemplate.createLightboxMediaCardWidthPlayer();
        }
        $titleWrapper.textContent = this._array[previousSlide]._title;
    }

}
