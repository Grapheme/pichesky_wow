var Loader = (function(){
	var $loader = $('.loader');
	var $fullLogo = $('.full-logo');
	var $wrapper = $('.wrapper');
	var coolDown = false;

	return {
		open: function() {
			if(coolDown) { return; }
			coolDown = true;
			$fullLogo.hide();
			$('.loader').addClass('opened');
			$('.wrapper').removeClass('opened');

			$('.loader-cont .tips').fadeToggle(100);

			setTimeout( function(){	$('body').addClass('opened'); $('.wrapper').addClass('ontop'); coolDown = false; }, 1600); //Transition time
		},
		close: function() {
			if(coolDown) { return; }
			coolDown = true;
			$('.loader').removeClass('opened');
			$('.wrapper').addClass('opened').removeClass('ontop');	

	$('.loader-cont .tips').fadeToggle(700);		
			setTimeout( function(){	$('body').removeClass('opened'); $fullLogo.delay(200).fadeIn(); coolDown = false; }, 1600); //Transition time
		},
		alignPart: function() {
			$('.loader-bot-r').parent().height();
			$('.loader-bot-r').css({ top: ($('.loader-bot-r').parent().height() / 2) - 3 });
		},
		switchTabs: function() {

		}
	};
})();

$(function(){
	Loader.alignPart();
});
$(window).resize(function(){
	Loader.alignPart();
});
$(document).on('click touchstart', 'body', function(e){
	Loader.open();
});

$(document).on('click touchstart', '.drink .cross', function(e){
	e.stopPropagation();
	Loader.close();
});

$(document).on('click touchstart', '.tab a', function(e){
	e.preventDefault();
});

$(document).on('click touchstart', '.tab', function(e){
	var $gainList = $('.gain-list');
	var $composition = $('.composition');

	if ($(this).hasClass('active')) { return; }

	if ($('.tab.active').hasClass('tab-1')) {
		$gainList.fadeOut( 300 );
		setTimeout( function() { $composition.fadeIn( 300 ); }, 300);
	}
	if ($('.tab.active').hasClass('tab-2')) {
		$composition.fadeOut( 300 );
		setTimeout( function() { $gainList.fadeIn( 300 ); }, 300);
	}
	$('.tab.active').removeClass('active');
	$(this).addClass('active');
});
