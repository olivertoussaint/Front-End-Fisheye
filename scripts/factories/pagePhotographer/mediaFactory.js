function mediaPhotographerFactory(data) {
      const { id, photographerId, title, image, video, likes, date, price } = data;
      const picture = `assets/portfolios/${photographerId}/${image} `; 
      const videos = `assets/portfolios/${photographerId}/${video} `; 
  
      console.log(picture);
      console.log(videos);
      
      function getUserCardDOM() {
        const main = document.querySelector('.main');
        const totalLikesContainer = document.createElement('div');
        totalLikesContainer.classList.add("total-likes-container");
        const totalLikes = document.createElement('div');
        totalLikes.classList.add("price-container");
        main.appendChild(totalLikesContainer);
        totalLikesContainer.appendChild(totalLikes);
  
        return (main);
      }

      
  
      return { id, photographerId, title, image, video, likes, date, price, getUserCardDOM }
  
    }