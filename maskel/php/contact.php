<?php
//проверяем значения полученые при проверке скриптом формы
if (trim($_POST['valTrFal'])!='valTrFal_true') {
	echo 'fasle';
}
else {

		$txtname = trim($_POST['txtname']);

		$txtNameValue = trim($_POST['name_class_value']);

		$txtemail = trim($_POST['txtemail']);

		$txtphone = trim($_POST['txtphone']);

		$txtmessage = trim($_POST['txtmessage']);

		// от кого
		$fromMail = 'txtemail';
		$fromName = 'txtname';

		// Сюда введите Ваш email
		$emailTo = 'info@maskeles.com';

		$subject = 'Заявка с сайта';
		$subject = '=?utf-8?b?'. base64_encode($subject) .'?=';
		$headers = "Content-type: text/plain; charset=\"utf-8\"\r\n";
		$headers .= "From: ". $fromName ." <". $fromMail ."> \r\n";

		// тело письма
		$body = "Получено письмо с сайта maskeles.com\n\nИмя: $txtname\nТелефон: $txtphone\ne-mail: $txtemail \nСообщение: $txtmessage";
		$mail = mail($emailTo, $subject, $body, $headers, '-f'. $fromMail );


		echo 'ok';
}
?>
