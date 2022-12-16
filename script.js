diamonds = document.querySelectorAll('.diamond');
links = document.getElementsByClassName('phone-link');

mediaQuery = window.matchMedia('(hover: none)');
console.log(mediaQuery);
if (mediaQuery.matches) {
  	for(i = 0; i < links.length; i++){
		diamonds[i].setAttribute('disabled', 'disabled');
	};
} else {
	for(i = 0; i < links.length; i++){
		links[i].setAttribute('disabled', 'disabled');
	}
}

diamonds.forEach((diamond, index) =>  {
    diamond.addEventListener('mouseover', () => {
        links[index].style.width = '100%';
		for(i = 0; i < diamonds.length; i++){
			diamonds[i].style.opacity = '0.5';
		}
		diamonds[index].style.opacity = '1';
		links[index].style.opacity = '0.7';
    });
	diamond.addEventListener('mouseout', () => {
		for(i = 0; i < diamonds.length; i++){
			diamonds[i].style.opacity = '1';
		}
		links[index].style.width = '0%';
		links[index].style.opacity = '0';
	});
});
