 $(document).ready(function(){

 	//Progressbar
 	 $('.circlechart').circlechart();

 	 //Owl Carousel
 	  var owl = $('.owl-carousel');
			owl.owlCarousel({
		    items:4,
		    loop:true,
		    autoplay:true,
		    autoplayTimeout:5000,
		    autoplayHoverPause:true,
		    responsive:false
		});

	 //Stats Counter UP 
	 $('.counter').counterUp({
	    delay: 10,
	    time: 1000
	});

	 //Isotop For Portfolio
	 // init Isotope
	var $grid = $('.project-filters').isotope({
	  // options
	});
	// filter items on button click
	$('.filters').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	// filter items on button click
	$('.filters').on( 'click', 'li', function() {
		$(this).addClass('active').siblings().removeClass('active');
	});
});



 