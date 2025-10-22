// inclui Swiper via CDN ou pacote
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 18,
  loop: false,
  lazy: { loadPrevNext: true },
  keyboard: { enabled: true, onlyInViewport: true },
  pagination: { el: '.swiper-pagination', clickable: true },
  navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
  breakpoints: {
    700: { slidesPerView: 2 },
    1100: { slidesPerView: 3 }
  },
  a11y: true
});
