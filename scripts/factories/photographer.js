function photographerFactory(data) {
    const { id, name, portrait, city, tagline, country, price } = data;

    const picture = `assets/photographers_ID-photos/${portrait}`;


    function getUserCardDOM() {
        const cardPhotographer = document.createElement('section');
        const photographerCardHeader = document.createElement('header');
        const photographerCardFooter = document.createElement('div');
        const cardLink = document.createElement('a');
        const cardImg = document.createElement('img');
        const cardTitle = document.createElement('h2');
        const cardBody = document.createElement('div');
        const cardLocation = document.createElement('h3');
        const cardTagline = document.createElement('p');
        const cardPrice = document.createElement('p');

        cardLink.setAttribute("role", "link");
        cardLink.setAttribute("href", `./photographer.html?id=${id}`);
        cardImg.setAttribute("src", picture);
        cardImg.setAttribute("alt", "#");

        cardTitle.textContent = name;
        cardLocation.textContent = city + ', ' + country;
        cardTagline.textContent = tagline;
        cardPrice.textContent = price + "€/jour";

        cardPhotographer.classList.add("photographer-card");
        cardImg.classList.add('card-img');
        cardLink.classList.add('card-photographer-link');
        cardBody.classList.add("card-body");
        cardLocation.classList.add('card-location');
        cardTagline.classList.add('card-tagline');
        cardPrice.classList.add('card-price');
        photographerCardFooter.classList.add('card-footer');

        cardPhotographer.appendChild(photographerCardHeader);
        cardPhotographer.appendChild(cardBody);
        photographerCardHeader.appendChild(cardLink);
        cardLink.appendChild(cardImg);
        cardLink.appendChild(cardTitle);
        cardBody.append(cardLocation);
        cardBody.append(cardTagline);
        cardBody.append(cardPrice);
        cardPhotographer.appendChild(photographerCardFooter);
        
        return (cardPhotographer);
    }

    return { id, name, picture, city, tagline, country, price, getUserCardDOM }
}
