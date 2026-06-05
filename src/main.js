// import fetchData from "./js/pixabay-api";
// import a from "./js/render-functions";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery,clearGallery, showLoader,hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");
const loadbutton = document.querySelector(".load-button");

let page = 1;
let currentQuery = "";
let totalPages = 0;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const input = form.elements["search-text"];
  const query = input.value.trim();

  if (!query) {
    iziToast.show({
      title: "Warning",
      message: "Please enter a search query",
    });
    return;
  }

  // новий пошук
  page = 1;
  currentQuery = query;
  totalPages = 0;

  clearGallery();
  loadbutton.classList.add("hidden");

  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (!hits.length) {
      iziToast.error({
        title: "No result",
        message: "Sorry, no images found.",
      });
      hideLoader();
      return;
    }

    totalPages = Math.ceil(totalHits / 15);

    createGallery(hits);

    page += 1;

    input.value = "";

    // проверка на конец колекции на первой же странице
    if (page > totalPages) {
  loadbutton.classList.add("hidden");

  iziToast.info({
    message:
      "We're sorry, but you've reached the end of search results.",
  });
} else {
  loadbutton.classList.remove("hidden");
}

  } catch (err) {
    console.error(err);

    iziToast.error({
      title: "Error",
      message: "Something went wrong",
    });

  } finally {
    hideLoader();
  }
});


loadbutton.addEventListener("click", async () => {
  if (page > totalPages) {
    loadbutton.classList.add("hidden");
    iziToast.info({
    message:
      "We're sorry, but you've reached the end of search results.",
  });
    return;
  }
  showLoader();

  try {
    const { hits } = await getImagesByQuery(currentQuery, page);

    createGallery(hits);

    const card = document.querySelector(".gallery-item");
    if (card) {
      const cardHeight = card.getBoundingClientRect().height;

      window.scrollBy({
    top: cardHeight*2,
    
    behavior: "smooth",
});

    }

    page += 1;

    if (page > totalPages) {
      loadbutton.classList.add("hidden");

      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }

  } catch (err) {
    console.error(err);

    iziToast.error({
      title: "Error",
      message: "Failed to load more images",
    });

  } finally {
    hideLoader();
  }
});



