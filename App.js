class App {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      ".photographers_section"
    );
    this.$specificPhotographerWrapper =
      document.querySelector(".photographer_data");
    this._photographerApi = new PhotographerApi("data/photographers.json");
    this._mediaApi = new MediaApi("data/photographers.json");
  }

  async displayHomePage() {
    const photographersData =
      await this._photographerApi.getPhotographersData();

    photographersData
      .map((photographer) => new Photographer(photographer))
      .forEach((photographer) => {
        const Template = new PhotographerCard(photographer);
        this.$photographersWrapper.appendChild(
          Template.createPhotographerCard()
        );
      });
  }

  async displayPhotographerPage() {
    const params = new URL(document.location).searchParams;
    const photographerId = parseInt(params.get("photographer"));

    if (!isNaN(photographerId)) {
      const photographer =
        await this._photographerApi.getPhotographerDataByPhotographerId(
          photographerId
        );
      const photographerPageTemplate = new PhotographerHomePage(photographer);
      this.$specificPhotographerWrapper.innerHTML =
        photographerPageTemplate.createPhotographerHomePage();

      const mediasData = await this._mediaApi.getMediasDataByPhotographerId(
        photographerId
      );
      const mediasSortedByPopularity = mediasData.sort(
        (a, b) => b.likes - a.likes
      );
      const mediasPhotographer = displayMedias(mediasSortedByPopularity);
      createLinksOnMediasCards(mediasPhotographer);

      const form = document.getElementById("form");
      const $stickyWrapper = document.getElementById("sticky_footer");
      const stickyTemplate = new StickyFooter(photographer, mediasData);
      $stickyWrapper.innerHTML = stickyTemplate.createStickyFooter();

      const $modalTitle = document.getElementById("modal-title");
      $modalTitle.innerHTML += photographer.name;

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (isValidatedForm()) {
          const form = document.getElementById("form");
          const modalTitle = document.querySelector(".modal-title");
          form.style.display = "none";
          const dialogWindows = document.querySelector(".dialog-windows");
          dialogWindows.classList.toggle("sent");
          modalTitle.innerHTML = `Votre message <br />a bien été envoyé <br /> à ${photographer.name}`;
          function closeSubmit() {
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
          closeSubmit();
        }
        launchAllFunctions();
      });

      manageClickOnHeartsBehaviour();
      manageLightboxControls(mediasPhotographer);
      manageSortingFunctionality(mediasPhotographer);
    }
  }
}

const displayMedias = (array) => {
  const $mediasWrapper = document.querySelector(".media_card__container");
  $mediasWrapper.innerHTML = "";
  const mediasPhotographer = array
    .map((media) => {
      if (typeof media.image !== "undefined") {
        return new Image(media);
      } else if (typeof media.video !== "undefined") {
        return new Video(media);
      }
      return null;
    })
    .filter((element) => element instanceof Image || element instanceof Video);

  mediasPhotographer.forEach((media) => {
    if (media instanceof Image) {
      const mediaTemplate = new ImageCard(media);
      $mediasWrapper.appendChild(mediaTemplate.createImageCard());
    } else if (media instanceof Video) {
      const mediaTemplate = new MediaCardWidthPlayer(media);
      $mediasWrapper.appendChild(mediaTemplate.createMediaCardWithPlayer());
    }
  });

  return mediasPhotographer;
};

const manageClickOnHeartsBehaviour = () => {
  const $hearts = document.querySelectorAll(".heart");

  $hearts.forEach((heart) => {
    heart.addEventListener("click", () => {
      addOrReduceNumberOfLikes(heart);
    });
    heart.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addOrReduceNumberOfLikes(heart);
      }
    });
  });

  function addOrReduceNumberOfLikes(heart) {
    heart.parentElement.classList.toggle("liked");
    const $numberOfLikes = heart.parentElement.firstChild;
    const $totalNumberOfLikes = document.getElementById(
      "total_number_of_likes"
    );
    let numberOfLikes = parseInt($numberOfLikes.textContent);
    let totalNumberOfLikes = parseInt($totalNumberOfLikes.textContent);
    if (heart.parentElement.classList.contains("liked")) {
      numberOfLikes++;
      totalNumberOfLikes++;
    } else {
      numberOfLikes--;
      totalNumberOfLikes--;
    }
    $numberOfLikes.textContent = numberOfLikes;
    $totalNumberOfLikes.textContent = totalNumberOfLikes;
  }
};

