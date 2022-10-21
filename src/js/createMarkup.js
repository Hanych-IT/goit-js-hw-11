export function createMarkup(images) {
  return images
    .map(
      ({
        largeImageURL,
        webformatURL,
        tags,
        likes,
        views,
        comments,
        download,
      }) => {
        `
  <a class="gallery-item" href="${largeImageURL}">
  <div class="photo-card">
    <img class="photo-card__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b> ${likes}
      </p>
      <p class="info-item">
        <b>Views</b> ${views}
      </p>
      <p class="info-item">
        <b>Comments</b> ${comments}
      </p>
      <p class="info-item">
        <b>Downloads</b> ${download}
      </p>
    </div>
    </div>
    </a>`;
      }
    )
    .join('');
}
