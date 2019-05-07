//打字效果
ityped.init('#ityped', {
	strings:['WELCOME TO MY WEBSITE.'],
	startDelay: 600,
	loop:true
});	

//輪播圖
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	arrows: false
});

//chart

$(document).ready(function(){
		$('.html').animate({width:'80%'},2000);
		$('.css').animate({width:'75%'},2000);
		$('.js').animate({width:'50%'},2000);
		$('.mysql').animate({width:'35%'},2000);
		$('.bootstrap').animate({width:'40%'},2000);
			});