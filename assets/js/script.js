
$(document).ready(() => {
    $(".burger-menu").click((event) => {
        $(".navigation, .burger-menu").toggleClass("active");
        $("body").toggleClass("lock");
    })

})

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 600,
    centeredSlides: true,


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 1000,

});


$(document).ready(function() {
	$('.examples__wrap').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});



//# sourceMappingURL=script.js.map
