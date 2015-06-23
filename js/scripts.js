// Smooth Scroll to internal links

$('.smooth-scroll').smoothScroll({
  speed: 800,
  offset: -68
});

//Easy Tabs
$('#tab-container').easytabs({
	animate: true,
	animationSpeed: 1000,
});

//Dropwdown
$(".navbar-collapse a").click(function() {
    $(this).closest(".navbar-collapse collapse").prev().dropdown("toggle");
});
