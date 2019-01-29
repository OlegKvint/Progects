$(window).on("load", function () {
    var $preloader = $('#loader'),
        $svg_anm   = $preloader.find(".sk-cube");
    $preloader.delay(1500).fadeOut();
});

$(".menuOpen").click(function(){
	$('.menuContent').addClass("sticky");
});

$(".overlay-close").click(function(){
	$('.menuContent').removeClass("sticky");
});

 $(".arrowDown").click(function(){
	$("#loader").addClass("sticky");
	$(".infoContent").fadeIn(500);
});

  $(".arrowUp").click(function(){
	$("#loader").removeClass("sticky");
	$(".infoContent").fadeOut(500);
});

  $('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
})

$(".project h2").hover(

    function () {
        // this is the mouseout event
        $(this).children('img').attr('src', 'images/proj.gif');
    },
      function () {
        // this is the mouseout event
        $(this).children('img').attr('src', 'images/proj.png');
    }
);
$("#carouselExampleIndicators").carousel({
  interval: 4000
});


// <====processing====> 
$(".buttonAfter").click(function(){
  $('.buttonAfter').addClass("sticky");
  $('.buttonTo').addClass("sticky");
  $("#one").("sticky");

    $(".buttonTo").click(function(){
      $('.buttonTo').removeClass("sticky");
      $('.buttonAfter').removeClass("sticky");
      $("one").removeClass("sticky");
    });
});

















