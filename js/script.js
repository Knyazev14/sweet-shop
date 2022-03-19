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

// var swiper = new Swiper(".mySwiper", {
// 	slidesPerView: 4,
// 	spaceBetween: 30,
// 	slidesPerGroup: 4,
// 	loop: true,
// 	loopFillGroupWithBlank: true,
// 	pagination: {
// 		el: ".swiper-pagination",
// 		clickable: true,
// 	},
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// });

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