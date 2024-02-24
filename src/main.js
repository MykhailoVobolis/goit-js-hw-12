// Додавання бібліотеки iziToast
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
// Додавання бібліотеки SimpleLightbox
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { markupGallery } from './js/render-functions.js';
import { getPictures } from './js/pixabay-api.js';

const list = document.querySelector('.gallery');
const fetcImageForm = document.querySelector('form');
const loader = document.querySelector('.loader');
const btnLoad = document.querySelector('.btn-load');

//Ініціалізація бібліотеки SimpleLightbox та налаштування опций модального вікна
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let pageNumber = 1;

fetcImageForm.addEventListener('submit', fetchImage);
btnLoad.addEventListener('click', getNextImages);

let searchQuery = '';

function fetchImage(event) {
  event.preventDefault();
  list.innerHTML = '';

  btnLoad.classList.add('is-hidden');
  loader.classList.remove('is-hidden');

  searchQuery = event.target.elements.search.value.trim();

  getPictures(searchQuery, pageNumber)
    .then(response => {
      if (!response.hits.length) {
        btnLoad.classList.add('is-hidden');
        //  Повідомлення про відсутність зображення відповідно запиту / Ініціаналізація бібліотеки iziToast
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          transitionIn: 'bounceInDown',
          theme: 'dark',
          messageColor: '#ffffff',
          messageSize: 16,
          messageLineHeight: 24,
          color: '#ef4040',
          progressBar: false,
          position: 'topRight',
          maxWidth: 432,
        });
        return;
      }

      // Відображення галереї зображень відповідно запиту
      const markup = markupGallery(response.hits);
      list.insertAdjacentHTML('beforeend', markup);

      lightbox.refresh();

      event.target.reset();

      btnLoad.classList.remove('is-hidden');
    })
    .catch(error => {
      //   Повідомлення про тип помилки
      iziToast.error({
        message: `${error}`,
        transitionIn: 'bounceInDown',
        theme: 'dark',
        messageColor: '#ffffff',
        messageSize: 16,
        messageLineHeight: 24,
        color: '#ef4040',
        progressBar: false,
        position: 'topRight',
        maxWidth: 432,
      });
      btnLoad.classList.add('is-hidden');
    })

    .finally(() => {
      loader.classList.add('is-hidden');
    });
}

// Функція по кліку на Load more «Завантажити ще»
function getNextImages(event) {
  btnLoad.classList.add('is-hidden');
  loader.classList.remove('is-hidden');

  pageNumber += 1;

  getPictures(searchQuery, pageNumber)
    .then(response => {
      if (response.hits.length < 15) {
        //  Повідомлення про відсутність зображення відповідно запиту / Ініціаналізація бібліотеки iziToast
        iziToast.info({
          message: `We're sorry, but you've reached the end of search results.`,
          transitionIn: 'bounceInDown',
          theme: 'dark',
          messageColor: '#ffffff',
          messageSize: 16,
          messageLineHeight: 24,
          color: '#0099FF',
          progressBar: false,
          position: 'topRight',
          maxWidth: 432,
        });

        // Відображення галереї зображень відповідно запиту
        const markup = markupGallery(response.hits);
        list.insertAdjacentHTML('beforeend', markup);

        lightbox.refresh();
        btnLoad.classList.add('is-hidden');
        return;
      }

      // Відображення галереї зображень відповідно запиту
      const markup = markupGallery(response.hits);
      list.insertAdjacentHTML('beforeend', markup);

      lightbox.refresh();
      btnLoad.classList.remove('is-hidden');
    })
    .catch(error => {
      //   Повідомлення про тип помилки
      iziToast.error({
        message: `${error}`,
        transitionIn: 'bounceInDown',
        theme: 'dark',
        messageColor: '#ffffff',
        messageSize: 16,
        messageLineHeight: 24,
        color: '#ef4040',
        progressBar: false,
        position: 'topRight',
        maxWidth: 432,
      });
    })

    .finally(() => {
      loader.classList.add('is-hidden');
    });
}