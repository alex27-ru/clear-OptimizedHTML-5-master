document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	$('.burger,.header-nav').click(function(event) {
	$('.burger,.header-nav').toggleClass('active');
	$('body').toggleClass('lock');
	});

});
