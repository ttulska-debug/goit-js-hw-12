import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';

import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
  showEndMessage,
  hideEndMessage,
} from './js/render-functions';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');

let searchQuery = '';
let page = 1;
let totalHits = 0;

const PER_PAGE = 15;

form.addEventListener('submit', handleSearch);

const loadMoreBtn = document.querySelector('.load-more');

loadMoreBtn.addEventListener('click', handleLoadMore);

async function handleSearch(event) {
  event.preventDefault();

  const input = event.currentTarget.elements['search-text'];
  const query = input.value.trim();

  if (query === '') {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
    });

    return;
  }

  searchQuery = query;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  hideEndMessage();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });

      return;
    }

    createGallery(data.hits);

    const loadedImages = data.hits.length;

    if (loadedImages >= totalHits) {
      hideLoadMoreButton();
      showEndMessage();
    } else {
      showLoadMoreButton();
    }
  } catch (error) {
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}

async function handleLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(searchQuery, page);

    createGallery(data.hits);

    const loadedImages = gallery.querySelectorAll('.gallery-item').length;

    if (
      data.hits.length === 0 ||
      loadedImages >= totalHits ||
      data.hits.length < PER_PAGE
    ) {
      hideLoadMoreButton();
      showEndMessage();
    } else {
      showLoadMoreButton();
    }

    scrollGallery();
  } catch (error) {
    page -= 1;

    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });

    showLoadMoreButton();
  } finally {
    hideLoader();
  }
}

function scrollGallery() {
  const galleryItem = document.querySelector('.gallery-item');

  if (!galleryItem) {
    return;
  }

  const { height } = galleryItem.getBoundingClientRect();

  window.scrollBy({
    top: height * 2,
    behavior: 'smooth',
  });
}