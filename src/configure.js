const $ = require('jquery');
const bootstrap = require('bootstrap')

module.exports = function() {
	$('#main').scroll(function(){
		let st = $(window).scrollTop() - $('#scroll_to_see').offset().top;
	    if (st > -285){
	    	$('#scroll_to_see').addClass('animated fadeOut');
	    }
	})

	$(document).ready(function() {
	  $('[data-toggle="tooltip"]').tooltip();
	})
}
