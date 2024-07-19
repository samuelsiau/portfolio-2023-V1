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
    // var selectedIndex = flkty.selectedIndex;

    // $carousel.on( 'change.flickity', function( event, index ) {
    //   console.log( 'Slide changed to ' + index )
    // });

    // console.log(flkty)
    
    // var $prev = $container.find('.prev');
    // $prev.on('click', function(){
    //   $carousel.flickity('previous');
    // })

    // var $next = $container.find('.next');
    // $next.on('click', function(){
    //   $carousel.flickity('next');
    // })
  })

});