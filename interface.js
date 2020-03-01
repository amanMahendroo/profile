$(document).ready(function () {
	$('.ham').click(function () {
		$('.nav').toggleClass('open')
		setTimeout(function () {
			$('.container').toggleClass('disp')
		}, 1000);
	})
})