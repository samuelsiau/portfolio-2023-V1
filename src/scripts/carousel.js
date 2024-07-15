
// const $carousel = $('.carousel').flickity({
//     // options
//     cellAlign: 'center',
//     freeScroll: true,
//     // contain: true,
//     // percentPosition: false,
//     // prevNextButtons: false,
//     pageDots: false
// });


$('.carousel-container').each( function( i, container ) {
    var $container = $( container );
  
    var $carousel = $container.find('.carousel').flickity({
      cellSelector: '.carousel-cell',
      cellAlign: "center",
      freeScroll: true,
      imagesLoaded: true,
      percentPosition: false,
      pageDots: false
    });

    // Flickity instance
    var flkty = $carousel.data('flickity');
    // console.log(flkty.selectedIndex);

    
    
    // // previous
    // var $prev = $container.find('.prev');
    // $prev.on( 'click', function() {
    //     $carousel.flickity('previous', false);
    // });
    // // next
    // var $next = $container.find('.next');
    // $next.on( 'click', function() {
    //     $carousel.flickity('next', false);
    // });

  });