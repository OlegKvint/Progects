jQuery(document).ready(function($){

	//в этой функции отслеживается изменение чекбокса "я не робот"
	$(document).on('change', '.fofm input:checkbox', function() {
		if($(this).is(':checked')){
			$(".fofm input[type=submit]").removeAttr('disabled');
			$('.fofm input[type=hidden].valTrFal').val('valTrFal_true');
		}
		else {
			$(".fofm input[type=submit]").attr('disabled','disabled');
			$('.fofm input[type=hidden].valTrFal').val('valTrFal_disabled');
		}
	});

	//закрытие модального окна
	$('.close_modal').click(function (){
		$('.popup2').css({'opacity':'0', 'visibility':'hidden'});
		//сброс всех полей формы обраной связи
		$(':input','.fofm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
		$(".fofm input[type=submit]").attr('disabled','disabled');
	});

/*	//показ модального окна
	$('.open_modal').click(function (e){
		e.preventDefault();
		$('.popup, .overlay').css({'opacity':'1', 'visibility':'visible'});
	});
*/
	//аякс форма обратной связи
	//проверяет какой ответ был получен
	//и в зависимости от ответа
	//выводит информацию о статусе
	//отправки письма
	$(".fofm").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "php/contact.php",
			data: str,
			success: function(msg) {
				if(msg == 'ok') {
					$('.popup2').css('opacity','1');
					$('.popup2').css('visibility','visible');
				}
				else {
					$('.popup2 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup2').css('opacity','1');
					$('.popup2').css('visibility','visible');
				}
			}
		});
		return false;
	});

});