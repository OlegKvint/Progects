var obj = function(){

	$("[class*=catalogObject]").hide();
	$("[class=upCity]").hide();
	$("[class=upInmob]").hide();
	$("[class=smallPageNext]").hide();
	//видимые
	$("[id=numero]").show();
	$("[class*=-one]").show();
	$("[class=imgCity]").show();
	$("[class=pageStart]").show();
	$("[class=pageNavNext]").show();
	$("[class=imgInmob]").show();
	$("[id*=pageNav]").css("background","#f9fafa");
	$("[class=pageNavOne]").css("background","#43649130");
	$("[id=pageOne]").show();
	//выборка по фильтру 
	$("[id*=city]").hide();
	$("[id*=inmobiliaria]").hide();
};


//загрузка страницы 2

var twoPage = function(){

	$("[id*=pageNav]").css("background","#f9fafa");
	$(this).css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class*=smallPageNext]").hide();
	$("[class*=-two]").show();
	$("[id=pageTwo]").show();
};
	$("[class=pageNavTwo]").click(twoPage);
	twoPage();

//загрузка страницы 3

var trioPage = function(){

	$("[id*=pageNav]").css("background","#f9fafa");
	$(this).css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class*=smallPageNext]").hide();
	$("[class*=-trio]").show();
	$("[id=pageTrio]").show();
};

$("[class=pageNavTrio]").click(trioPage);
trioPage();

//загрузка страницы 4

var fourPage = function(){

	$("[id*=pageNav]").css("background","#f9fafa");
	$(this).css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class*=smallPageNext]").hide();
	$("[class*=-four]").show();
	$("[id=pageFour]").show();
};

$("[class=pageNavFour]").click(fourPage);
fourPage();


//загрузка страницы 5
var fivePage = function(){

	$("[id*=pageNav]").css("background","#f9fafa");
	$(this).css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class*=smallPageNext]").hide();
	$("[class*=-five]").show();
	$("[id=pageFive]").show();
};

$("[class=pageNavFive]").click(fivePage);
fivePage();

//загрузка страницы 1

var onePage = function(){

		$("[id*=pageNav]").css("background","#f9fafa");
		$("[class*=pageNavOne]").css("background","#43649130");
		$("[class*=catalogObject]").hide();
		$("[class*=smallPageNext]").hide();
		$("[class*=-one]").show();
		$("[id=pageOne]").show();
	};

	$("[class=pageNavOne]").click(onePage);
	onePage();



//Начало
$("[class=pageStart]").click(function(){
	$("[id*=pageNav]").css("background","#f9fafa");
	$("[class=pageNavOne]").css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class*=smallPageNext]").hide();
	$("[class*=-one]").show();
	$("[id=pageOne]").show();
});

//В конец
$("[class=pageNavNext]").click(function(){
	$("[id*=pageNav]").css("background","#f9fafa");
	$("[class=pageNavFive]").css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class*=smallPageNext]").hide();
	$("[class*=-five]").show();
	$("[id=pageFive]").show();
});


//развернуть меню Город

$("[class=imgCity]").click(function(){
	$("[id*=city]").show(1000);
	$("[class=imgCity]").hide(1000);
	$("[class=upCity]").show(1000);
});



//свернуть меню Город

$("[class=upCity]").click(function(){
	$("[id*=city]").hide(1000);
	$("[class=upCity]").hide(1000);
	$("[class=imgCity]").show(1000);
});

//развернуть меню Тип

$("[class=imgInmob]").click(function(){
	$("[id*=inmobiliaria]").show(1000);
	$("[class=imgInmob]").hide(1000);
	$("[class=upInmob]").show(1000);

});



// свернуть меню Тип

$("[class=upInmob]").click(function(){
	$("[id*=inmobiliaria]").hide(1000);
	$("[class=upInmob]").hide(1000);
	$("[class=imgInmob]").show(1000);
});

// выборка по 2-м фильтрам

