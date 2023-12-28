$(document).ready(function(){
    $('.rp-slider').slick({
        slide: '.rp-slide',
        autoplay: true,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
    });
  });