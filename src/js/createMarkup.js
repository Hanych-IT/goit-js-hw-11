export function createMarkup(images) {
  return images
    .map(({ tags, likes, views, comments, download }) => {
      `<div class="gallery">
  <div class="photo-card">
    <img src="" alt="${tags}" loading="lazy" />
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
</div>
<button type="button" class="load-more">Load more</button>`;
    })
    .join('');
}