$("[class=imgCity]").click(function(){
	$("[id*=city]").show(1000);
	$("[class=imgCity]").hide(1000);
	$("[class=upCity]").show(1000);

	// выборка по Аликанте
		$("[class=alican20]").click(function(){
			$("[id=city]").css("background","#2e486f96");
			$("[id=inmobiliaria]").css("background","#2e486f96");
			$("[class=alican20]").css("background","#253356");
			$("[class*=catalogObject]").hide();
			$("[id*=alican20]").show();
			$("[id*=numero]").hide();



			// фильтрация по Типу обьекта
				$("[class=appart20]").click(function(){
					$("[id=inmobiliaria]").css("background","#2e486f96");
					$("[class=appart20]").css("background","#253356");
					$("[class*=catalogObject]").hide();
					$("[id*=alican20-appart]").show();
				});
				$("[class=bung20]").click(function(){
					$("[id=inmobiliaria]").css("background","#2e486f96");
					$("[class=bung20]").css("background","#253356");
					$("[class*=catalogObject]").hide();
					$("[id*=alican20-bung]").show();
				});
				$("[class=dupl20]").click(function(){
					$("[id=inmobiliaria]").css("background","#2e486f96");
					$("[class=dupl20]").css("background","#253356");
					$("[class*=catalogObject]").hide();
					$("[id*=alican20-dupl]").show();
				});
				$("[class=vill20]").click(function(){
					$("[id=inmobiliaria]").css("background","#2e486f96");
					$("[class=vill20]").css("background","#253356");
					$("[class*=catalogObject]").hide();
					$("[id*=alican20-vill]").show();
				});
		});

		// выборка по Алтея
			$("[class=alte20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=alte20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=alte20]").show();
				$("[id*=numero]").hide();


				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=alte20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=alte20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=alte20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=alte20-vill]").show();
					});
			});

		// выборка по Бенихофар
			$("[class=benij20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=benij20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=benij20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=benij20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=benij20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=benij20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=benij20-vill]").show();
					});
			});

		// выборка по Гуардамар
			$("[class=guard20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=guard20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=guard20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=guard20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=guard20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=guard20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=guard20-vill]").show();
					});
			});


		// выборка по Дениа
			$("[class=den20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=den20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=den20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=den20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=den20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=den20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=den20-vill]").show();
					});
			});


		// выборка по Кальпе
			$("[class=kalp20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=kalp20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=kalp20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=kalp20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=kalp20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=kalp20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=kalp20-vill]").show();
					});
			});


		// выборка по Кампейо
			$("[class=camp20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=camp20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=camp20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=camp20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=camp20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=camp20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=camp20-vill]").show();
					});
			});


		// выборка по Кревьенте
			$("[class=krev20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=krev20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=krev20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=krev20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=krev20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=krev20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=krev20-vill]").show();
					});
			});



		// выборка по Ла Марина
			$("[class=marin20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=marin20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=marin20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=marin20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=marin20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=marin20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=marin20-vill]").show();
					});
			});



		// выборка по Ла Мурсия
			$("[class=murs20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=murs20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=murs20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=murs20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=murs20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=murs20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=murs20-vill]").show();
					});
			});



		// выборка по Ондон де лос Фраилес
			$("[class=frail20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=frail20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=frail20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=frail20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=frail20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=frail20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=frail20-vill]").show();
					});
			});




		// выборка по Ориуэла Коста
			$("[class=oriel20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=oriel20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=oriel20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=oriel20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=oriel20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=oriel20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=oriel20-vill]").show();
					});
			});


		// выборка по Рохалес
			$("[class=rojal20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=rojal20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=rojal20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=rojal20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=rojal20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=rojal20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=rojal20-vill]").show();
					});
			});




		// выборка по Сан Хуан де Аликанте
			$("[class=juan20]").click(function(){
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=juan20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[id*=juan20]").show();
				$("[id*=numero]").hide();

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=juan20-appart]").show();
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=juan20-bung]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=juan20-dupl]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=juan20-vill]").show();
					});
			});


		// выборка по Торревьеха
			$("[class=torr20]").click(function(){
				$("[id*=numero]").show();
				$("[id=city]").css("background","#2e486f96");
				$("[id=inmobiliaria]").css("background","#2e486f96");
				$("[class=torr20]").css("background","#253356");
				$("[class*=catalogObject]").hide();
				$("[class=pageStart]").hide();
				$("[class*=pageNavNext]").hide();
				$("[id*=torr20]").show();
				$("[id*=pageNav]").css("background","#f9fafa");
				$("[class=pageNavOne]").css("background","#43649130");
				$("[class*=smallPageNext]").hide();
				$("[class*=-one]").show();
				$("[id=pageOne]").show();

				//загрузка страницы 
				$("[class=pageNavOne]").click(function(){
					$("[id*=pageNav]").css("background","#f9fafa");
					$(this).css("background","#43649130");
					$("[class*=catalogObject]").hide();
					$("[class*=smallPageNext]").hide();
					$("[id*=torr20]").show();
					$("[id=pageOne]").show();
				});

				//загрузка страницы 2
				$("[class=pageNavTwo]").click(function(){
					$("[id*=pageNav]").css("background","#f9fafa");
					$(this).css("background","#43649130");
					$("[class*=catalogObject]").hide();
					$("[class*=smallPageNext]").hide();
					$("[id*=torr40]").show();
					$("[id=pageTwo]").show();
				});


				//загрузка страницы 3
				$("[class=pageNavTrio]").click(function(){
					$("[id*=pageNav]").css("background","#f9fafa");
					$(this).css("background","#43649130");
					$("[class*=catalogObject]").hide();
					$("[class*=smallPageNext]").hide();
					$("[id*=torr60]").show();
					$("[id=pageTrio]").show();
				});

				//загрузка страницы 4
				$("[class=pageNavFour]").click(function(){
					$("[id*=pageNav]").css("background","#f9fafa");
					$(this).css("background","#43649130");
					$("[class*=catalogObject]").hide();
					$("[class*=smallPageNext]").hide();
					$("[id=pageFour]").show();
				});

				//загрузка страницы 5
				$("[class=pageNavFive]").click(function(){
					$("[id*=pageNav]").css("background","#f9fafa");
					$(this).css("background","#43649130");
					$("[class*=catalogObject]").hide();
					$("[class*=smallPageNext]").hide();
					$("[id=pageFive]").show();
				});

				// фильтрация по Типу обьекта
					$("[class=appart20]").click(function(){
						$("[id*=numero]").show();
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=appart20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=torAp20]").show();
						$("[id=pageOne]").show();


						$("[class=pageNavOne]").click(function(){
							$("[id*=pageNav]").css("background","#f9fafa");
							$(this).css("background","#43649130");
							$("[class*=catalogObject]").hide();
							$("[class*=smallPageNext]").hide();
							$("[id*=torAp20]").show();
							$("[id=pageOne]").show();
						});
						$("[class=pageNavTwo]").click(function(){
							$(this).css("background","#43649130");
							$("[class*=catalogObject]").hide();
							$("[class*=smallPageNext]").hide();
							$("[id*=torAp40]").show();
							$("[id=pageTwo]").show();
						});
						$("[class=pageNavTrio]").click(function(){
							$("[id*=pageNav]").css("background","#f9fafa");
							$(this).css("background","#43649130");
							$("[class*=catalogObject]").hide();
							$("[class*=smallPageNext]").hide();
							$("[id=pageTrio]").show();
						});
					});
					$("[class=bung20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=bung20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=numero]").hide();
						$("[id*=torBun]").show();
					});
					$("[class=dupl20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=dupl20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=numero]").hide();
						$("[id*=dup]").show();
					});
					$("[class=vill20]").click(function(){
						$("[id=inmobiliaria]").css("background","#2e486f96");
						$("[class=vill20]").css("background","#253356");
						$("[class*=catalogObject]").hide();
						$("[id*=numero]").hide();
						$("[id*=vilT]").show();
					});
			});

});
//выборка по типу оьекта
//Квартира

