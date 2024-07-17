$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button class="button primary prev"><svg class="icon"><use xlink:href="#arrow-left-line"></use></svg></button>',
    nextArrow: '<button class="button primary next"><svg class="icon"><use xlink:href="#arrow-right-line"></use></svg></button>'
  });
});