gridItems = document.querySelectorAll('.grid-item');

function autoScroll() {
	gridItems.forEach((item) => {
		for (i = 0; i <= 300; i++) {
			item.style.transform = 'translateY(' + (300 - i) + '%)';
		}
	})	
}