const manageSortingFunctionality = (array) => {
  const $listbox = document.querySelector(".listbox");
  const $angleUp = document.querySelector(".fa-angle-up");
  const $angleDown = document.querySelector(".fa-angle-down");
  const $sortingOptions = Array.from(
    document.querySelectorAll(".sorting_option")
  );
  const $optionsShown = document.querySelectorAll(".dropdown_menu > button");
  let fullyExpandedMenu = false;

  $listbox.addEventListener("click", () => {
    openOrCloseListbox();
  });
  $listbox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      openOrCloseListbox();
    }
  });

  $sortingOptions.forEach((element) => {
    element.addEventListener("click", () => {
      manageListbox(element, array);
    });
    element.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        manageListbox(element, array);
      }
    });
  });

  function openOrCloseListbox() {
    if (fullyExpandedMenu === false) {
      $sortingOptions.forEach((option) => {
        option.style.display = "block";
      });
      fullyExpandedMenu = true;
      $angleUp.style.display = "block";
      $listbox.setAttribute("aria-expanded", "true");
      $optionsShown[0].focus();
    } else {
      $sortingOptions.forEach((option) => {
        option.style.display = "none";
      });
      fullyExpandedMenu = false;
    }
    if ($angleDown !== null) {
      $angleDown.style.display = "none";
    }
  }

  function manageListbox(element, array) {
    $angleDown.style.display = "block";

    switch (element.value) {
      case "popularity":
        array.sort((a, b) => b._likes - a._likes);
        break;
      case "date":
        array.sort((a, b) => new Date(b._date) - new Date(a._date));
        break;
      case "title":
        array.sort((a, b) => a._title.localeCompare(b._title));
        break;
    }

    displayMedias(array);
    manageClickOnHeartsBehaviour();
    createLinksOnMediasCards();

    let $hiddenButton = document.querySelector(".dropdown_menu .hidden button");
    const $activeOption = document.querySelector(".active_option");
    const clickedOptionPosition = $sortingOptions.indexOf(element);
    const clickedOptionValue = $sortingOptions[clickedOptionPosition].innerText;

    $activeOption.innerText = clickedOptionValue;
    $listbox.setAttribute(
      "aria-label",
      `tri des médias par ${clickedOptionValue.toLowerCase()}`
    );
    $listbox.setAttribute("aria-expanded", "false");
    document.querySelector(".dropdown_menu .hidden").appendChild(element);
    document.querySelector(".dropdown_menu").appendChild($hiddenButton);

    $hiddenButton = document.querySelector(".dropdown_menu .hidden button");
    const $optionsShown = document.querySelectorAll(".dropdown_menu > button");

    fullyExpandedMenu = false;
    $angleUp.style.display = "none";
    $hiddenButton.setAttribute("aria-selected", "true");
    $optionsShown.forEach((option) => {
      option.style.display = "none";
      option.setAttribute("aria-selected", "false");
    });
    $listbox.focus();
  }
};

const createLinksOnMediasCards = (array) => {
  const $mediasCards = document.querySelectorAll(".media_card__media");

  $mediasCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      displayLightbox(array, index);
    });
    card.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        displayLightbox(array, index);
      }
    });
  });

  function displayLightbox(array, index) {
    const lightbox = new Lightbox(array, index);
    lightbox.reset();
    lightbox.close();
    lightbox.display();
  }
};

const manageLightboxControls = (array) => {
  const $lightboxCloseButton = document.querySelector(".lightbox__close");
  const $lightboxNextButton = document.querySelector(".lightbox__next");
  const $lightboxPreviousButton = document.querySelector(".lightbox__previous");
  const $mediaWrapper = document.querySelector(".lightbox__container");

  $lightboxCloseButton.addEventListener("click", () => closeLightbox(array));
  $lightboxCloseButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      closeLightbox(array);
    }
  });

  $lightboxNextButton.addEventListener("click", () => nextSlide(array));
  $lightboxNextButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      nextSlide(array);
    }
  });

  $lightboxPreviousButton.addEventListener("click", () => previousSlide(array));
  $lightboxPreviousButton.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      previousSlide(array);
    }
  });

  function closeLightbox(array) {
    let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
    let index = array.findIndex((media) => media._id === mediaId);
    const lightbox = new Lightbox(array, index);
    lightbox.close();
  }

  function nextSlide(array) {
    let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
    let index = array.findIndex((media) => media._id === mediaId);
    const lightbox = new Lightbox(array, index);
    lightbox.next();
  }

  function previousSlide(array) {
    let mediaId = parseInt($mediaWrapper.firstChild.dataset.mediaId);
    let index = array.findIndex((media) => media._id === mediaId);
    const lightbox = new Lightbox(array, index);
    lightbox.previous();
  }
};

const currentPage = document.location.pathname;
const app = new App();
switch (currentPage) {
  case "/":
  case "/fisheye/":
  case "/index.html":
  case "/fisheye/index.html":
    app.displayHomePage();
    break;
  case "/photographer.html":
  case "/fisheye/photographer.html":
    app.displayPhotographerPage();
    break;
}
