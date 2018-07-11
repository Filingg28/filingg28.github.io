$(document).ready(function () {
    $('.burger').click(function () {
        $('.responsive_menu').toggleClass('active');
        $(this).toggleClass('active_burger');
    });

    $('.resp_a').click(function () {
        $('.responsive_menu').removeClass('active');
        $('.burger').removeClass('active_burger');
    });

    $(window).resize(function () {
        if ($(window).width()>768) {
            $('.responsive_menu').removeClass('active');
            $('.burger').removeClass('active_burger');
        }
    });



    $(".arrow").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

});

