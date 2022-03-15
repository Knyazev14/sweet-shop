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


