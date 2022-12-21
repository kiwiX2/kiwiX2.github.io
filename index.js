diamonds = document.querySelectorAll('.diamond');
textArea = document.querySelectorAll('.text-slider');
runs = 0;
linkArray = ["gallery.html", "gallery.html", "gallery.html"]


/*-------------------- CHANGES TO LINK ELEMENTS --------------------*/
function hoverChanges(index) {
	runs++;
	if (isPhone && textArea[index].style.width == '100%' && runs % 2 != 0) {
		diamonds[index].setAttribute('href', linkArray[index]);
	} else {
		textArea[index].style.width = '100%';
		for(i = 0; i < diamonds.length; i++){
			diamonds[i].style.backgroundColor = 'var(--dark-pink)';
		}
		diamonds[index].style.backgroundColor = 'var(--light-pink)';
		textArea[index].style.opacity = '0.7';
	}
}

/*-------------------- PHONE COMPATIBILITY --------------------*/
function isPhone() {
  if (window.matchMedia("(max-width: 1000px) and (max-height: 1000px)").matches) {
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


/*-------------------- FUNCTION CALL --------------------*/
diamonds.forEach((diamond, index) =>  {
    diamond.addEventListener('touchstart', () => {
		hoverChanges(index);
    });
    diamond.addEventListener('mouseover', () => {
        hoverChanges(index);
    });
    diamond.addEventListener('mouseout', () => {
        for(i = 0; i < diamonds.length; i++){
            diamonds[i].style.backgroundColor = 'var(--pink)';
        }
        textArea[index].style.width = '0%';
        textArea[index].style.opacity = '0';
    });
});