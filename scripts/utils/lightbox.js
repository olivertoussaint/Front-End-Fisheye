class Lightbox {


    static init () {
        const links = document.querySelectorAll('a[href$=".jpg"], a[href$=".mp4"]')
        .forEach(link => link.addEventListener('click', e => {
            e.preventDefault()
            new Lightbox(e.currentTarget.getAttribute('href'))
        }))
    }

    /**
     * 
     * @param {string} url URL du média
     */
    constructor(url) {
        const element = this.buildDOM(url)
        document.body.appendChild(element)
    }

    /**
     * 
     * @param {string} url URL du média
     * @return {HTMLElement}
     */
    buildDOM (url) {
        const dom = document.createElement('div')
        dom.classList.add('lightbox')
        dom.innerHTML = `
        <button role="button" class="lightbox__close" tabindex="0" title="fermer la modale">
        <i class="fas fa-times"></i>
      </button>
      <button role="button" class="lightbox__next" tabindex="0" title="suivant">
        <i class="fas fa-chevron-right"></i>
      </button>
      <button role="button" class="lightbox__previous" tabindex="0" title="précédent">
        <i class="fas fa-chevron-left"></i>
      </button>
      <div class="lightbox__container">
        
      </div>
        `
        return dom
    }
}

Lightbox.init()