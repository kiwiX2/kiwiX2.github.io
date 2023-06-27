const map = sessionStorage.getItem('selectedMap');
const mapCont = document.getElementById('mapCont');

mapImage = document.createElement('div')
mapImage.id = map;
mapCont.appendChild(mapImage)

mapImage.style.height = '75vh';
mapImage.style.aspectRatio = '1/1';
mapImage.style.backgroundSize = 'contain';

const mapImg = document.getElementById('mapImg');
mapImg.classList.add(map + "Icon");
const mapTitle = document.getElementById('mapTitle');
mapTitle.innerHTML = map;

const switchSideBtn = document.getElementById('switchSide');
switchSideBtn.addEventListener('click', switchSide);

function switchSide() {
	
}