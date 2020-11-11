$(function () {
    $('.header__btn-menu').on('click', function(){
        $('.menu ul').slideToggle();
        
    }); 
    
    $('.container').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        autoplaySpeed: 2500,
        cssEase: 'linear'

    });
});
$(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
        items: 5,
        margin: 10,
        center: true,
        touchDrag:true,
        loop:true,
        
        responsive:{
            0:{
                items:1
            },
            300:{
                items:5
            },
            600:{
                items:5
            },
            1000:{
                items:5
            }
        }
       
    });
   

    var owl = $('.slider-wrapper');
    owl.owlCarousel();
    $('.prev-btn').on('click',function () {
        owl.trigger('prev.owl.carousel', [300]);
    });
    $('.next-btn').on('click',function () {
        owl.trigger('next.owl.carousel');
    });

    
});

