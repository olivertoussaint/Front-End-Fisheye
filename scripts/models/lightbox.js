// class Lightbox {
//     constructor( array, index){
//         this._array = array
//         this._index = index
//     }

//     display() {
//         // const $main = document.getElementById('main');
//         const $lightbox = document.getElementById('lightbox');
//         // $main.setAttribute('aria-hidden', 'true');
//         $lightbox.setAttribute('aria-hidden', 'false');
//         $lightbox.style.display = 'block';

//         // const media = this._array[this._index];

//         if (this._image) {
//             const imageCardTemplate = new LightboxCard;
//             imageCardTemplate.createLightboxMediaCard();
//         } else {
//             const videoCardTemplate = new LightboxCard();
//             videoCardTemplate.createLightboxMediaCard();
//         }
//         const $title = document.querySelector('.lightbox__container__title');
//         // const title = media._title;
//         // $title.textContent = title;
//     }

//     close() {
//         const $main = document.getElementById('main');
//         const $lightbox = document.getElementById('lightbox');
//         $main.setAttribute('aria-hidden', 'false');
//         $lightbox.setAttribute('aria-hidden', 'true');
//         $lightbox.style.display = 'none';
//         $lightbox.close();
//     }

//     next() {
//         const $mediaWrapper = document.querySelector('.lightbox__container');
//         const $titleWrapper = document.querySelector('.lightbox__container__title');
//         let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
//         let index = this._array.findIndex((media) => media._id === mediaId);
//         let indexOfNextMedia = (index !== (this._array.length - 1) ? index + 1 : 0);

//         if ($mediaWrapper.firstChild) {
//             $mediaWrapper.firstChild.remove();
//         }
//         $titleWrapper.textContent = '';

//         const nextMedia = this._array[indexOfNextMedia];
//         if (media) {
//             const imageCardTemplate = new MediaCard(this._array[indexOfNextMedia]);
//             imageCardTemplate.createLightboxMediaCard();
//         } else {
//             const videoCardTemplate = new MediaCard(this._array[indexOfNextMedia])
//             videoCardTemplate.ccreateLightboxMediaCard();
//         }
//         $titleWrapper.textContent = this._array[indexOfNextMedia]._title;
//     }

//     previous() {
//         const $mediaWrapper = document.querySelector('.lightbox__container');
//         const $titleWrapper = document.querySelector('.lightbox__container__title');
//         let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
//         let index = this._array.findIndex((media) => media._id === mediaId);
//         let indexOfPreviousMedia = (index !== 0 ? index - 1 : this._array.length - 1);

//         if ($mediaWrapper.firstChild) {
//             $mediaWrapper.firstChild.remove();
//         }
//         $titleWrapper.textContent = '';

//         const media = this._array[indexOfPreviousMedia];
//         if (media) {
//             const imageCardTemplate = new MediaCard(this._array[indexOfPreviousMedia]);
//             imageCardTemplate.createLightboxMediaCard();
//         } else {
//             const videoCardTemplate = new MediaCard(this._array[indexOfPreviousMedia])
//             videoCardTemplate.createLightboxMediaCard();
//         }
//         $titleWrapper.textContent = this._array[indexOfPreviousMedia]._title;
//     }

// }

class Lightbox {
  constructor(media) {
    this.media = media;

    this.$wrapper = document.createElement("dialog");
    this.$wrapper.setAttribute("id", "lightbox");
    this.$mediaWrapper = document.querySelector(".lightbox__container");
  }

  onCloseButton() {
    this.$wrapper
      .querySelector(".lightbox__close")
      .addEventListener(".click", () => {
        this.$wrapper.classList.remove("show");
        this.$wrapper = "";
      });
  }
  createLightboxMediaCard() {
    const media = this._media.image;
    // const video = this._media.video;

    const lightboxImage = `
          <img class="img-card" src="../../assets/images/${this._media.photographerId}/${media}" alt="${this._media.title}" />
          <button role="button" class="lightbox__close" tabindex="0" title="fermer la modale">
        <i class="fas fa-times"></i>
      </button>
          `;

    // const lightboxVideo = `
    //       <video controls class="video-card" type="video/mp4"> 
    //         <source src="../../assets/images/${this._media.photographerId}/${video}"> 
    //       </video>
    //       <div class="play-icon"><i class="far fa-play-circle"></i></div>
    //       <button role="button" class="lightbox__close" tabindex="0" title="fermer la modale">
    //     <i class="fas fa-times"></i>
    //   </button>
    //     `;
    this.$wrapper.innerHTML = lightboxImage;

    this.$mediaWrapper.classList.add("show");
    this.$mediaWrapper.appendChild(this.$wrapper);

    this.onCloseButton();
  }

  render() {
    this.createLightboxMediaCard();
  }
}
