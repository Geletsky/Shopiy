const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
iconMenu.addEventListener("click", function (e) {
	document.body.classList.toggle('_lock');
	iconMenu.classList.toggle('_active');
	menuBody.classList.toggle('_active');
});


const buttons = document.querySelectorAll('.button-popup');
const popups = document.querySelectorAll('.popup__item');
const popupOverlay = document.querySelectorAll('.popup-overlay');
const popupClose = document.querySelectorAll('.header-popup__icon-close');


buttons.forEach(function (e) {
	e.addEventListener('click', function (e) {
		const path = e.currentTarget.getAttribute('data-path');
		popups.forEach(function (e) {
			e.classList.remove('_active');
			popupOverlay.forEach(function (e) {
				e.classList.remove('_active');
			})
		});
		document.body.classList.add('_lock');
		document.querySelector(`[data-target="${path}"]`).classList.toggle('_active');
		document.querySelector(`[data-background="${path}"]`).classList.toggle('_active');
		const menuBodyActive = document.querySelector('.menu__body._active');
		if (menuBodyActive) {
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
		}

		popupClose.forEach(function (e) {
			e.addEventListener('click', function (e) {
				console.log('click')
				const popupOverlayActive = document.querySelector('.popup-overlay._active');
				document.body.classList.remove('_lock');
				popupOverlayActive.classList.remove('_active');
				popups.forEach(function (e) {
					e.classList.remove('_active');
				});
			});
		});

		const popupOverlayActive = document.querySelector('.popup-overlay._active');
		popupOverlayActive.addEventListener('click', function (e) {
			if (e.target == popupOverlayActive) {
				popupOverlayActive.classList.remove('_active');
				popups.forEach(function (e) {
					e.classList.remove('_active');
				});
			};
		});
	});
});

window.onscroll = function showHeader() {
	const header = document.querySelector('.header');

	if(window.pageYOffset > 200) {
		header.classList.add('_fixed');
	} else {
		header.classList.remove('_fixed');
	};
};

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function(event) {
		const menuBodyActive = document.querySelector('.menu__body._active');
		if (menuBodyActive) {
			iconMenu.classList.remove('_active');
			menuBody.classList.remove('_active');
			document.body.classList.remove('_lock');
		}
		event.preventDefault();
		const blockId = anchor.getAttribute('href');
		document.querySelector('' + blockId).scrollIntoView({
			behavior: "smooth",
			block: "start"
		})
	})
}



