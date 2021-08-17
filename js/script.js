const brand = document.querySelector('.brand');
const navlinks = document.querySelectorAll('.navlinks');

const next = document.querySelector('#next');
const previous = document.querySelector('#previous')
const ilits = document.querySelector('#ilits');
const tedx = document.querySelector('#tedx');
const csb = document.querySelector('#csb');
const ukm = document.querySelector('#ukm');
const ilitsdetails = document.querySelector('#ilitsdetails');
const tedxdetails = document.querySelector('#tedxdetails');
const csbdetails = document.querySelector('#csbdetails');
const ukmdetails = document.querySelector('#ukmdetails');


ilitsdetails.addEventListener("click",function(){
  $('.activestart').addClass('d-none');
  $('.activestart').removeClass('activestart');
  $('.ilits').removeClass('d-none');
  $('.ilits').addClass('activestart');

  gsap.from(".ilits", {
    opacity: 0, 
    y: -100, 
    duration: 1
  });
});

tedxdetails.addEventListener("click",function(){
  $('.activestart').addClass('d-none');
  $('.activestart').removeClass('activestart');
  $('.tedx').removeClass('d-none');
  $('.tedx').addClass('activestart');

  gsap.from(".tedx", {
    opacity: 0, 
    y: -100, 
    duration: 1
  });
});

csbdetails.addEventListener("click",function(){
  $('.activestart').addClass('d-none');
  $('.activestart').removeClass('activestart');
  $('.csb').removeClass('d-none');
  $('.csb').addClass('activestart');

  gsap.from(".csb", {
    opacity: 0, 
    y: -100, 
    duration: 1
  });
});

ukmdetails.addEventListener("click",function(){
  $('.activestart').addClass('d-none');
  $('.activestart').removeClass('activestart');
  $('.ukm').removeClass('d-none');
  $('.ukm').addClass('activestart');

  gsap.from(".ukm", {
    opacity: 0, 
    y: -100, 
    duration: 1
  });
});

next.addEventListener("click",function(){
  if(ilits.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.tedx').removeClass('d-none');
    $('.tedx').addClass('activestart');

    gsap.from(".tedx", {
      opacity: 0, 
      x: -100, 
      duration: 1
    });
  }

  else if(tedx.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.csb').removeClass('d-none');
    $('.csb').addClass('activestart');

    gsap.from(".csb", {
      opacity: 0, 
      x: -100, 
      duration: 1
    });
    
  }

  else if(csb.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.ukm').removeClass('d-none');
    $('.ukm').addClass('activestart');

    gsap.from(".ukm", {
      opacity: 0, 
      x: -100, 
      duration: 1
    });
  }

  else if(ukm.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.ilits').removeClass('d-none');
    $('.ilits').addClass('activestart');

    gsap.from(".ilits", {
      opacity: 0, 
      x: -100, 
      duration: 1
    });
  };
  
});

previous.addEventListener("click",function(){
  if(tedx.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.ilits').removeClass('d-none');
    $('.ilits').addClass('activestart');
    gsap.from(".ilits", {
      opacity: 0, 
      x: 100, 
      duration: 1
    });
  }

  else if(csb.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.tedx').removeClass('d-none');
    $('.tedx').addClass('activestart');
    gsap.from(".tedx", {
      opacity: 0, 
      x: 100, 
      duration: 1
    });
  }

  else if(ukm.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.csb').removeClass('d-none');
    $('.csb').addClass('activestart');
    gsap.from(".csb", {
      opacity: 0, 
      x: 100, 
      duration: 1
    });
  }

  else if(ilits.classList.contains('activestart')){
    $('.activestart').addClass('d-none');
    $('.activestart').removeClass('activestart');
    $('.ukm').removeClass('d-none');
    $('.ukm').addClass('activestart');
    gsap.from(".ukm", {
      opacity: 0, 
      x: 100, 
      duration: 1
    });
  }
});

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

  // gsap.from('#square1',{x: 30, duration: 1,delay:0.6, repeat: -1, yoyo : true});


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

  gsap.from('#asset1',{opacity:0, duration: 1.5, yoyo :true, repeat: -1});

  gsap.from('#Group4',{opacity:0,x:50, duration: 3, yoyo :true, repeat: -1});

  gsap.from('#laravel',{opacity:0,x:-50, duration: 1.5, yoyo :true, repeat: -1});



  var tl = new TimelineMax({
    yoyo:true, 
    repeat:-1
  });
  
  TweenMax.set("#head", {
    rotation:0.01,
    z:0.01,
    transformOrigin:"50% 50%"
  });
  
  tl
  .to("#head", 1.5, {scale:1})
  .to("#head", 1.5, {rotation:"20"});

  var tl2 = new TimelineMax({
    yoyo:true, 
    repeat:-1
  });
  
  TweenMax.set("#square1,#square2,#square3", {
    rotation:0.01,
    z:0.01,
    transformOrigin:"50% 50%"
  });
  
  tl2
  .to("#square1", 1, {scale:1})
  .to("#square2,#square3", 1.5, {rotation:"360"});

  var tl3 = new TimelineMax({
    yoyo:true, 
    repeat:-1
  });
  
  TweenMax.set("#asset2", {
    rotation:0.01,
    z:0.01,
    transformOrigin:"50% 50%"
  });
  
  tl3
  .to("#asset2", 1, {scale:1})
  .to("#asset2", 1, {rotation:"-10"});


  var tl4 = new TimelineMax({
    yoyo:true, 
    repeat:-1
  });
  
  TweenMax.set("#arm", {
    rotation:0.01,
    z:0.01,
    transformOrigin:"0% 100%"
  });
  
  tl4
  .to("#arm", 1.5, {scale:1})
  .to("#arm", 1.5, {rotation:"-10"});


