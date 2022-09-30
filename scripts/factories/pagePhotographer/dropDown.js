function displayFilterMenu() {
  const dropDownMenu = document.querySelector(".dropdown-menu");
      dropDownMenu.addEventListener("click", (e) => {
      const filterSelect = document.querySelector(".filter-select");
      filterSelect.classList.toggle("open");
      console.log(filterSelect);
      if (!e.target.matches('.filter-select__trigger')) {
        let dropdows = document.getElementsByClassName("filter-options-container");
        let i;
        for (i=0; i < dropdows.length; i++) {
          let openDropdown = dropdows[i];
          if (openDropdown.classList.contains('open')) {
            openDropdown.classList.remove('open');
          }    
        }
      }
            
  })
};

displayFilterMenu()