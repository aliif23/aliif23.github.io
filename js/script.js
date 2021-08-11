const brand = document.querySelector('.brand');

$(function () {
    $(document).scroll(function () {
      let $nav = $(".navs-top");
      let $text = $(".links");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      $text.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });