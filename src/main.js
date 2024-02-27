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
const galleryCard = document.querySelector('.gallery');

//Ініціалізація бібліотеки SimpleLightbox та налаштування опций модального вікна
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let searchQuery = '';
const perPage = 15; // Кількість зображень що повертаються за один запит
let pageNumber = 1;
let totalPages = 0;

fetcImageForm.addEventListener('submit', fetchImage);
btnLoad.addEventListener('click', getNextImages);

async function fetchImage(event) {
  event.preventDefault();
  list.innerHTML = '';
  pageNumber = 1;

  btnLoad.classList.add('is-hidden');

  searchQuery = event.target.elements.search.value.trim();

  // Запит не повинен відправлятися при порожньому рядку введення
  if (searchQuery === '') {
    iziToast.warning({
      message: `The search query cannot be empty`,
      transitionIn: 'bounceInDown',
      theme: 'dark',
      messageColor: '#ffffff',
      messageSize: 16,
      messageLineHeight: 24,
      color: '#FF8C00',
      progressBar: false,
      position: 'topRight',
      maxWidth: 432,
    });
    return;
  }

  loader.classList.remove('is-hidden');

  try {
    const data = await getPictures(searchQuery, perPage, pageNumber);

    // Перевірка наявності зображень відповідних запиту
    if (!data.hits.length) {
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

    // Обчислення кількості сторінок завантаження
    totalPages = Math.ceil(data.totalHits / perPage);

    // Перевірка, чи це остання завантажена сторінка?
    if (pageNumber === totalPages) {
      //  Повідомлення про досягнення кінця результатів запиту / Ініціаналізація бібліотеки iziToast
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
    } else {
      btnLoad.classList.remove('is-hidden');
    }
    // Відображення галереї зображень відповідно запиту
    const markup = markupGallery(data.hits);
    list.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
  } catch (error) {
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
  } finally {
    loader.classList.add('is-hidden');
    event.target.reset();
  }
}

// Функція по кліку на Load more «Завантажити ще»
async function getNextImages(event) {
  btnLoad.classList.add('is-hidden');
  loader.classList.remove('is-hidden');

  pageNumber += 1;

  try {
    const data = await getPictures(searchQuery, perPage, pageNumber);
    // Відображення галереї зображень відповідно запиту
    const markup = markupGallery(data.hits);
    list.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
    btnLoad.classList.remove('is-hidden');

    smoothGalleryScroll();

    // Перевірка, чи це остання завантажена сторінка?
    if (pageNumber === totalPages) {
      //  Повідомлення про досягнення кінця результатів запиту / Ініціаналізація бібліотеки iziToast
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
      btnLoad.classList.add('is-hidden');
    }
  } catch (error) {
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
  } finally {
    loader.classList.add('is-hidden');
  }
}

// Функція плавного скролу галереї
function smoothGalleryScroll() {
  // Функція що повертає обє'єкт, з якого отримуємо значення висоти карточки
  let cardHeight = galleryCard.firstElementChild.getBoundingClientRect().height;
  // Плавний скрол методом window.scrollBy
  window.scrollBy({
    top: cardHeight * 3,
    left: 0,
    behavior: 'smooth',
  });
}

// Скидання дії за дефолтом при натисканні Esc / в Safari за дефолтом Esc переводить браузер з повноекронного у віконний режим
document.addEventListener('keydown', pressKeyEsc);
function pressKeyEsc(event) {
  if (event.code !== 'Escape') {
    return; // користувач клікнув не на Esc
  }
  event.preventDefault();
}
