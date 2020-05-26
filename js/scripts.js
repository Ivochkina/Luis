$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['', ' '],

        responsive: {
            0: {
                items: 1
            },

            1000: {
                items: 1
            }
        }
    });
});

function slideToggle(el) {
    var elem = document.getElementById(el);
    elem.classList.toggle("open");
}

$('a[href^="#"]').click(function () {
    let anchor = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(anchor).offset().top
    }, 6000);
});


function explode(){
$(document).ready(function() {
    $("#myModal").modal('show');
});
}
setTimeout(explode, 4000); //10000 это время, через которое нужно запустить функцию (1 секунд = 1000 миллисекунд)