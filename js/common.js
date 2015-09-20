$(document).ready(function() {

	$("#owl-demo").owlCarousel({

		navigationText : false,
		navigation : true, // Show next and prev buttons
		pagination: true,
		singleItem : true,
		items : 1,
		itemsDesktop: false,
		itemsDesktopSmall : false,
		itemsTablet: false,
		itemsMobile : false,

		//Lazy load
		lazyLoad : true,
		lazyFollow : true,
		lazyEffect : "fade"
	});

});

