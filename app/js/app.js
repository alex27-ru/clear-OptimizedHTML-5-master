// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/app/libs/slicknav/dist/jquery.slicknav.min.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom J
	$('.nav__list').slicknav({
	label: '',
	duration: 1000,
	prependTo: 'nav'
});

})
