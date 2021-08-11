const brand = document.querySelector('.brand');
const navlinks = document.querySelectorAll('.navlinks');

$(function () {
    $(document).scroll(function () {
      let $nav = $(".navs-top");
      let $text = $(".links");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $text.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });