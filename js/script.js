'use strick';
//Добавляем класс для бургера
const menuIcon = document.querySelector('.menu__icon');
	if(menuIcon){
	const menuBlock = document.querySelector('.header-menu__block');
	const menuBody = document.querySelector('.header__menu');
	menuIcon.addEventListener("click", function(){
	menuIcon.classList.toggle("_active");
	menuBlock.classList.toggle("_active");
	menuBody.classList.toggle("_active");
})
}

//Слайдeр
var swiper = new Swiper(".mySwiper", {
	slidesPerView: 1,
	centeredSlides: false,
	slidesPerGroupSkip: 1,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	breakpoints: {
		1199: {
			slidesPerView: 4,
			slidesPerGroup: 4,
		},
	},
	scrollbar: {
		el: ".swiper-scrollbar",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


//Rating=======================================================================
const ratings = document.querySelectorAll('.rating');
if(ratings.length > 0){
	initRatings();
}
//Основная функия
function initRatings(){
	let ratingActive, ratingValue;
	for(let index = 0; index < ratings.length; index++){
		const rating = ratings[index];
		initRating(rating);
	}

//Инициализируем кокретный рейтинг
	function initRating(rating){
		initRatingVars(rating);
		setRatingActiveWidth();

		if(rating.classList.contains('rating__set')){
			setRating(rating);
		}
	}

	//Инициализация пересменныъ
	function initRatingVars(rating){
		ratingActive = rating.querySelector('.rating__active');
		ratingValue = rating.querySelector('.rating__value');
	}
	//Изменяем ширину активных звезд
	function setRatingActiveWidth(index = ratingValue.innerHTML){
		const ratingActiveWidth = index / 0.05;
		ratingActive.style.width = `${ratingActiveWidth}%`;
	}

	//Возможность указать оценку
	function setRating(rating){
		const ratingItems = rating.querySelectorAll('.rating__item');
		for (let index = 0; index < ratingItems.length; index++){
			const ratingItem = ratingItems[index];
			ratingItem.addEventListener("mouseenter", function(e) {
				//Обновление переменных
				initRatingVars(rating);
				//Обновление активных звезд
				setRatingActiveWidth(ratingItem.value);
			});
			ratingItem.addEventListener("mouseleave", function(e) {
				//Обновление активных звезд
				setRatingActiveWidth();
			});
			ratingItem.addEventListener("click", function(e) {
				//Обновление переменных
				initRatingVars(rating);
				if(rating.dataset.ajax){
					//Отправить на сервер
					setRatingValue(ratingItem.value, rating);
				} else{
					//Отобразить указанную оценку
					ratingValue.innerHTML = index + 1;
					setRatingActiveWidth();
				}
			});
		}
	}
}
