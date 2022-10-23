import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30644100-1887d4be46af407a0dae2ea55';

export const imgParams = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};

const customAxios = axios.create({
  baseURL: `${BASE_URL}?key=${API_KEY}`,
});

export const getImages = async params => {
  try {
    const result = await customAxios.get('', { params });
    return result;
  } catch {
    Notify.failure(
      "We're sorry, but you've reached the end of search results."
    );
  }
};
