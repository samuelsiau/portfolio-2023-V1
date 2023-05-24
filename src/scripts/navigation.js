const navbar = $('.nav-wrapper');

const showAnim = gsap.from(navbar, { 
  yPercent: -100,
  paused: true,
  duration: 0.3,
  ease: "circ.inOut"
}).progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
  toggleClass: {className: 'scrolled', targets: navbar}
});