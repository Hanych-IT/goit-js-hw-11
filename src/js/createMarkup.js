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
        `<div class="photo-card">
  <a class="photo-card__link" href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" data-source="${largeImageURL}" loading="lazy" />
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
    </a>
  </div>
<button type="button" class="load-more">Load more</button>`;
      }
    )
    .join('');
}
