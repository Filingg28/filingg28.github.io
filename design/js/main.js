$(document).ready(function () {
    $('.link').mousemove(function () {
            $(this).find('a').css("transform", "translateX(70px)");
            $(this).find('a').css("font-family", "'Proxima Nova Regular', sans-serif");
            $(this).find('.red_point').css("transform", "translate(70px, -0.4rem)");
            $(this).find('.line').css("width", "68px");
            $(this).find('.line').css("transform", "translate(0.75rem, -1px)");
    });

    $('.link').mouseout(function () {
        $(this).find('a').css("transform", "translateX(0)");
        $(this).find('a').css("font-family", "'Proxima Nova Thin', sans-serif");
        $(this).find('.red_point').css("transform", "translate(-0.4rem,-0.4rem)");
        $(this).find('.line').css("width", "0");
        $(this).find('.line').css("transform", "translate(0)");
    });

    $('.price_one h3').click(function () {
        $(this).next('.price_list').slideToggle(300 );
        $(this).toggleClass('active_h');
    });





   /* $(window).on("scroll",function () {
        event.preventDefault();
        var bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
        var target = $('.about').offset().top;

           /!* if ($(this).scrollTop()===1) {
                $('body,html').animate({scrollTop: target}, 500);

            }*!/


x
           /!* console.log(bottomOfScreen);
            console.log(target);*!/

    });*/

   $('body').on('mousewheel',function (event) {

       var target = $('.about').offset().top;
        if (event.deltaY<0) {
            $(window).on('scroll',function () {
                if ($(window).scrollTop()===1) {
                    $('body,html').animate({scrollTop: target}, 500);

                } else {
                    $(window).off('scroll');
                }
            });

        } else {
            $(window).off('scroll');
        }

        console.log($(window).scrollTop(), target);


    });




   $('.slider').slick({
     arrows: true
   });

    $('.slider_two').slick({
        arrows: true,
        fade: true,
        cssEase: 'linear',
        speed: 200

    });

   $('.prev_btn').on("click",function () {
       $('.slick-prev').click();
   });

    $('.next_btn').on("click",function () {
        $('.slick-next').click();
    });


    //меню

    $(".link").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    $(".numb_head a").on('click',function () {
        event.preventDefault();
        var contact_form = $('.contactt').offset().top;
        $('body,html').animate({scrollTop: contact_form}, 500);
    });


    $('#contact_form').validate ({

        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 15
            },

            number: {
                required: true,
                minlength: 4,
                maxlength: 13,
                digits: true
            },

            mail: {
                required: true,
                email: true
            },

            message: {
                required: true,
                minlength: 5
            }
        }

    });

    externalLinks();
  /*  $(function() {
        $.scrollify({
            section : ".sec"
        });
    });*/

});


function externalLinks() {
    links = document.getElementsByTagName("a");
    for (i = 0; i < links.length; i++) {
        link = links[i];
        if (link.getAttribute("href") && link.getAttribute("rel") === "external")
            link.target = "_blank";
    }
}