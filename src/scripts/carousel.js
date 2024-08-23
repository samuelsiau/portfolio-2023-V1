const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 24,
  grabCursor: true
});