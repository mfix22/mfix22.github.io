// node modules
const React = require('react');
const ReactDOM = require('react-dom');
const $ = require('jquery');
const classnames = require('classnames');
// local modules
const bootstrap = require('bootstrap')
const C = require('../assets/company_logos');
const MiloCard = require('./MiloCard');
const Projects = require('./Projects');

const HorizontalIconList = require('./HorizontalIconList');

ReactDOM.render(
  <HorizontalIconList
    icons={[C.REACT, C.SASS, C.BOOTSTRAP, C.JS, C.HTML, C.CSS, C.ATOM]}
  />,
  document.getElementById('footer-icons')
);

ReactDOM.render(
  <Projects />,
  document.getElementById('app')
)

$('#main').scroll(function(){
	let st = $(window).scrollTop() - $('#scroll_to_see').offset().top;
    if (st > -285){
    	$('#scroll_to_see').addClass('animated fadeOut');
    }
});

$(document).ready(function() {
  $('[data-toggle="tooltip"]').tooltip();
})
