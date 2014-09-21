/*! johanjohnasson - v0.1.0 - 2014-09-21
* www.johanjohansson.me 
* Copyright (c) 2014 Johan Johansson; Licensed under the MIT License */
$(document).ready(function() {
	// Load Background Images
	var images = ['1.jpg', '2.png', 'eng.jpg', 'tog.jpg', 'apple.jpg', 'hav.jpg'];
 	$("#header").css({
 			'background': 'url(assets/img/'
 				+ images[Math.floor(Math.random() * images.length)] + ')'
 	});

    // Load Background Images
  var images = ['1.jpg', 'tog.jpg', 'apple.jpg', 'hav.jpg'];
  $("#post-header").css({
      'background': 'url(../assets/img/second-header/'
        + images[Math.floor(Math.random() * images.length)] + ')'
  });


 	$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});




// If scroll is bigger then 200 do menu fixed & add class avtive
  $(function() {
    var header = $(".fixed-menu");
    $(".fixed-menu").addClass("is-hidden");

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll <= 700) {
        header.addClass("is-hidden");
      } else {
          header.removeClass("is-hidden");
      }
    });
  });




});
