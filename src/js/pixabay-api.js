// Додавання бібліотеки Axios
import axios from 'axios';

// Запит до Pixabay API
export async function getPictures(query, page) {
  const API_KEY = '42417927-02b658e2f5610bf7e034ab0b0';
  const BASE_URL = 'https://pixabay.com/api/';

  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: 15,
      page: page,
    },
  });
  return response.data;
}
