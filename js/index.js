$( document ).ready(function(){
	$('.slider#promo').slider({full_width: true, indicators: false, interval: 15000});
	$('.slider#logo').slider({full_width: true, indicators: false, height: 240, interval: 10000});
	$('.tooltipped').tooltip({delay: 1});
	

	$('.parallax').parallax();

	$(".button-collapse").sideNav({
      	menuWidth: 300, // Default is 240
      	edge: 'left',
      	closeOnClick: false
    });

	function go_to_this(id) {
		$('html, body').animate({ scrollTop: document.getElementById(id).offsetTop + 'px'}, 1100);
	}
	go_to = go_to_this;

	function attach_anim(){
		var a_types = ['fadeInUp', 'fadeInUpShort','bounceInUp', 'lightSpeedInLeft', 'bounceInRight', 'growIn', 'flipInY', 'fadeInRightShort', 'fadeInUpShort', 'fadeInDownShort', 'flipInX', 'lightSpeedInDown', 'lightSpeedInUp', 'fadeInLeftShort'];
		$.each($('.animatedParent *:not(div, img, .blink)'), function(i, val){
			$(val).addClass('slower animated ' + a_types[i % a_types.length]).attr('data-id', i);
		});
	}
	attach_anim();

	/*setTimeout(function(){ Materialize.toast('<span onclick="go_to(\'promop\');rem_i(\'#toast-container\')">Special Offer</span><a class="btn-flat yellow-text" onclick="rem_i(\'#toast-container\')"> Dismiss<a>', 100000); }, 1000);

	function remove_item(uid) {
		$(uid).html('');
	}
	rem_i = remove_item;*/

});