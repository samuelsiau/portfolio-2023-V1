gsap.registerPlugin(CustomEase);

const header = document.querySelector(".nav-wrapper");
const headroom = new Headroom(header);
headroom.init();

const heroHeading = document.querySelector('.animateHeroText'); 
const splitType = new SplitType(heroHeading, {types: 'lines'});

// $('.animateHeroText .line').wrap('<div class="overflow-hidden"></div>');

const homeHeroText = ScrollReveal().reveal('.heroHome .line', { 
  distance: '50px',
  interval: 240,
  reset: false,
});


// CustomEase.create("hop", "0.5, 0, 0, 1");

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