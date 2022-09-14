$(function() {
  $(".navbar-menu").click(function(e) {
    e.preventDefault();
    $(".navbar-menu").toggleClass("d-none");
    $(".navbar-close").toggleClass("d-none");
  });

  $(".navbar-close").click(function(e) {
    e.preventDefault();
    $(".navbar-menu").toggleClass("d-none");
    $(".navbar-close").toggleClass("d-none");
  });

  $(".navbar-search").click(function(e) {
    e.preventDefault();
    $(".navbar-search-bar").toggleClass("d-none");
  });

  // 確保圖片都載入後，以免造成剛進入頁面時圖片會被覆蓋
  // 首頁
  $('.artwork').imagesLoaded().progress( function() {
    $('.artwork').masonry(); // 渲染整體畫面
  });

  // 探索頁
  $('.explore').imagesLoaded().progress( function() {
    $('.explore').masonry(); // 渲染整體畫面
  });

  // 藝術品介紹頁
  $('.art-intro').imagesLoaded().progress( function() {
    $('.art-intro').masonry(); // 渲染整體畫面
  });
});