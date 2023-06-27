const mapImages = document.getElementsByClassName('mapCont');

for (let i = 0; i < mapImages.length; i++) {
	console.log('test');
	mapImages[i].addEventListener('click', plannerify);
}

function plannerify() {
	sessionStorage.setItem('selectedMap', this.children[0].innerHTML);
	window.location.href = 'planner.html';
}