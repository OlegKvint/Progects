$( document ).scroll(function() {
	var dd = $ ('.fade');
	var head = $ ('#header');
	var wrap = $ ('.text');

	if ($(this).scrollTop() > 200){
		head.addClass("sticky");
		dd.addClass("sticky");
		wrap.addClass("sticky");
		$('.homPag').addClass("sticky");
	}
	else{
		head.removeClass("sticky");
		dd.removeClass("sticky");
		wrap.removeClass("sticky");
		$('.homPag').removeClass("sticky");

	}
});

$( document ).scroll(function() {
	if ($(this).scrollTop() > 400){
		$('#headerGl').addClass("sticky");
		$('#cotainerImg').addClass("sticky");
		$('#cotainerImgUs').addClass("sticky");
		$('#cotainerImgServ').addClass("sticky");
		$('#cotainerImgCont').addClass("sticky");
		$('#cotainerImgCat').addClass("sticky");
		$('#cotainerImgInv').addClass("sticky");
	}
	else{
		$('#headerGl').removeClass("sticky");
		$('#cotainerImg').removeClass("sticky");
		$('#cotainerImgUs').removeClass("sticky");
		$('#cotainerImgServ').removeClass("sticky");
		$('#cotainerImgCont').removeClass("sticky");
		$('#cotainerImgCat').removeClass("sticky");
		$('#cotainerImgInv').removeClass("sticky");
	}
});	
