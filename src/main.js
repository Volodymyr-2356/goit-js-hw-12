// import fetchData from "./js/pixabay-api";
// import a from "./js/render-functions";

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery,clearGallery, showLoader,hideLoader } from "./js/render-functions";

const form = document.querySelector(".form");



form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = form.elements['search-text'];
    const query = input.value.trim();
    if (!query) {
        iziToast.show({
            title: 'Warning',
            titleColor: 'red',
            position:'topRight',
            message: 'Please enter a search query'
        });
        return;
    }
  clearGallery();
  
   showLoader()


    

  getImagesByQuery(query)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          title: "No result",
          message: "Sorry, no images found. Try another search.",
          position: "topRight",
        });
        return;
      }
      createGallery(data.hits)
      input.value = "";
    })
    .catch(err => {
      console.error(err);
      iziToast.error({
        title: "Error",
        message: "Something went wrong. Try again later.",
        position:"topRight",
      })
    })
      .finally(() => {
            hideLoader();
    })

});

