function homePhotographerFactory(data) {
  const { id, name, portrait, city, tagline, country, price } = data;

  const picture = `assets/photographers_ID-photos/${portrait}`;

  function getUserCardDOM() {
    const main = document.querySelector('.main');
    const banner = document.createElement('div');
    const bannerBody = document.createElement('div');
    const bannerTitle = document.createElement('h1');
    const bannerLocation = document.createElement('p');
    const bannerTagline = document.createElement('p');
    const bannerButton = document.createElement('button');
    const bannerImage = document.createElement('img');
    const bannerImg   = document.createElement('div');

    const filterSection = document.createElement('section');
    filterSection.classList.add('filter');
    const sort = document.createElement('h3');
    sort.setAttribute("id", "sortBy"); 

    const dropDownMenu = document.createElement('div');
    dropDownMenu.classList.add('dropdown-menu');

    const filterSelect = document.createElement('div');
    filterSelect.classList.add('filter-select');

    const filterLink = document.createElement('a');
    filterLink.classList.add('filter-select__trigger');
    filterLink.setAttribute("href", "#");
    filterLink.setAttribute("role", "button");
    filterLink.setAttribute("aria-controls", "filter-options");
    filterLink.setAttribute("aria-haspopup", "listbox");
    filterLink.setAttribute("aria-label", "Trier par");
    filterLink.setAttribute("aria-expanded", "false");
    const span = document.createElement('span');
    span.textContent = "Popularité";
    
    
    main.setAttribute("aria-hidden", false);
    banner.setAttribute("role", "banner");
    bannerImage.setAttribute("src", picture);
    bannerImage.setAttribute("alt", `${name}`);
    bannerButton.type = "button";
    bannerButton.innerHTML = "contactez-moi";
    
    bannerTitle.textContent = name;
    bannerLocation.textContent = city + ', ' + country;
    bannerTagline.textContent = tagline;
    sort.textContent = "Trier par";

    const arrow = document.createElement('div');
    arrow.classList.add("arrow");

    const filterOptions = document.createElement('div');
    filterOptions.classList.add("filter-options-container");
    filterOptions.setAttribute("role", "listbox");
    filterOptions.setAttribute("id", "filter-options");

    const filterOptionSelected = document.createElement('a');
    filterOptionSelected.classList.add("filter-option");
    filterOptionSelected.classList.add("selected");
    filterOptionSelected.setAttribute("data-value", "popularite");
    filterOptionSelected.setAttribute("aria-selected", "true");
    filterOptionSelected.setAttribute("aria-label", "Trier par popularité");
    filterOptionSelected.setAttribute("role", "option");
    filterOptionSelected.textContent = "Popularité";


    const filterOption1 = document.createElement('a');
    filterOption1.classList.add("filter-option");
    filterOption1.setAttribute("data-value", "Date");
    filterOption1.setAttribute("aria-selected", "false");
    filterOption1.setAttribute("aria-label", "Trier par date");
    filterOption1.setAttribute("role", "option");
    filterOption1.textContent = "Date";
    
    const filterOption2 = document.createElement('a');
    filterOption2.classList.add("filter-option");
    filterOption2.setAttribute("data-value", "Titre");
    filterOption2.setAttribute("aria-selected", "false");
    filterOption2.setAttribute("aria-label", "Trier par titre");
    filterOption2.setAttribute("role", "option");
    filterOption2.textContent = "Titre";

    const cardsMedia = document.createElement('div');
    cardsMedia.classList.add("cards-media-container");

    const cardMediaSection = document.createElement('section');
    cardMediaSection.classList.add("cards-media");

    const cardMediaImg = document.createElement('a');
    cardMediaImg.classList.add("cards-media-img");
    cardMediaImg.setAttribute("role", "button");
    // cardMediaImg.setAttribute("title", `${tagline}`);
    cardMediaImg.setAttribute("aria-describedby", "ouvrir le slider");
    cardMediaImg.setAttribute("href", "#");

    const buttonModal = document.createElement('button');
    buttonModal.classList.add("modal-btn-mobile");
    buttonModal.classList.add("modal-btn");
    buttonModal.textContent = "Contactez-moi";

    const openModal = document.createElement('span');
    openModal.classList.add("sr-only");
    openModal.textContent = "Ouvrir le formulaire";
    banner.classList.add("banner");
    bannerBody.classList.add('banner-body');
    bannerLocation.classList.add("banner-location");
    bannerImg.classList.add('banner-img');
    bannerTitle.classList.add('banner-title');
    bannerTagline.classList.add('banner-tagline');
    bannerButton.classList.add('banner-btn');

    const totalLikesContainer = document.createElement('div');
    totalLikesContainer.classList.add('total-likes-container');
    const totalLikes = document.createElement('div');
    totalLikes.classList.add('total-likes');
    totalLikes.innerHTML = `<i class="fas fa-heart" aria-hidden="true"></i>`;
    const priceContainer = document.createElement('div');
    priceContainer.classList.add('price-container');
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = `€/jour `;


    
    main.appendChild(banner);
    main.appendChild(filterSection);
    main.appendChild(cardsMedia);
    cardsMedia.appendChild(cardMediaSection);
    main.appendChild(buttonModal);
    main.appendChild(totalLikesContainer);
    totalLikesContainer.appendChild(totalLikes);
    totalLikesContainer.appendChild(priceContainer);
    priceContainer.appendChild(price);

    filterSection.appendChild(sort);
    filterSection.appendChild(dropDownMenu);

    dropDownMenu.appendChild(filterSelect);
    filterSelect.appendChild(filterLink);
    filterLink.appendChild(span);
    filterLink.appendChild(arrow);
    filterSelect.appendChild(filterOptions);
    
    filterOptions.appendChild(filterOptionSelected);
    filterOptions.appendChild(filterOption1);
    filterOptions.appendChild(filterOption2);

    cardMediaSection.appendChild(cardMediaImg);

    buttonModal.appendChild(openModal);
    
    banner.appendChild(bannerBody);
    bannerBody.appendChild(bannerTitle);
    bannerBody.appendChild(bannerLocation);
    bannerBody.appendChild(bannerTagline);

    banner.append(bannerButton);
    banner.append(bannerImg);
    bannerImg.append(bannerImage);

    return (main);
  }

  return { id, name, picture, city, tagline, country, price, getUserCardDOM }

  
}