// Запит до Pixabay API
export function getPictures(query) {
  const API_KEY = '42417927-02b658e2f5610bf7e034ab0b0';
  const BASE_URL = 'https://pixabay.com/api/';

  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 200,
  });

  return fetch(`${BASE_URL}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
