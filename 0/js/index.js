$( document ).ready(function(){
	$('.slider#promo').slider({full_width: true, indicators: true, interval: 20000});
	$('.slider#logo').slider({full_width: true, indicators: false, height: 240, interval: 10000});
	$('.tooltipped').tooltip({delay: 1});
	

	$('.parallax').parallax();
    $('.scrollspy').scrollSpy();
	if($(window).width() > 992){
		$(".button-collapse").sideNav({
	      	menuWidth: 260, // Default is 240
	      	edge: 'left',
	      	closeOnClick: false
	    });
	}else{
		$(".button-collapse").sideNav({
	      	menuWidth: 260, // Default is 240
	      	edge: 'left',
	      	closeOnClick: true
	    });
	}

	function go_to_this(id) {
		$('html, body').animate({ scrollTop: document.getElementById(id).offsetTop + 'px'}, 1100);
	}
	go_to = go_to_this;
});