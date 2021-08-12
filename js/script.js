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

  // Anims

  const linebluexxl = document.querySelectorAll('.linebluexxl');

  gsap.from('.linewhitexxl',{x: -30, duration: 1, repeat: -1, yoyo : true});

  gsap.from(linebluexxl,{x: 30, duration: 1, repeat: -1, yoyo : true});

  gsap.from('.linebluexl',{x: 30, duration: 1,delay:0.6, repeat: -1, yoyo : true});

  gsap.from('.linebluelg',{x: 30, duration: 1,delay:0.6, repeat: -1, yoyo : true});

  // gsap.from('#linebluexxl',{opacity:0, duration: .5,delay:1});
  
  gsap.from('.border1',{opacity:0, duration: 1,});

  gsap.from('#row-1',{opacity:0, duration: 1,delay:0.5});

  gsap.from('#row-2',{opacity:0, duration: 1,delay:0.6});

  gsap.from('#row-3',{opacity:0, duration: 1,delay:0.7});

  gsap.from('#row-4',{opacity:0, duration: 1,delay:0.9});

  gsap.from('#row-5',{opacity:0, duration: 1,delay:1.1});

  gsap.from('#row-6',{opacity:0, duration: 1,delay:1.2});

  gsap.from('#row-7',{opacity:0, duration: 1,delay:1.3});

  gsap.from('#row-8',{opacity:0, duration: 1,delay:1.4});

  gsap.from('#row-9',{opacity:0, duration: 1,delay:1.5});

  gsap.from('#row-10',{opacity:0, duration: 1,delay:1.6});

  gsap.from('.bordermd',{ duration : 0.5, width : 0,});

  gsap.from('.bordermd2',{ duration : 0.5, width : 0, delay: 0.5});

  gsap.from('.linewhitemd1',{ duration : 1, x: 20 , repeat:-1, yoyo : true});

  gsap.from('.linewhitemd2',{ duration : 1, x: -15, repeat:-1, yoyo: true});

  gsap.from('.linewhitemd3',{ duration : 1, y: 15, repeat:-1, yoyo: true});

  gsap.from('.linewhitemd4',{ duration : 1, x: 30, repeat:-1, yoyo: true});

  gsap.from('.borderssm',{opacity:0, duration: 1});

