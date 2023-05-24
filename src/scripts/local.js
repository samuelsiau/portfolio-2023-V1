const btnBacktoTop1 = $('.backtotop1');
const btnBacktoTop2 = $('.backtotop2');

console.log(btnBacktoTop2);
console.log(btnBacktoTop1);

const backToTopAnimation = gsap.to(window, {
  duration: 0.2,
  scrollTo: "0",
  ease: "none"
})

btnBacktoTop2.on("click",function(){
  backToTopAnimation.restart();
})

btnBacktoTop1.click(function(){
  backToTopAnimation.restart();
})




const currentYear = new Date().getFullYear();
const currentYearText = document.querySelector("#currentyear");
currentYearText.innerHTML = currentYear;
