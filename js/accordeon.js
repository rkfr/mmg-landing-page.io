'use strict'

// function addClassByClick(parent, className) {
	
// 	parent.addEventListener('click', (e) => {

// 		if (e.target.classList.contains('nav-menu__accordeon-button'))
// 			menu.classList.toggle('open');
// 		else
// 			menu.classList.remove('open');
// 	})

// }



// console.log(menuData);

// const menu = document.getElementById('nav-menu'),
// 	accordeonMenu = document.getElementById('accordeon-menu');


// const headerContainer = document.querySelector('.header__top-section');

// addClassByClick( headerContainer, 'open' );

// ===============
const menuData = {

	menu: document.getElementById('nav-menu'),
	container: document.querySelector('.header__top-section'),
	targetClassName: 'nav-menu__accordeon-button'
};

function addClassByClick( props ) {

	const { menu, container, targetClassName } = props;

	container.addEventListener('click', (e) => {

		if (e.target.classList.contains( targetClassName ))
			menu.classList.toggle('open');
		else
			menu.classList.remove('open');
	});

}

addClassByClick( menuData );