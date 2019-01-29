
$("#slider > div:gt(0)").hide();

setInterval(function() {
  $('#slider > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slider');
}, 3000);


$("#slider2 > div:gt(0)").hide();

setInterval(function() {
  $('#slider2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slider2');
}, 3000);


$("#slider3 > div:gt(0)").hide();

setInterval(function() {
  $('#slider3 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slider3');
}, 3000);
