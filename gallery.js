gridItems = document.querySelectorAll('.grid-item');

function autoScroll() {
	gridItems.forEach((item) => {
		for (i = 0; i <= 300; i++) {
			item.style.transform = 'translateY(' + (300 - i) + '%)';
		}
	})	
}

scrollValue = 0;
window.addEventListener('wheel', (event) => {
	scrollValue = Math.max(300, Math.min(480, scrollValue + event.deltaY / 10));
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(' + (300 - scrollValue) + '%)';
	})
	console.log(scrollValue);
})