$("[class=appart20]").click(function(){
	$("[id=inmobiliaria]").css("background","#2e486f96");
	$("[class=appart20]").css("background","#253356");
	$("[id*=pageNav]").css("background","#f9fafa");
	$("[class=pageNavOne]").css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class*=smallPageNext]").hide();
	$("[class=pageStart]").hide();
	$("[class*=pageNavNext]").hide();
	$("[id*=appart20]").show();
	$("[id=pageOne]").show();

	$("[class=pageNavOne]").click(function(){
		$("[id*=pageNav]").css("background","#f9fafa");
		$("[class=pageNavOne]").css("background","#43649130");
		$("[class*=catalogObject]").hide();
		$("[class*=smallPageNext]").hide();
		$("[id*=appart20]").show();
		$("[id=pageOne]").show();
	});
	$("[class=pageNavTwo]").click(function(){
		$(this).css("background","#43649130");
		$("[class*=catalogObject]").hide();
		$("[class*=smallPageNext]").hide();
		$("[id*=appart40]").show();
		$("[id=pageTwo]").show();
	});
	$("[class=pageNavTrio]").click(function(){
		$("[id*=pageNav]").css("background","#f9fafa");
		$(this).css("background","#43649130");
		$("[class*=catalogObject]").hide();
		$("[class*=smallPageNext]").hide();
		$("[id*=appart60]").show();
		$("[id=pageTrio]").show();
	});
	//загрузка страницы 4
	$("[class=pageNavFour]").click(function(){
		$("[id*=pageNav]").css("background","#f9fafa");
		$(this).css("background","#43649130");
		$("[class*=catalogObject]").hide();
		$("[class*=smallPageNext]").hide();
		$("[id=pageFour]").show();
	});

	//загрузка страницы 5
	$("[class=pageNavFive]").click(function(){
		$("[id*=pageNav]").css("background","#f9fafa");
		$(this).css("background","#43649130");
		$("[class*=catalogObject]").hide();
		$("[class*=smallPageNext]").hide();
		$("[id=pageFive]").show();
	});

});


