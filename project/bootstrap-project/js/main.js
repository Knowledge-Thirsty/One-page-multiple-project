$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });
//Scroll Magic

// init controller
var controller = new ScrollMagic.Controller();

	
/*===========================================================================================================
	Service Section
============================================================================================================*/
// build scene
var ourScene1 = new ScrollMagic.Scene({
	triggerElement: "#service",
	duration:'150%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".serviceLeft", "serviceLeftScroll")
	.addTo(controller);

	// build scene
var ourScene2 = new ScrollMagic.Scene({
	triggerElement: "#service",
	duration:'150%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".serviceUp", "serviceUpScroll")
	.addTo(controller);

	// build scene
var ourScene3 = new ScrollMagic.Scene({
	triggerElement: "#service",
	duration:'150%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".serviceRight", "serviceRightScroll")
	.addTo(controller);
/*===========================================================================================================
	About Section
============================================================================================================*/
// build scene
var ourScene4 = new ScrollMagic.Scene({
	triggerElement: "#about",
	duration:'100%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".aboutTitle", "aboutTitleBottomScroll")
	.addTo(controller);

	// build scene
var ourScene5 = new ScrollMagic.Scene({
	triggerElement: "#about",
	duration:'150%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".aboutImage", "aboutImageFade")
	.addTo(controller);

	// build scene
var ourScene6 = new ScrollMagic.Scene({
	triggerElement: ".content-wrapper",
	duration:'100%',
	triggerHook: "onLeave"
})
	// trigger animation by adding a css class
	.setClassToggle(".aboutImageContent", "aboutImageContentScroll")
	.addTo(controller);


/*===========================================================================================================
	Team Section
============================================================================================================*/
// build scene
var ourScene7 = new ScrollMagic.Scene({
	triggerElement: "#team",
	duration:'100%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".teamTitle", "teamTitleScroll")
	.addTo(controller);


// build scene
var ourScene8 = new ScrollMagic.Scene({
	triggerElement: "#team",
	duration:'350%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".teamSlide", "teamSlideScroll")
	.addTo(controller);


/*===========================================================================================================
	Portfolio Section
============================================================================================================*/

// build scene
var ourScene9 = new ScrollMagic.Scene({
	triggerElement: "#portfolio",
	duration:'100%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".portfolioTitle", "portfolioTitleScroll")
	.addTo(controller);

// build scene
var ourScene9 = new ScrollMagic.Scene({
	triggerElement: ".gallery",
	duration:'300%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".gallery-animate", "gallery-scroll")
	.addTo(controller);


/*===========================================================================================================
	Contact Section
============================================================================================================*/
var scene = new ScrollMagic.Scene({
	triggerElement: ".contact-area",
	duration:'100%',
	triggerHook: "onCenter"
})
	// trigger animation by adding a css class
	.setClassToggle(".title", "titleBottomScroll")
	.addTo(controller);

	

	

	

	