"use strict";

$(function () {
  $(".navbar-menu").click(function (e) {
    e.preventDefault();
    $(".navbar-menu").toggleClass("d-none");
    $(".navbar-close").toggleClass("d-none");
  });
  $(".navbar-close").click(function (e) {
    e.preventDefault();
    $(".navbar-menu").toggleClass("d-none");
    $(".navbar-close").toggleClass("d-none");
  });
  $(".navbar-search").click(function (e) {
    e.preventDefault();
    $(".navbar-search-bar").toggleClass("d-none");
  });
});
"use strict";

$(function () {
  //Swiper 輪播
  var swiperArtist = new Swiper(".swiper-artist", {
    slidesPerView: 1,
    spaceBetween: 0,
    //多欄
    breakpoints: {
      1200: {
        centeredSlides: true,
        slidesPerView: 3,
        spaceBetween: 24
      }
    },
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    },
    speed: 1000,
    autoplay: {
      disableOnInteraction: false,
      delay: 2500
    }
  }); // imagesLoaded :讓圖片都完整載入後，重新渲染畫面
  // 首頁

  $('.artwork').imagesLoaded().progress(function () {
    $('.artwork').masonry(); // 渲染整個畫面
  }); // 探索頁

  $('.explore').imagesLoaded().progress(function () {
    $('.explore').masonry(); // 渲染整個畫面
  });
});
//# sourceMappingURL=all.js.map
