import { createMarkup } from './createMarkup';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', { captionDelay: 250 });

export const markupResult = (array, container) => {
  const markup = createMarkup(array);
  container.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
};
