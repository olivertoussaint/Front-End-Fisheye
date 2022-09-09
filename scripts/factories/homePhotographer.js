function homePhotographerFactory(data) {
      const { id, name, portrait, city, tagline, country, price } = data;
  
      const picture = `assets/photographers_ID-photos/${portrait}`;
  
      
      function getDetailedPageDOM() {
        const contact = document.querySelector('.btn-contact');
        contact.innerHTML = `Contactez-moi ${name}`;


        const bannerBody = document.createElement('div');
        const bannerButton = document.createElement('button');
        const bannerImg = document.createElement('div');
        const img = document.createElement('img');

        img.setAttribute("src", picture);
        img.setAttribute("alt", name)
          
        bannerButton.appendChild(bannerBody);
        bannerImg.appendChild(bannerBody)

          return (bannerBody);
      }
  
      return { id, name, picture, city, tagline, country, price, getDetailedPageDOM }
  }
  