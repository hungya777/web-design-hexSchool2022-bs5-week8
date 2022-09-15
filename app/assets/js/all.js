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
});