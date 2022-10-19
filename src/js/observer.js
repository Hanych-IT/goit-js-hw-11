import { fetchOptions, fetchGet } from './pixabayApi';
import { createGallery, initialData } from '../index';

export const observer = new IntersectionObserver((entries, observer) => {
  const { hits, totalHits } = initialData;
  const lastCard = entries[0];
  if (!lastCard.isIntersecting || hits.length === totalHits) return;
  observer.unobserve(lastCard.target);
  fetchOptions.page++;
  createGallery();
});
