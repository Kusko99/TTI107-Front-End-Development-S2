var carouseWidth = $('.carouse-inner')[0].scrollWidth;
var carWidth = $('.carousel-item').width();

var scrollPosition = 0;

$('.carousel-control-next').on('click', function(){
    scrollPosition = scrollPosition + carWidth;
    $('.carouse-inner').animate({scrollLeft: scrollPosition}, 600);
});


