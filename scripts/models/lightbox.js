class Lightbox {

    constructor(array, position) {
        this._array = array;
        this._position = position;
    }

    display() {
        const $header = document.getElementById('header');
        const $main = document.getElementById('main');
        const $lightbox = document.getElementById('lightbox');
        // $lightbox.classList.toggle('open')
        // const $modal = document.getElementById('contact_modal');
        $header.setAttribute('aria-hidden', 'true');
        $main.setAttribute('aria-hidden', 'true');
        $lightbox.setAttribute('aria-hidden', 'false');
        // $modal.setAttribute('aria-hidden', 'true');
        $lightbox.style.display = 'block';
        $lightbox.showModal();
        const media = this._array[this._position];
        
        if (media instanceof Image) {
            const imageCardTemplate = new ImageCard(media);
            imageCardTemplate.createLightboxImageCard();
        } else if (media instanceof Video) {
            const videoCardTemplate = new VideoCard(media)
            videoCardTemplate.createLightboxVideoCard();
        }
        const $title = document.querySelector('.lightbox__container__title');
        const title = media._title;
        $title.textContent = title;
    }


    close() {
        const $header = document.getElementById('header');
        const $main = document.getElementById('main');
        const $lightbox = document.getElementById('lightbox');
        // const $modal = document.getElementById('contact_modal');
        $header.setAttribute('aria-hidden', 'false');
        $main.setAttribute('aria-hidden', 'false');
        $lightbox.setAttribute('aria-hidden', 'true');
        // $modal.setAttribute('aria-hidden', 'true');
        $lightbox.style.display = 'none';
        $lightbox.close();
    }

    next() {
        const $mediaWrapper = document.querySelector('.lightbox__container__media');
        const $titleWrapper = document.querySelector('.lightbox__container__title');
        let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
        let index = this._array.findIndex((media) => media._id === mediaId);
        let indexOfNextMedia = (index !== (this._array.length - 1) ? index + 1 : 0);

        if ($mediaWrapper.firstChild) {
            $mediaWrapper.firstChild.remove();
        }
        $titleWrapper.textContent = '';

        const nextMedia = this._array[indexOfNextMedia];
        if (nextMedia instanceof Image) {
            const imageCardTemplate = new ImageCard(this._array[indexOfNextMedia]);
            imageCardTemplate.createLightboxImageCard();
        } else if (nextMedia instanceof Video) {
            const videoCardTemplate = new VideoCard(this._array[indexOfNextMedia])
            videoCardTemplate.createLightboxVideoCard();
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
        if (previousMedia instanceof Image) {
            const imageCardTemplate = new ImageCard(this._array[indexOfPreviousMedia]);
            imageCardTemplate.createLightboxImageCard();
        } else if (previousMedia instanceof Video) {
            const videoCardTemplate = new VideoCard(this._array[indexOfPreviousMedia])
            videoCardTemplate.createLightboxVideoCard();
        }
        $titleWrapper.textContent = this._array[indexOfPreviousMedia]._title;
    }

}
