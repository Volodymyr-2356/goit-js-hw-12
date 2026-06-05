import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");
const loadbutton = document.querySelector(".load-button");

let lightbox;

export function createGallery(images) {
  const markup = images
    .map(img => {
      return `
        <li class="gallery-item">
          <a href="${img.largeImageURL}">
            <img src="${img.webformatURL}" alt="${img.tags}"  />
          </a>

          <ul class="info">
            <li class="stat">
              <span class="label">Likes</span>
              <span class="value">${img.likes}</span>
            </li>

              <li class="stat">
                <span class="label">Views</span>
                <span class="value">${img.views}</span>
              </li>

              <li class="stat">
                <span class="label">Comments</span>
                <span class="value">${img.comments}</span>
              </li>

              <li class="stat">
                <span class="label">Downloads</span>
                <span class="value">${img.downloads}</span>
              </li>
            </ul>
        </li>
      `;
    })
    .join("");
  

    gallery.insertAdjacentHTML("beforeend", markup);
    if (!lightbox) {
    lightbox = new SimpleLightbox(".gallery a");
  } else {
    lightbox.refresh();
  }
    
}

export function clearGallery() {
  gallery.innerHTML = "";
}

export function showLoader()
{
  
  loader.classList.remove("hidden");
}
 
export function hideLoader() {
  loader.classList.add("hidden");
}

export function showLoadMore() {
  loadbutton.classList.remove("hidden");
  

}

export function hideLoadMore() {
  loadbutton.classList.add("hidden");
  
}