$(document).ready(function(){
  $('.carousel-container').each(function(i, container){

    var options = {
      freeScroll: true,
      prevNextButtons: false,
    }

    $('.main-carousel').flickity(options);
    var $container = $(container);
    var $carousel = $container.find('.main-carousel');
    var flkty = $carousel.data('flickity');

    var $prev = $container.find('.prev');
    $prev.on('click', function(){
      $carousel.flickity('previous');
    })

    var $next = $container.find('.next');
    $next.on('click', function(){
      $carousel.flickity('next');
    })

    flkty.on( 'cellSelect', function() {
      if (!flkty.cells[ flkty.selectedIndex - 1 ]) {
        $prev.attr('disabled', 'disabled');
        $next.removeAttr('disabled');
      } else if ( !flkty.cells[ flkty.selectedIndex +1 ]) {
        $next.attr('disabled', 'disabled');
        $prev.removeAttr('disabled');
      } else {
        $next.removeAttr('disabled');
        $prev.removeAttr('disabled');
      }
    });
  })


  
});

const swiper = new Swiper('.swiper', {
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 'auto',
  spaceBetween: 24
});