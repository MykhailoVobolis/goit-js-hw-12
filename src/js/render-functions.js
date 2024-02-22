// Створення галереї зображень
export function markupGallery(images) {
  return images
    .map(
      i => ` <li class="gallery-item">
          <a class="gallery-link" href="${i.largeImageURL}">
            <img
              class="gallery-image"
              src="${i.webformatURL}"
              alt="${i.tags}"
              width="360"
              height="152"
          /></a>
          <div class="parameters-block">
            <div class="parameter">
              <h2 class="title">Likes</h2>
              <p class="amount">${i.likes}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Views</h2>
              <p class="amount">${i.views}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Comments</h2>
              <p class="amount">${i.comments}</p>
            </div>
            <div class="parameter">
              <h2 class="title">Downloads</h2>
              <p class="amount">${i.downloads}</p>
            </div>
          </div>
        </li>`
    )
    .join('');
}
