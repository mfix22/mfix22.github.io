const $ = require('jquery');
const bootstrap = require('bootstrap')

module.exports = function() {
	$(document).ready(function() {
	  $('[data-toggle="tooltip"]').tooltip();
	})
}
