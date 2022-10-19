import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '?key=30644100-1887d4be46af407a0dae2ea55';
const url = `${BASE_URL}${API_KEY}`;

export const fetchOptions = {
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
};

export const fetchGet = async params =>
  await axios(url, { params }).catch(error => console.log(error));

// axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] =
//   '?key=30644100-1887d4be46af407a0dae2ea55';

// export class pixabayApi {
//   #page = '1';
//   #searchQuery = '';
//   #totalHits = '0';
//   #hits = [];
//   #per_page = 40;
//   #params = {
//     params: {
//       image_type: 'photo',
//       orientation: 'horizontal',
//       safesearch: 'true',
//       per_page: 20,
//     },
//   };

//   async getImages() {
//     const urlAXIOS = `&q=${this.#searchQuery}&page=${this.#page}`;
//     const { data } = await axios.get(urlAXIOS, this.#params);
//     return data;
//   }

//   set searchQuery(newQuery) {
//     this.#q = newQuery;
//   }

//   get searchQuery() {
//     return this.#q;
//   }

//   incrementPage() {
//     this.#page += 1;
//   }

//   calculateTotalHits(total) {
//     this.#totalHits = Math.ceil(total / this.#per_page);
//   }

//   getIsShowLoadMore() {
//     return this.#page < this.#totalHits;
//   }
// }
