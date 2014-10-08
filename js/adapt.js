// Script for adaptable content on the main page

var update = function(ctype) {
	// Reinitialize
	$(".menuitem").removeClass("bold");
	$('.content').removeClass('show')

	// Toggle selected element
	$("#menu" + ctype).addClass("bold");
	$("#" + ctype).addClass("show");
};

d3.select("#menulocalgovs")
	.on("mouseover", function() {
		update('localgovs');
	});

d3.select("#menuabout")
	.on("mouseover", function() {
		console.log('update about');
		update('about');
	});

d3.select("#menudata")
	.on("mouseover", function() {
		update('data');
	});

update('localgovs');