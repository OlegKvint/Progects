$('#seren').fadeOut();
$('#mar').hide();
$('#moon').hide();
$('#solar').hide();

$(window).scroll(function() {
	if ($(this).scrollTop() > 800){
		$('#seren').slideDown(4000);
	}
	else{

	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 1600){
		$('#mar').slideDown(4000);
	}
	else{

	}
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 2300){
		$('#moon').slideDown(4000);
	}
	else{

	}
});



$(window).scroll(function() {
	if ($(this).scrollTop() > 3100){
		$('#solar').slideDown(4000);
	}
	else{

	}
});