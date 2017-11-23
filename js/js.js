jQuery(document).ready(function($){
	// How long until button appears
	//var offset = 500,
		//scroll speed
		scroll_top_duration = 500,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	$(window).scroll(function() {
	   var hT = $('#begin').offset().top,
	       hH = $('#begin').outerHeight(),
	       wH = $(window).height(),
	       wS = $(this).scrollTop();
	    console.log((hT-wH) , wS);
	   if (wS > (hT+hH-wH)){
	     $back_to_top.removeClass('cd-is-visible cd-fade-out');
	   }
	});

$(window).scroll(function() {
   var hT = $('#middle').offset().top,
       hH = $('#middle').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     $back_to_top.addClass('cd-is-visible');
   }
});

$(window).scroll(function() {
   var hT = $('#bottom').offset().top,
       hH = $('#bottom').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   if (wS > (hT+hH-wH)){
     $back_to_top.addClass('cd-fade-out');
   }
});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});
