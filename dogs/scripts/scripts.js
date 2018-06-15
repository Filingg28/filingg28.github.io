$("document").ready(function($) {
// фиксированное меню
    var nav = $('.menu_block');
    var main_block = $('.main_block');
    var $video = $('.video_1');
    var $video2 = $('.video_2');
    var $video3 = $('.video_3');
    var $video4 = $('.video_4');
    var $window = $(window);
    $(window).scroll(function () {

           if ($(this).scrollTop() > 136) {
            nav.removeClass("menu_block");
            nav.addClass("f_nav");
            $('.arrow_up').show();

        } else {
            nav.removeClass("f_nav");
            nav.addClass("menu_block");
               $('.arrow_up').hide();

        }
        //видео при прокрутке

        var $topOfVideo = $video.offset().top;
        var $topOfVideo2 = $video2.offset().top;
        var $topOfVideo3 = $video3.offset().top;
        var $topOfVideo4 = $video4.offset().top;
        var $bottomOfVideo = $video.offset().top + $video.outerHeight();
        var $bottomOfVideo2 = $video2.offset().top + $video2.outerHeight();
        var $bottomOfVideo3 = $video3.offset().top + $video3.outerHeight();
        var $bottomOfVideo4 = $video4.offset().top + $video4.outerHeight();

        var $topOfScreen = $window.scrollTop();
        var $bottomOfScreen = $window.scrollTop() + $window.innerHeight();

        if(($bottomOfScreen > $bottomOfVideo) && ($topOfScreen < $topOfVideo)){
            $video[0].play();
        } else {
            $video[0].pause();
        }
        if(($bottomOfScreen > $bottomOfVideo2) && ($topOfScreen < $topOfVideo2)){
            $video2[0].play();
        } else {
            $video2[0].pause();
        }
        if(($bottomOfScreen > $bottomOfVideo3) && ($topOfScreen < $topOfVideo3)){
            $video3[0].play();
        } else {
            $video3[0].pause();
        }
        if(($bottomOfScreen > $bottomOfVideo4) && ($topOfScreen < $topOfVideo4)){
            $video4[0].play();
        } else {
            $video4[0].pause();
        }
// анимация следов
        if ($(this).scrollTop() > 444) {

                $(".steps_one img:eq(0)").show("fast", function () {
                    $(this).next().show("fast", arguments.callee);
                });
        }
        if ($(this).scrollTop() > 1100) {

            $(".steps_two img:eq(0)").show("fast", function () {
                $(this).next().show("fast", arguments.callee);
            });
        }
        if ($(this).scrollTop() > 1600) {

            $(".steps_three img:eq(0)").show("fast", function () {
                $(this).next().show("fast", arguments.callee);
            });
        }
        if ($(this).scrollTop() > 1700) {

            $(".steps_four img:eq(0)").show("fast", function () {
                $(this).next().show("fast", arguments.callee);
            });
        }


       /* var $scrollTop = $(document).scrollTop();
        var $main_block_top = $('.main_block').offset().top;
        var $about_breed_top = $('.about_breed').offset().top;
        var $our_family_top = $('.our_family').offset().top;
        var $puppies_top = $('.puppies').offset().top;
        var $about_pet_top = $('.about_pet').offset().top;
        var $news_top = $('.news').offset().top;
        var $map_container_top = $('.map_container').offset().top;
        var $bottom_main_block = $('.main_block').offset().top + $('.main_block').outerHeight();
        var $bottom_about_breed = $('.about_breed').offset().top + $('.about_breed').outerHeight();;
        var $bottom_our_family = $('.our_family').offset().top + $('.our_family').outerHeight();
        var $bottom_puppies = $('.puppies').offset().top + $('.puppies').outerHeight();
        var $bottom_about_pet = $('.about_pet').offset().top + $('.about_pet').outerHeight();
        var $bottom_news = $('.news').offset().top + $('.news').outerHeight();
        var $bottom_map_container = $('.map_container').offset().top + $('.map_container').outerHeight();

        if ($scrollTop>$main_block_top && $scrollTop<$bottom_main_block) {
            $('.a_null').addClass('active');
        }
        else {
            $('.a_null').removeClass('active');
        }
        if ($scrollTop>$about_breed_top-300 && $scrollTop<$bottom_about_breed) {
            $('.a_first').addClass('active');
        }
        else {
            $('.a_first').removeClass('active');
        }

        if ($scrollTop>$our_family_top-300 && $scrollTop<$bottom_our_family) {
            $('.a_two').addClass('active');
        }
        else {
            $('.a_two').removeClass('active');
        }
        if ($scrollTop>$puppies_top-300 && $scrollTop<$bottom_puppies) {
            $('.a_three').addClass('active');
        }
        else {
            $('.a_three').removeClass('active');
        }
        if ($scrollTop>$about_pet_top-300 && $scrollTop<$bottom_about_pet) {
            $('.a_four').addClass('active');
        }
        else {
            $('.a_four').removeClass('active');
        }
        if ($scrollTop>$news_top-300 && $scrollTop<$bottom_news) {
            $('.a_five').addClass('active');
        }
        else {
            $('.a_five').removeClass('active');
        }

        if ($scrollTop>=($map_container_top-100) && $scrollTop<=$bottom_map_container) {
            $('.a_six').addClass('active');
        }
        else {
            $('.a_six').removeClass('active');
        }*/

       $('.sections').each(function () {
            var id = $(this).attr('id');
            if($(this).offset().top-100<$(window).scrollTop()) {
                $('.menu .menu_ul li[data-li="#'+id+'"]').addClass('active').siblings().removeClass('active');
            }
       });


    });

// адаптивное меню

    $('.open_menu').click(function () {
        $('.menu_responsive').slideToggle(500);
    });

    $(window).resize(function () {
        if ($(window).width()>610) {
            $('.menu_responsive').removeAttr('style');
        }
    });


    //слайдеры

    $(".slider_family").slick({
        slidesToShow: 4,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 956,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 655,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(".about_slider").slick({

    });

    $(".puppies_slider").slick({
        dots: true
    });
    $(".pet_slider").slick({
        dots: true
    });
    $(".news_slider").slick({

        slidesToShow: 4,
        slidesToScroll: 2,
        dots: true,
        responsive : [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 965,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 652,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Фильтры

    var $all = $(".family_menu .all_dogs");
    var $lady = $(".family_menu .lady");
    var $gent = $(".family_menu .gentlemen");


    $lady.click(function () {
        $(".slider_family .gentlemen").hide();
        $(".slider_family .lady").show();
        $(this).css("font-weight","500");
        $(this).css("border-top","2px solid #ffcc00");
        $all.css("font-weight","normal");
        $all.css("border","none");
        $gent.css("font-weight","normal");
        $gent.css("border","none");
    });

    $all.click(function () {
        $(".slider_family .nova").show();
        $(this).css("font-weight","500");
        $(this).css("border-top","2px solid #ffcc00");
        $lady.css("font-weight","normal");
        $lady.css("border","none");
        $gent.css("font-weight","normal");
        $gent.css("border","none");
    });

    $gent.click(function () {
        $(".slider_family .gentlemen").show();
        $(".slider_family .lady").hide();
        $(this).css("font-weight","500");
        $(this).css("border-top","2px solid #ffcc00");
        $lady.css("font-weight","normal");
        $lady.css("border","none");
        $all.css("font-weight","normal");
        $all.css("border","none");
    });

    //модальные окна

    $('.btn_info').click(function (event) {

        event.preventDefault();

        $('#overlay').fadeIn(400,
            function(){
                $('.about_dog').css('left', '30%')
                    .animate({opacity: 1, top: '15%'}, 200);

                if ($(window).width()<='955') {
                    $('.about_dog').css('left', '20%');
                }

                if ($(window).width()<='730') {
                    $('.about_dog').css('left', '15%');
                }

                if ($(window).width()<='686') {
                    $('.about_dog').css('left', '15%');
                    $('.about_dog').css('width', '400px');
                    $('.photo_dog img').css('width', '400px');


                }
                if ($(window).width()<='500') {
                    $('.about_dog').css('width', '300px');
                    $('.about_dog').css('height', 'auto');
                    $('.photo_dog img').css('width', '300px');
                }
                if ($(window).width()<='367') {
                    $('.about_dog').css('width', '250px');
                    $('.about_dog').css('height', 'auto');
                    $('.photo_dog img').css('width', '250px');
                }

        });

        if ($(this).hasClass("buf_nova")) {
            $('.about_text h3').text("BUFFOBASS NOVA");
        }
        if ($(this).hasClass("buff_nick")) {
            $('.about_text h3').text("BUFFOBASS NICKNACK");
        }
        if ($(this).hasClass("buff_paprika")) {
            $('.about_text h3').text("BUFFOBASS PAPRIKA");
        }
        if ($(this).hasClass("buff_sky")) {
            $('.about_text h3').text("BUFFOBASS TWINKLING SKY");
        }

    });

    $('#modal_close, #overlay').click( function(){
        $('.about_dog').animate({opacity: 0, top: '45%'}, 200,
                function(){
                    $(this).css('left', '120%');
                    $('#overlay').fadeOut(400);
                }
            );
    });

    //скрыть-показать котакты
    $('.watch').click(function () {
        $('.contacts').animate({height: 'hide'}, 500);
    });

    $('.watch_map').click(function () {
        $('.contacts').animate({height: 'show'}, 500);
    });

    //плавное меню
    $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });
    $(".menu_responsive .wrapper ul").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });
    $(".arrow_up").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);

    });




});

// карта

function  initMap() {
    var element = document.getElementById('map');
    var options = {
        zoom: 8,
        center: {
            lat: 55.751244,
            lng: 37.618423
        }
    };

    var myMap = new google.maps.Map(element, options);

    addMarker({lat: 55.751244, lng: 37.618423});
    
    function  addMarker(coordinates) {
        var marker = new google.maps.Marker({
            position: coordinates,
            map: myMap,
            icon: 'image/point.gif'
        });
    }
}




