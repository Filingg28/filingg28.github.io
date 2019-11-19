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
});