// node modules
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var classnames = require('classnames');
// local modules
var PROJECTS = require('../assets/projects');
var C = require('../assets/company_logos');
var MiloCard = require('./MiloCard');
var PlanetCard = require('./PlanetCard');
var HorizontalIconList = require('./HorizontalIconList');
var bootstrap = require('../css/bootstrap.min.css');
var bootstrap_theme = require('../css/bootstrap-theme.min.css');
var animate_css = require('../css/animate.css');
var set1_css = require('../css/set1.css');
var normalize_css  = require('../css/normalize.css');
// var styles = require('../scss/index.scss');



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

$(".planet_container").hover(function() {
  // $(this).parent().siblings(".planet_caption").css('visibility', function(i, visibility) {
  $(".planet_caption", this).css('visibility', function(i, visibility) {
    return (visibility == 'visible') ? 'hidden' : 'visible';
  });
});

$('#main').scroll(function(){
	var st = $(window).scrollTop() - $('#scroll_to_see').offset().top;
    if (st > -450){
    	//document.getElementById('scroll_to_see').style.visibility="hidden";
    	$('#scroll_to_see').addClass('animated fadeOut');
    }
});
