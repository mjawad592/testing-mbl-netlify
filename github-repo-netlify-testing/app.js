$(document).ready(function () {

    $('.slider--c1').slick({
        dots: false,
        arrows: true, 
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        variableWidth: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToScroll: 3,
                }
            },
            // {
            //     breakpoint: 1080,
            //     settings: {
            //         slidesToScroll: 3
            //     }
            // }
        ]
    });

});