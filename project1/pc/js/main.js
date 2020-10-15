$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(".menu").addClass("active");
		},
		function(){
			$(".menu").removeClass("active");
		}
	);
	var swiper1 = new Swiper('#header .slider .swiper-container', {
		// cssMode: true,
		navigation: {
			nextEl: '#header .slider .swiper-button-next',
			prevEl: '#header .slider .swiper-button-prev',
		},
		pagination: {
			el: '#header .slider .swiper-pagination'
		},
			mousewheel: true,
			keyboard: true,
	}); 
	var swiper2 = new Swiper('#content .slider_area .swiper-container', {
		// cssMode: true,
		navigation: {
			nextEl: '#content .slider_area .swiper-button-next',
			prevEl: '#content .slider_area .swiper-button-prev',
		}
	});
    var swiper3 = new Swiper('#content .review_area .slider_in .swiper-container', {
		slidesPerView: 2,
		spaceBetween: 30,
		navigation: {
			nextEl: '#content .review_area .slider_in .swiper-button-next',
			prevEl: '#content .review_area .slider_in .swiper-button-prev',
			clickable: true,
		},
    });
});