$( document ).ready(function() {

	$('.slider-first').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		responsive: [
			{
				breakpoint: 1105,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
					
				}
			},
			{
				breakpoint: 861,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
					
				}
			},
			{
				breakpoint: 573,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					
				}
			}
		]
	});


	$('.second-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		infinite: true,
		
		responsive: [
			{
				breakpoint: 1105,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2
					
				}
			},
			{
				breakpoint: 931,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
					
				}
			},
			{
				breakpoint: 612,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					
				}
			}
		]
	});

	$('.aks-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		
		responsive: [
			{
				breakpoint: 1105,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
					
				}
			},
			{
				breakpoint: 795,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
					
				}
			}
			
		]
	});

	$('.review-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true
	});

	$('.triger-form').on( "click", function() {
		$('.overlay').fadeIn(200);
		$('.modal-wind-one').fadeIn(200);
	});

	$('.overlay').on( "click", function() {
		$('.overlay').fadeOut(200);
		$('.modal-wind-one').fadeOut(200);
	});
	$('.b-modal_close').on( "click", function() {
		$('.overlay').fadeOut(200);
		$('.modal-wind-one').fadeOut(200);
	});

	 $(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });
	
});