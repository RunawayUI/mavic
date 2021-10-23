$(document).ready(function(){

	

	$('.products__slider').slick({
		prevArrow: '<button class="slider-btn slider-btn__left"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.21839 1L1 9L9.21839 17" /></svg></button>',
		nextArrow: '<button class="slider-btn slider-btn__right"><svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.78161 17L9 9L0.78161 1" /></svg></button>',
		infinite: false
	});

	var mavic = document.getElementById('mavic');
	var runParallax = new Parallax(mavic);

	$('.questions__item-title').on('click', function () {
		$('.questions__item').removeClass('active');
		$(this).parent().addClass('active');
	});

	$('#fullpage').fullpage({
		autoScrolling: true,
		scrollHorizontally: true,
		sectionSelector: '.page-section',
		scrollOverflow: true,
		paddingTop: '74px',
		paddingBottom: '50px',
		responsiveWidth: 0,
		fixedElements: 'scroll__btn',
		menu: '#header__nav',
		anchors: ['top', 'products', 'benefits', 'specification', 'questions', 'contacts']
	});

	$('.menu__btn').on('click', function () {
		$('.menu__btn').toggleClass('active');
		$('.menu__list').toggleClass('active');
	});

	$('.menu__list-link').on('click', function () {
		$('.menu__btn').removeClass('active');
		$('.menu__list').removeClass('active');
	});




});