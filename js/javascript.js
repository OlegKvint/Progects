var one = "Переменная";

//alert (one);
//console.log (one);

//document.getElementById('message').innerHTML = 'Hello'; //вывод текста
//document.getElementById('message').innerHTML = one; //вывод значения переменной

$('#test').text(one); // вывод с помощью библиотеки jQuery
$('#test').fadeOut("slow");

$('.myclass').text(one);