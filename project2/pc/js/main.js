$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$("#header .sub_shadow").addClass("active");	
			$("#gnb").addClass("active");
		},
		function(){
			$("#header .sub_shadow").removeClass("active");	
			$("#gnb").removeClass("active");
		}
	);
	var n=0;
	var total=4;
	$(".keyvisual li").eq(n).addClass("current");
	$(".pagination li").eq(n).addClass("current");
		
	$(".left").click(function(e){
		e.preventDefault();

		if(n > 0){
			n=n-1;
		}
		else{
			return;
		}

		$(".keyvisual li.current").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li.current").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	});
	$(".right").click(function(e){
		e.preventDefault();

		if(n < (total-1)){
			n=n+1;
		}
		else{
			return;
		}

		$(".keyvisual li.current").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li.current").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	});
	$(".pagination li").click(function(e){
		e.preventDefault();
		n=$(this).index();

		$(".keyvisual li").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	});

	setInterval(function(){
		if(n < (total-1)){
			n=n+1;
		}
		else{
			n=0;
		}

		$(".keyvisual li.current").removeClass("current");
		$(".keyvisual li").eq(n).addClass("current");
		$(".pagination li.current").removeClass("current");
		$(".pagination li").eq(n).addClass("current");
	}, 5000);
	$(".select dt a").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(this).parent().next("dd").slideToggle(300);
		$(".select dd a").removeClass("active");
	});
	$(".select dd a").click(function(e){
		e.preventDefault();
		$(".select dd a").removeClass("active");
		$(this).addClass("active");

		n=$(this).parent().index();
		str=$(this).text();

		$("select option").eq(n).prop("selected", "selected");
		$(".select dt a").html(str+"<span></span>");
		$(this).parents("dd").slideUp(300);
	});
	var w=150;
	var amount=0;

	$(".rel_site_inner .direction a.prev").click(function(e){
		e.preventDefault();
		amount-=w;

		$(".rel_site_inner .site_wrapper ul").animate({left:amount}, 500, function(){
			$(this).append($(".rel_site_inner .site_wrapper ul li:first-child"));
			amount+=w;
			$(this).css({left:amount});
		});
	});
	$(".rel_site_inner .direction a.next").click(function(e){
		e.preventDefault();
		$(".rel_site_inner .site_wrapper ul").prepend($(".rel_site_inner .site_wrapper ul li:last-child"));
		amount-=w;
		$(".rel_site_inner .site_wrapper ul").css({left:amount});
		amount+=w;
		$(".rel_site_inner .site_wrapper ul").animate({left:amount}, 500);
	});
});