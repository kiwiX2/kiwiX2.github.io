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

let rotations = [0, 90, 90, 90, 0, 0, 0, 90, 0];
var maps = ['bind', 'haven', 'split', 'ascent', 'fracture', 'pearl', 'lotus', 'icebox', 'breeze'];
function switchSide() {
	for (let i = 0; i < maps.length; i++) {
		if (maps[i] == map.toString()) {
			rotations[i] = rotations[i] + 180;
			mapImage.style.transform = 'rotate(' + rotations[i] + 'deg)';
			return;
		}
	}
}