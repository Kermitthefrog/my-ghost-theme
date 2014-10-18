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


  var $document = $(document),
  $element = $('#post-header .primary-navigation'),
  $element2 = $('#header .primary-navigation'),
  className = 'hasScrolled';
  // Fixed Menu > 450 And window.size > 769
  $document.scroll(function() {
    if ($document.scrollTop() >= 450 && ($(window).width() > 769)) {
      $element.css({'position' : 'fixed', 'top' : '0', 'bottom' : 'auto'});
      // Fixed Menu > 950 And window.size > 769
      if ($document.scrollTop() >= 920 && ($(window).width() > 769)) {
        $element2.css({'position' : 'fixed', 'top' : '0', 'bottom' : 'auto'});
      } else {
        $element2.css({'position' : 'absolute', 'top' : 'auto', 'bottom' : '0',});
      }
    }
    else {
      $element.css({'position' : 'absolute', 'top' : 'auto', 'bottom' : '0',});
    }
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