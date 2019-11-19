document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
	$('.burger,.header__burger').click(function(event) {
		$('.burger,.header__burger').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
