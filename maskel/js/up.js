$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},1000);
 
});

 
});

$('#catalogUp2').click(function() {
 
$('body,html').animate({scrollTop:0},1000);
 
});