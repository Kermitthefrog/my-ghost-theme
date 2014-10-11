/*! johanjohnasson - v0.1.0 - 2014-10-11
* www.johanjohansson.me 
* Copyright (c) 2014 Johan Johansson; Licensed under the MIT License */
$(document).ready(function() {
	// Load Background Images
	//var images = ['1.jpg', '2.png', 'eng.jpg', 'tog.jpg', 'apple.jpg', 'hav.jpg'];
 	//$("#header").css({
 		//	'background': 'url(assets/img/'
 			//	+ images[Math.floor(Math.random() * images.length)] + ')'
 	//});

  // Qoutes on FrontPage
  function showQuotes() {
    var quotes = [];

    quotes[0] = "Snuff & Coffee is Swedish love";
    quotes[1] = "Love = Oxygen";
    quotes[2] = "Beauty = price";
    quotes[3] = "Keep a business diary";

    var quote = quotes[Math.floor(Math.random() * quotes.length)];

    $('.quote').text(quote).fadeToggle(2000);

    setTimeout(showQuotes, 2000);
}

showQuotes();

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

// mobile
  var $links = $('.overlay');
  var citat = $('.qoute-mobile');

  $('#toggle-menu').on('click',function(e){
    e.preventDefault();

    $(this).toggleClass('x');
    $links.toggleClass('show');

    citat.toggleClass('hidden');
  });
});