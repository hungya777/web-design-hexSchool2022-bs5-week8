$(function() {
  const artistSwiper = new Swiper(".artist-swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    //多欄
    breakpoints: {
      1200: {
        centeredSlides:true,
        slidesPerView: 3,
        spaceBetween: 24,
      }
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    },
  });

  const artIntroductionSwiper = new Swiper(".art-introduction-swiper", {
    slidesPerView: 2,
    spaceBetween: 24,
    //多欄
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    },
  });
});