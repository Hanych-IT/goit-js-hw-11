// const BASE_URL = `https://pixabay.com/api/`;
// const API_KEY = '?key=30644100-1887d4be46af407a0dae2ea55';
// const OPTIONS = 'q=image_type=photo&orientation=horizontal&safesearch=true';
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.headers.common['Authorization'] =
  '?key=30644100-1887d4be46af407a0dae2ea55';

export class pixabayApi {
  #page = '1';
  #searchQuery = '';
  #totalHits = '0';
  #per_page = 20;
  #params = {
    params: {
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: 'true',
      per_page: 20,
    },
  };

  async getImages() {
    const urlAXIOS = `&q=${this.#searchQuery}&page=${this.#page}`;
    const { data } = await axios.get(urlAXIOS, this.#params);
    return data;
  }

  set searchQuery(newQuery) {
    this.#q = newQuery;
  }

  get searchQuery() {
    return this.#q;
  }

  incrementPage() {
    this.#page += 1;
  }

  calculateTotalHits(total) {
    this.#totalHits = Math.ceil(total / this.#per_page);
  }

  getIsShowLoadMore() {
    return this.#page < this.#totalHits;
  }
}
