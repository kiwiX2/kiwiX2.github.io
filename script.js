diamonds = document.getElementsByClassName('diamond');
links = document.getElementsByClassName('link');

function diamondOvr(){
	for(i = 0; i < diamonds.length; i++){
		diamonds[i].style.opacity = 0.5;
	}
	diamonds[a].style.opacity = 1;
	links[a].style.opacity = 0.7;
}

function diamondOut(){
	for(i = 0; i < diamonds.length; i++){
		diamonds[i].style.opacity = 1;
	}
	links[a].style.opacity = 0;
}