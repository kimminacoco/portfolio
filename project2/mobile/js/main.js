$(function(){
	var swiper1=new Swiper("#start .swiper-container", {
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		on: {
			init: function(){
				$("#start .swiper-button-prev").hide();
				$("#start .swiper-button-next").hide();
			},
			transitionEnd: function(){
				$("#start .swiper-slide").each(function(i){
					if($(this).hasClass("swiper-slide-active")){
						if(i == 0){
							$("#start .swiper-button-prev").hide();
							$("#start .swiper-button-next").hide();
						}
						else{
							$("#start .swiper-button-prev").show();
							$("#start .swiper-button-next").show();
						}
					}
				});
			}
		}
	});

	var video=document.getElementById("intro");
	var w, h;
	var videoW, videoH;

	video.muted=true;
	video.play();

	$(window).resize(function(){
		$("#intro").removeAttr("style");
		w=$(window).width();
		h=$(window).height();

		if(w > h){
			videoW=w;
			$("#intro").css({width:videoW});
		}
		else {
			videoH=h;
			$("#intro").css({height:h});
			videoW=$("#intro").width();
			$("#intro").css({left:"50%", marginLeft:(-1)*videoW/2});
		}
	});
	video.addEventListener("loadeddata", function(){
		$(window).trigger("resize");
	});
	video.addEventListener("ended", function(){
		video.currentTime=0;
		video.play();
	});
	$(".upper .tab").click(function(e){
		e.preventDefault();
		$(".mobile_menu").addClass("active");
	});
	$(".mobile_menu .close").click(function(e){
		e.preventDefault();
		$(".mobile_menu").removeClass("active");
		$("#gnb > ul > li").each(function(){
			if($(this).hasClass("active") == true){
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	});
	$("#gnb > ul > li").click(function(e){
		e.preventDefault();

		if($(this).hasClass("active") == false){
			$("#gnb > ul > li").removeClass("active");
			$(this).addClass("active");
			$("#gnb ul ul").slideUp(300);
			$(this).find("ul").slideDown(300);
		}
		else {
			$(this).removeClass("active");
			$(this).find("ul").slideUp(300);
		}
	});
	var t=0;
	var scrollTimer=0;

	$(window).scroll(function(){
		clearTimeout(scrollTimer);

		scrollTimer=setTimeout(function(){
			t=$(window).scrollTop();

			if(t > $(window).height()){
				if($("#start .upper").hasClass("fixed") == false){
					$("#start .upper").addClass("fixed").animate({top:0, opacity:1}, 300);
				}
				else{
					return;
				}
			}
			else {
				if($("#start .upper").hasClass("fixed") == true){
					$("#start .upper").removeAttr("style");
					$("#start .upper").removeClass("fixed");
				}
				else {
					return;
				}
			}
		});
		$("#start .symbol").click(function(e){
			e.preventDefault();
			$("html").animate({scrollTop:0}, 500);
		});
	});
	var swiper2 = new Swiper('#question .swiper-container', {
      slidesPerView: 4,
      spaceBetween: 30,
      centeredSlides: true,
      pagination: {
        el: '#question .swiper-pagination',
        clickable: true,
      },
    });

	var swiper3;

	$("#list .desc").click(function(e){
		e.preventDefault();
		$("detail_area").addClass("active");

		setTimeout(function(){
			swiper3=new Swiper(".detail_area .swiper-container", {
				pagination: {
					el: ".detail_area .swiper-pagination"
				}
			});
		},100);
	});
	$(".detail_area .close").click(function(e){
		e.preventDefault();
		$(".detail_area").removeClass("active");
		swiper3=null;
	});
});