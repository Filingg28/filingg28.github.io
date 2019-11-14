$( document ).ready(function() {
	$('.phone-wrap button').on( "click", function() {
		$('.overlay').fadeIn(200);
		$('.modal-wind-one').fadeIn(200);
	});
	$('.b-modal_close').on( "click", function() {
		$('.overlay').fadeOut(200);
		$('.modal-wind-one').fadeOut(200);
		$('.modal-wind-two').fadeOut(200);
	});
	$('.overlay').on( "click", function() {
		$('.overlay').fadeOut(200);
		$('.modal-wind-one').fadeOut(200);
		$('.modal-wind-two').fadeOut(200);
	});

	$('.who-txt button').on( "click", function() {
		$('.overlay').fadeIn(200);
		$('.modal-wind-two').fadeIn(200);
	});

	 $(".main-menu ul").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
});