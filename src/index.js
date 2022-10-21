import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { fetchOptions, fetchGet } from './js/pixabayApi';
import { refs } from './js/refs';
import { observer } from './js/observer';
import { createMarkup } from './js/createMarkup';

export const initialData = {
  totalHits: 0,
  hits: [],
};

export const createGallery = async () => {
  await fetchGet(fetchOptions).then(({ data }) => {
    const { totalHits, hits } = data;
    if (totalHits || hits.length) {
      if (fetchOptions.page === 1) {
        Notify.success(`Hooray! We found ${totalHits} images.`);
      }
      initialData.hits = hits;
      renderGallery(hits);
      observer.observe(document.querySelector('.gallery-item:last-child'));
    } else {
      {
        Notify.info(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    }
  });
};

const onSearch = e => {
  e.preventDefault();

  const {
    elements: { searchQuery },
  } = e.currentTarget;
  fetchOptions.q = searchQuery.value.toLowerCase().trim();
  if (fetchOptions.q === '') {
    refs.gallery.innerHTML = '';
    Notify.failure('There is nothing to search!');
  }
  if (fetchOptions.q.length) {
    refs.gallery.innerHTML = '';
    fetchOptions.page = 1;
    createGallery();
  }
};
const galleryLigthbox = new SimpleLightbox('.gallery a', { captionDelay: 200 });
const renderGallery = hits => {
  refs.gallery.insertAdjacentHTML('beforeend', createMarkup(hits));
  galleryLigthbox.refresh();
};

refs.form.addEventListener('submit', onSearch);
