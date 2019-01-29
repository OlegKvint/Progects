<?php
//ini_set('error_reporting', E_ALL);
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);

$db = mysqli_connect ("localhost", "root", "root", "my_base");

	if (isset($_POST['batton'])) {
		$login = $_POST['login'];
		$password = $_POST['password'];
	}

$query = mysqli_query($db, "SELECT login,password FROM admins WHERE login = '$login' AND password = '$password'");
$myrow = mysqli_fetch_array($query);

	if ($login == $myrow['login']) {
		if ($password == $myrow['password']) {
			echo "Здравствуте, " .$login;
		}
	}else{
		echo "Неправильный логин или пароль";
	}

?>