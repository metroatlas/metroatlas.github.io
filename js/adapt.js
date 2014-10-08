// Script for adaptable content on the main page

var update = function(ctype) {
	// Reinitialize
	$(".menuitem").removeClass("bold");
	$('.content').removeClass('show')

	// Toggle selected element
	$("#menu" + ctype).addClass("bold");
	$("#" + ctype).addClass("show");
};

$("#menulocalgovs").mouseover(function() {
	update('localgovs');
});

$("#menuabout").mouseover(function() {
	update('about');
});

$("#menudata").mouseover(function() {
	update('data');
});