import Lenis from "lenis";

const btnBacktoTop1 = $('.backtotop1');
const btnBacktoTop2 = $('.backtotop2');

const backToTopGSAP = gsap.to(window, {
  duration: 0.2,
  scrollTo: 0,
  ease: "none"
})

btnBacktoTop2.on("click",function(){
  backToTopGSAP.restart();
})

btnBacktoTop1.click(function(){
  backToTopGSAP.restart();
})


const currentYear = new Date().getFullYear();
const currentYearText = document.querySelector("#currentyear");
currentYearText.innerHTML = currentYear;

//
// LENIS
//
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

lenis.on('scroll', (e) => {
  // console.log(e)
})

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)