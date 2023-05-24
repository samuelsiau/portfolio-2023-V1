const btnBacktoTop1 = $('.backtotop1');
const btnBacktoTop2 = $('.backtotop2');

console.log(btnBacktoTop2);
console.log(btnBacktoTop1);

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
