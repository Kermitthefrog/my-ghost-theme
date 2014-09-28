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
    var nav = $("#primary-navigation");
    $(".fixed-menu").addClass("is-hidden");

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();

      if (scroll <= 730) {
       // header.addClass("is-hidden");
        nav.removeClass("fixed");
      } else {
         // header.removeClass("is-hidden");
          nav.addClass("fixed");
      }
    });
  });

// mobile
  var $links = $('.menu');
  var citat = $('.qoute-mobile');

  $('#toggle-menu').on('click',function(e){
    e.preventDefault();

    $(this).toggleClass('x');
    $links.toggleClass('show');

    citat.toggleClass('hidden');
  });

  preload();

  $('.rollover').on('mouseenter',function(){
    switchSrc($(this));
  })

  $('.rollover').on('mouseleave',function(){
    switchSrc($(this));
  })


});
