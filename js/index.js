
// TITLE FADEIN

$(document).ready(function(){
	$('.title').fadeIn(500);
	$('.title').css('display','table-cell')
});

// SUBMIT FORM

$('form#publish').on('submit', function (event) {
	event.preventDefault();
	submitForm();
});

function submitForm () {
	var emailVal = $('#emailSubmit').val();
	if (emailVal.indexOf('@') >=0) {
		window.open("https://twitter.com/share?text=I just registered a work with %23Soleau ID %23"+soleauId+"");
	}
	else {$('#emailSubmit').css('color','red');} 
};

// NAV

$(window).scroll(function() {
	if ($(this).scrollTop() >= 200){
		$('header').addClass('shadow');
		$('#backtotop').fadeIn(100);
	}
	else {
		$('header').removeClass('shadow');
		$('#backtotop').fadeOut(100);
	}
});

$('ul li a').on('click', function (event){
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