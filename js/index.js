
// TITLE FADEIN

$(document).ready(function(){
	$('.next').fadeIn(900);
	$('.down-arrow').fadeIn(900);
});

// NAV

$(window).scroll(function() {
	if ($(this).scrollTop() >= 200){
		$('#backtotop').fadeIn(100);
		$('header').addClass('shadow');
	}
	else {
		$('#backtotop').fadeOut(100);
		$('header').removeClass('shadow');
	}
});

$('ul li a, .next').on('click', function (event){
	$('ul li a').removeClass('active');
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
	$(this).addClass('active');
});

$('#backtotop').on('click', function (event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
	$('ul li a').removeClass('active');
});

$('.hamburger').on('click', function() {
	$('.hamburger .line').first().toggleClass('rotate-cw');
	$('.hamburger .line:eq(1)').fadeToggle(50);
	$('.hamburger .line').last().toggleClass('rotate-ccw');
	$('.hamburger ul').fadeToggle(200);
});