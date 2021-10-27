// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'
import '~/app/libs/magnific-popup/dist/jquery.magnific-popup.min.js'

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS

	$('#warranty1-click').magnificPopup({
		items: {
      src: '#warranty3',
      type: 'inline'
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$('#warranty2-click').magnificPopup({
		items: {
      src: '#warranty3',
      type: 'inline'
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});
	$('#warranty3-click').magnificPopup({
		items: {
      src: '#warranty3',
      type: 'inline'
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'

	});





})
