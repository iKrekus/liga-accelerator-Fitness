import Swiper from '../vendor/swiper.js';

const jurySlider = new Swiper('.jury__slider', {
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  // loopFillGroupWithBlank: true,
  direction: 'horizontal',
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },

  navigation: {
    nextEl: '.jury__slider-button--next',
    prevEl: '.jury__slider-button--prev',
  },
});

const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
});
