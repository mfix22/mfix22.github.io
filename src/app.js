// node modules
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var classnames = require('classnames');
var bootstrap = require('bootstrap');
// local modules
var PROJECTS = require('../assets/projects');
var C = require('../assets/company_logos');
var MiloCard = require('./MiloCard');
var PlanetCard = require('./PlanetCard');
var HorizontalIconList = require('./HorizontalIconList');



var builtWith = [C.REACT, C.SASS, C.BOOTSTRAP, C.JS, C.HTML, C.CSS, C.ATOM]
ReactDOM.render(
  <HorizontalIconList icons={builtWith}/>,
  document.getElementById('footer-icons')
);

for (var i in PROJECTS){
  var p = PROJECTS[i];
  ReactDOM.render(
    <PlanetCard desc={p.desc} moon={p.moon} link={p.link} img={p.img} header={p.header} technologies={p.technologies}/>,
    document.getElementById(p.id)
  );
}

$('#main').scroll(function(){
	var st = $(window).scrollTop() - $('#scroll_to_see').offset().top;
  // console.log(st);
    if (st > -285){
    	//document.getElementById('scroll_to_see').style.visibility="hidden";
    	$('#scroll_to_see').addClass('animated fadeOut');
    }
});


$('[data-toggle="tooltip"]').tooltip();
