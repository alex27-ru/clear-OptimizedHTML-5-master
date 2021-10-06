$(function () {

// $('.call__btn').on('click', function () {

// 	$('.modal').addClass('modal-active-flex');
// 	$('.call-back').addClass('modal-active');

// });


$('.modal__close').on('click', function () {
	$(this).parent().removeClass('modal-active');
	$('.modal').removeClass('modal-active-flex');
});
$('.modal').on('click', function () {
	$('.modal').removeClass('modal-active-flex');
	$('.thanks').removeClass('modal-active');
	$('.call-back').removeClass('modal-active');
	$('.fast-request').removeClass('modal-active');
});


$('[data-click]').on('click', function () {
	var cl = $(this).attr('data-click');
	$('.modal').addClass('modal-active-flex');
	$('.' + cl).addClass('modal-active');

});


});
