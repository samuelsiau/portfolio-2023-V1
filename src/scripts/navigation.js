const navbar = $('.nav-wrapper');

const showAnim = gsap.from(navbar, { 
  yPercent: -100,
  duration: 0.4,
  ease: "circ.inOut"
});

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
  toggleClass: {className: 'scrolled', targets: navbar}
});