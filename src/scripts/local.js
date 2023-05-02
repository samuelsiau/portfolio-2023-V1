// gsap.registerPlugin(CustomEase);
// gsap.registerPlugin(ScrollToPlugin);

const header = document.querySelector(".nav-wrapper");
const headroom = new Headroom(header);
headroom.init();

// const heroHeading = document.querySelector('.animateHeroText'); 
// const splitType = new SplitType(heroHeading, {types: 'word'});

// $('.animateHeroText .line').wrap('<div class="overflow-hidden"></div>');

// const homeHeroText = ScrollReveal().reveal('.heroHome .word', {
//   distance: '50px',
//   interval: 120
// });


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

// const animatedCard = ScrollReveal().reveal('.card .card-animate', { 
//   distance: '50px',
//   interval: 120,
//   viewOffset: {
//     bottom: 100,
//   },
// });

const btnBacktoTop1 = document.querySelector(".backtotop1");
btnBacktoTop1.addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});


const btnBacktoTop2 = document.querySelector(".backtotop2");
btnBacktoTop2.addEventListener("click", function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

const currentYear = new Date().getFullYear();
const currentYearText = document.querySelector("#currentyear");
currentYearText.innerHTML = currentYear;
