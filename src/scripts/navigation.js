const navbar = $('.nav-wrapper');

const showAnim = gsap.from(navbar, { 
  yPercent: -100,
  paused: true,
  duration: 0.3,
  ease: "none"
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
    // if(self.direction === -1) {
    //   showAnim.play();
    // } else {
    //   showAnim.reverse();
    // }
  },
  toggleClass: {className: 'scrolled', targets: navbar}
});