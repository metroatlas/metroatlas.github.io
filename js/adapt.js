// Script for adaptable content on the main page

var update = function(ctype) {

	var url = document.URL + 'content/' + ctype + '.html'
	console.log(url);
	var txt = $.get(url, function(data) {
		$(".menuitem").removeClass("bold");
		$("#" + ctype).addClass("bold");
		$("#content").html(data);
	});
};

d3.select("#localgovs")
	.on("mouseover", function() {
		update('localgovs');
	});

d3.select("#about")
	.on("mouseover", function() {
		update('about');
	});

d3.select("#data")
	.on("mouseover", function() {
		update('data');
	});

update('about');