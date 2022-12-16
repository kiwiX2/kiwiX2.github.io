diamonds = document.querySelectorAll('.diamond');
textArea = document.getElementsByClassName('phone-link');

function hoverChanges(index) {
	textArea[index].style.width = '100%';
	for(i = 0; i < diamonds.length; i++){
		diamonds[i].style.opacity = '0.5';
	}
	diamonds[index].style.opacity = '1';
	textArea[index].style.opacity = '0.7';
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
	diamond.addEventListener('ontouchstart', () => {
		hoverChanges(index);
	});
    diamond.addEventListener('mouseover', () => {
        hoverChanges(index);
    });
	diamond.addEventListener('mouseout', () => {
		for(i = 0; i < diamonds.length; i++){
			diamonds[i].style.opacity = '1';
		}
		textArea[index].style.width = '0%';
		textArea[index].style.opacity = '0';
	});
});

textArea.forEach((textArea, index) => {
	textArea.addEventListener('ontouchstart', () => {
		hoverChanges(index);
	})
});