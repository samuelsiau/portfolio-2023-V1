gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollToPlugin);

const header = document.querySelector(".nav-wrapper");
const headroom = new Headroom(header);
headroom.init();

const heroHeading = document.querySelector('.animateHeroText'); 
const splitType = new SplitType(heroHeading, {types: 'lines'});

// $('.animateHeroText .line').wrap('<div class="overflow-hidden"></div>');

const homeHeroText = ScrollReveal().reveal('.heroHome .line', {
  distance: '50px',
  interval: 240
});


CustomEase.create("hop", "0.5, 0, 0, 1");

// const homeHeroText = gsap.from('.heroHome .line', {
//   opacity: 0,
//   y: 50,
//   duration: 1.2,
//   ease: "hop",
//   stagger: { amount: 1.2 },
// });

// const animateHomeCTA =  gsap.from('.heroHome .cta',{
//   opacity: 0,
//   y: 50,
//   duration: 1.2,
//   ease: "hop"
// })

// animateHomeCTA.pause();

// function displayCTAFunction() {
//   animateHomeCTA.play();
// }

const animatedCard = ScrollReveal().reveal('.card .card-animate', { 
  distance: '50px',
  interval: 240,
  viewOffset: {
    bottom: 100,
  },
});

var nodeArray = [
  document.querySelector('.about__content'),
  document.querySelector('.career__content')
];

ScrollReveal().reveal(nodeArray,{
  distance: '50px',
})

$('.backtotop1').on('click', function(){
  gsap.to(window, {
    duration: 2.4, 
    scrollTo: 0,
    ease: "hop"
  });
});

$('.backtotop2').on('click', function(){
  gsap.to(window, {
    duration: 2.4, 
    scrollTo: 0,
    ease: "hop"
  });
});

const currentYear = new Date().getFullYear();
$("#currentyear").html(currentYear);


$('.card').on('mouseenter', function(){
  gsap.to('.cursor-eye', {
    opacity: 1,
    duration: 0.2
  })
})

$('.card').on('mouseleave', function(){
  gsap.to('.cursor-eye', {
    opacity: 0,
    duration: 0.2
  })
})

$(document).mousemove(function(e){
  const xpos = e.clientX;
  const ypos = e.clientY;
  const tl = gsap.timeline();
  tl.to('.cursor-eye', {
    x: xpos,
    y: ypos,
    duration: 1,
    ease: "power1.out)"
  })
});

// function moveVenueImage(e) {
//   let xpos = e.clientX;
//   let ypos = e.clientY;
//   const tl = gsap.timeline();
//   tl.to(venueImageWrap, {
//     x: xpos,
//     y: ypos
//   });
// }