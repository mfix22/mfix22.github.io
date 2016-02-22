document.getElementById('main').appendChild

var stars = []
for(var i = 0; i <84; i++){
	var left = 0;
	var topD = 0;
	left = Math.floor((Math.random() * 90) + 5);
	topD = Math.floor((Math.random() * 90) + 5);
	// while (true){
	// 	left = Math.floor((Math.random() * 94) + 2);
	// 	topD = Math.floor((Math.random() * 90) + 5);
	// 	if ((left < 5 || left > 35	) || (topD < 5 || topD > 90)) 
	// 		break;
	// }		
	var star = document.createElement('img');
	stars.push(star);
	star.setAttribute('src','img/star.png');
	star.setAttribute('class', 'star');
	star.style.top = topD + "%";
	star.style.left = left + "%";
	var deg = Math.floor((Math.random() * 360));
	star.style.transform = "rotate(" + deg + "deg)";
	
	document.getElementById('main').appendChild(star);
	
}
// $("#main").append('<img src="star.png"/>');