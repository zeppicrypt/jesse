// Using the jquery plugin for the scrolling featrue - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight top while scrolling
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes menu when menu item is clicked
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Shows the CSS animations
new WOW().init();

jQuery(function( $ ){ //Prevent conflict - http://snipplr.com/view/43906/

// Go back to the top
	var scrollDiv = document.createElement("div");
	jQuery(scrollDiv).attr("id", "toTop").attr("data-toggle", "tooltip").attr("data-placement", "left").attr("title", "Back to Top").html("<i class='fa  fa-chevron-up'></i>").appendTo("body");
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() != 0) {
			jQuery("#toTop").fadeIn();
		} else {
			jQuery("#toTop").fadeOut();
		}
	});
	jQuery("#toTop").click(function () {
		jQuery("body,html").animate({
			scrollTop: 0
		},
		800);
	});
  });
