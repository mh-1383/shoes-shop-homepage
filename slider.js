document.addEventListener("DOMContentLoaded", () => {
  new Swiper('.main-swiper', {
  pagination: {
    el: '.main-pagination',
    clickable: true,
  },
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
  },
  touchRatio: 1.5,
})
});
