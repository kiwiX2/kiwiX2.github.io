diamonds = document.querySelectorAll('.diamond');
textArea = document.getElementsByClassName('phone-link');
runs = 0;
linkArray = ["https://kiwix2.github.io", "gallery.html", "https://kiwix2.github.io"]


function hoverChanges(index) {
	runs++;
	if (isPhone && textArea[index].style.width == '100%' && runs % 2 != 0) {
		diamonds[index].setAttribute('href', linkArray[index]);
	} else {
		textArea[index].style.width = '100%';
		for(i = 0; i < diamonds.length; i++){
			diamonds[i].style.backgroundColor = '#3d4840';
		}
		diamonds[index].style.backgroundColor = 'var(--asparagus)';
		textArea[index].style.opacity = '0.7';
	}
}

function isPhone() {
	if(screen.width	<= 600) {
		return true;
	} else {
		return false;
	}
}

if (isPhone()) {
	for(i = 0; i < diamonds.length; i++) {
		diamonds[i].removeAttribute('href');
	}
}

diamonds.forEach((diamond, index) =>  {
    diamond.addEventListener('touchstart', () => {
		hoverChanges(index);
    });
    diamond.addEventListener('mouseover', () => {
        hoverChanges(index);
    });
    diamond.addEventListener('mouseout', () => {
        for(i = 0; i < diamonds.length; i++){
            diamonds[i].style.backgroundColor = 'var(--ash-gray)';
        }
        textArea[index].style.width = '0%';
        textArea[index].style.opacity = '0';
    });
});