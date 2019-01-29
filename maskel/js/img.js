$( document ).ready(function(){
	var dd = $ ('#dd1');

	dd.animate({
		width: '100%',
		height: '100%',
		opacity: 1.0,
	}, 5000,
	function(){
		$('.text').fadeIn(2000,
			function(){
					$('#prof').fadeIn(4000,
						function(){
							$('.butHed').fadeIn(2000,
								function(){
									$('.dd2ContainerText').fadeIn(2000);
								})
				});
			});
		});
});

