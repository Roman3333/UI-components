const lazyImages = document.querySelectorAll("img[data-src]");
const loadMap = document.querySelector(".map");
const windowHeigth = document.documentElement.clientHeight;
const lazyImagesPositons = [];

if (lazyImages.length > 1) {
  lazyImages.forEach((img) => {
    if (img.dataset.src) {
      lazyImagesPositons.push(img.getBoundingClientRect().top + scrollY);

      lazyScrollCheck();
    }
  });
}

window.addEventListener("scroll", lazyScroll);

function lazyScroll() {
  if (document.querySelectorAll("img[data-src]").length > 0) {
    lazyScrollCheck();
  }

  if (!loadMap.classList.contains("loaded")) {
    getMap();
  }
}

function lazyScrollCheck() {
  let imgIndex = lazyImagesPositons.findIndex(
    (item) => scrollY > item - windowHeigth - 200
  );

  if (imgIndex >= 0) {
    if (lazyImages[imgIndex].dataset.src) {
      lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
      lazyImages[imgIndex].removeAttribute("data-src");
    }

    delete lazyImagesPositons[imgIndex];
  }
}

function getMap() {
  let loadMapPos = loadMap.getBoundingClientRect().top + scrollY;

  if (scrollY > loadMapPos - windowHeigth) {
    let loadMapUrl = loadMap.dataset.map;
    if (loadMapUrl) {
      loadMap.insertAdjacentHTML(
        "beforeend",
        `<iframe
      src="${loadMapUrl}"
      width="600"
      height="450"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
    ></iframe>`
      );
      loadMap.classList.add("loaded");
    }
  }
}
