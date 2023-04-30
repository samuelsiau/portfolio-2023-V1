gsap.registerPlugin(CustomEase);
gsap.registerPlugin(ScrollToPlugin);

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

// const animatedCard = ScrollReveal().reveal('.card .card-animate', { 
//   distance: '50px',
//   interval: 120,
//   viewOffset: {
//     bottom: 100,
//   },
// });

// var nodeArray = [
//   document.querySelector('.about__content'),
//   document.querySelector('.career__content')
// ];

// ScrollReveal().reveal(nodeArray,{
//   distance: '50px',
// })

$('.backtotop1').on('click', function(){
  gsap.to(window, {
    duration: 2.4, 
    scrollTo: 0,
    ease: "hop",
    autoKill: true
  });
});

$('.backtotop2').on('click', function(){
  gsap.to(window, {
    duration: 2.4, 
    scrollTo: 0,
    ease: "hop",
    autoKill: true
  });
});


const currentYear = new Date().getFullYear();
$("#currentyear").html(currentYear);

barba.init({
  debug: true,
  transitions: [{
    name: 'opacity-transition',
    sync: true,
    async leave(data) {
      console.log(data.current.container);
      gsap.to(data.current.container, {
        opacity: 0,
        duration: 1
      });
    },
    async enter(data) {
      gsap.from(data.next.container, {
        opacity: 0,
        duration: 1
      });
      scrollToAbout();
    }
  }]
})


barba.hooks.enter(() => {
  window.scrollTo(0, 0);
});

const currentLocation = window.location;
function scrollToAbout(){
  if(currentLocation.hash == "#about") {
    gsap.to(window, {
      duration: 2, 
      scrollTo: {
        y: "#about",
        offsetY: 48,
        ease: "hop",
        autoKill: true
      }
    });
  }
}
scrollToAbout();

$('.goAbout').on('click', function(e){
  e.preventDefault();
  gsap.to(window, {
    duration: 2, 
    scrollTo: {
      y: "#about",
      offsetY: 40,
      ease: "hop",
      autoKill: true
    }
  });
});