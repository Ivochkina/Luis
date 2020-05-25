$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});

function slideToggle(el) {
    var elem = document.getElementById(el);
    elem.classList.toggle("open");
}

$('a[href^="#"]').click(function(){
    let anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop:  $(anchor).offset().top
    }, 6000);
});