<?php
	echo PHP_VERSION;
	echo "<br/>";
	define('COLOR', '#c00');
	echo COLOR;
	echo "<br/>";


	$x = 7;
	$y = 10;
	$z = $x + $y;
	echo "x = $x; y = $y<br/>";
	echo "сумма x и y равна $z <br/>";

	echo "Разность x и y равна ".($x - $y); // .(точка) соеденяет 2 строки в одну!
	echo "<br/>Деление x на y равно ".($x / $y); 
	echo "<br/>Умножение x на y равно ".($x * $y); 

	//рперации со строками

	







?>
<p style="color: <?=COLOR?>;">HELLO WORLD!</p>