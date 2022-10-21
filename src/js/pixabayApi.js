import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30644100-1887d4be46af407a0dae2ea55';
const url = `${BASE_URL}?key=${API_KEY}`;

export const fetchOptions = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
};

export const fetchGet = async params =>
  await axios.get(url, { params }).catch(error => console.error(error));