$("[class=bung20]").click(function(){
	$("[id=inmobiliaria]").css("background","#2e486f96");
	$("[class=bung20]").css("background","#253356");
	$("[id*=numero]").hide();
	$("[class*=catalogObject]").hide();
	$("[id*=bung20]").show();
});
$("[class=dupl20]").click(function(){
	$("[id=inmobiliaria]").css("background","#2e486f96");
	$("[class=dupl20]").css("background","#253356");
	$("[id*=numero]").hide();
	$("[class*=catalogObject]").hide();
	$("[id*=dupl20]").show();
});
$("[class=vill20]").click(function(){
	$("[id*=numero]").show();
	$("[id=inmobiliaria]").css("background","#2e486f96");
	$("[class=villa20]").css("background","#253356");
	$("[id*=pageNav]").css("background","#f9fafa");
	$("[class=pageNavOne]").css("background","#43649130");
	$("[class*=catalogObject]").hide();
	$("[class=pageStart]").hide();
	$("[class*=pageNavNext]").hide();
	$("[id*=vill20]").show();
	$("[id=pageOne]").show();

		$("[class=pageNavOne]").click(function(){
			$("[id*=pageNav]").css("background","#f9fafa");
			$("[class=pageNavOne]").css("background","#43649130");
			$("[class*=catalogObject]").hide();
			$("[class*=smallPageNext]").hide();
			$("[id*=vill20]").show();
			$("[id=pageOne]").show();
		});
		$("[class=pageNavTwo]").click(function(){
			$(this).css("background","#43649130");
			$("[class*=catalogObject]").hide();
			$("[class*=smallPageNext]").hide();
			$("[id*=vill40]").show();
			$("[id=pageTwo]").show();
		});
		$("[class=pageNavTrio]").click(function(){
			$("[id*=pageNav]").css("background","#f9fafa");
			$(this).css("background","#43649130");
			$("[class*=catalogObject]").hide();
			$("[class*=smallPageNext]").hide();
			$("[id=pageTrio]").show();
		});
		//загрузка страницы 4
		$("[class=pageNavFour]").click(function(){
			$("[id*=pageNav]").css("background","#f9fafa");
			$(this).css("background","#43649130");
			$("[class*=catalogObject]").hide();
			$("[class*=smallPageNext]").hide();
			$("[id=pageFour]").show();
		});

		//загрузка страницы 5
		$("[class=pageNavFive]").click(function(){
			$("[id*=pageNav]").css("background","#f9fafa");
			$(this).css("background","#43649130");
			$("[class*=catalogObject]").hide();
			$("[class*=smallPageNext]").hide();
			$("[id=pageFive]").show();
		});


});

//сброс параметров фильтра

$("[class=cityP]").click(obj);
obj();









