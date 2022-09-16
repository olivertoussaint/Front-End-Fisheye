function homePhotographerFactory(data) {
      const { id, name, portrait, city, tagline, country, price } = data;
  
      const picture = `assets/photographers_ID-photos/${portrait}`;
  
      
      function getDetailedPageDOM() {
        const main = document.querySelector('.main')
        const banner = document.createElement('div');
        const bannerBody = document.createElement('div');
        const bannerTitle = document.createElement('h1');
        const bannerLocation = document.createElement('p');
        const bannerTagline = document.createElement('p');
        const bannerButton = document.createElement('button');
        const bannerImage = document.createElement('img');
        const bannerImg   = document.createElement('div')

        main.setAttribute("aria-hidden", false);
        banner.setAttribute("role", "banner");
        bannerImage.setAttribute("src", picture);
        bannerImage.setAttribute("alt", `${name}`);
        bannerButton.type = "button";
        bannerButton.innerHTML = "contactez-moi";

        bannerTitle.textContent = name;
        bannerLocation.textContent = city + ', ' + country;
        bannerTagline.textContent = tagline;

        banner.classList.add("banner");
        bannerBody.classList.add('banner-body');
        bannerLocation.classList.add("banner-location");
        bannerImg.classList.add('banner-img');
        bannerTitle.classList.add('banner-title');
        bannerTagline.classList.add('banner-tagline');
        bannerButton.classList.add('btn-banner');

        main.appendChild(banner);
        main.appendChild(bannerBody);
        banner.appendChild(bannerBody);
        bannerBody.appendChild(bannerTitle);
        bannerBody.appendChild(bannerLocation);
        bannerBody.appendChild(bannerTagline);
        bannerBody.appendChild(bannerImg);
        bannerImg.append(bannerImage)
        bannerBody.append(bannerButton);
        return (main);
      }
  
      return { id, name, picture, city, tagline, country, price, getDetailedPageDOM }
  }
  