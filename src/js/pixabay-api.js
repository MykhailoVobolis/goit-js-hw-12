// Додавання бібліотеки Axios
import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '42417927-02b658e2f5610bf7e034ab0b0';

// Запит до Pixabay API
export async function getPictures(query, perPage, pageNumber) {
  const response = await axios.get('', {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: pageNumber,
    },
  });
  return response.data;
}
