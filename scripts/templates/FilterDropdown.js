class FilterDropdown {
    constructor(Medias) {
        this.Medias = Medias

        this.$wrapper = document.createElement('div')
        this.$filterDropdownWrapper = document.querySelector('.filter-dropdown-wrapper')
        this.$dropdownMenu = document.querySelector('.dropdown-menu')
    }



    render() {
        const filterDropdown = `
        <h3 id="sortBy">Trier par </h3>
        <div class="filter-select">
            <a href="#" role="button" class="filter-select__trigger" aria-controls="filter-options"
                aria-haspopup="listbox" aria-label="Trier par">
                <span>Popularité</span>
                <div class="arrow"></div>
            </a>
            <div class="filter-options-container" role="listbox" id="filter-options">
                <a href="#" class="filter-option selected" data-value="popularite" aria-selected="true"
                    aria-label="Trier par popularité" role="option">Popularité</a>
                <a href="#" class="filter-option" data-value="date" aria-selected="false"
                    aria-label="Trier par date" role="option">Date</a>
                <a href="#" class="filter-option" data-value="titre" aria-selected="false"
                    aria-label="Trier par titre" role="option">Titre</a>
            </div>
        </div>
        
        `
        this.$wrapper.innerHTML = filterDropdown

        this.$filterDropdownWrapper.appendChild(this.$wrapper)
    }
}