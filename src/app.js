// node modules
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');
var classnames = require('classnames');
// local modules
var PROJECTS = require('./projects');
var MiloCard = require('./MiloCard');

for (var i in PROJECTS){
  var p = PROJECTS[i];
  ReactDOM.render(
    <MiloCard desc={p.desc} link={p.link} img={p.img} header={p.header}/>,
    document.getElementById(p.id)
  )
}

$('#main').scroll(function(){
	var st = $(window).scrollTop() - $('#scroll_to_see').offset().top;
    if (st > -450){
    	//document.getElementById('scroll_to_see').style.visibility="hidden";
    	$('#scroll_to_see').addClass('animated fadeOut');
    }
});
