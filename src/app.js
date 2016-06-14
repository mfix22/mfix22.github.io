/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

$('#main').scroll(function(){
	var st = $(window).scrollTop() - $('#scroll_to_see').offset().top;

    console.log(st);
    if (st > -450){
    	//document.getElementById('scroll_to_see').style.visibility="hidden";
    	$('#scroll_to_see').addClass('animated fadeOut');
    }
});
