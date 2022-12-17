gridItems = document.querySelectorAll('.grid-item');
scrollValue = 0;

window.addEventListener('wheel', (event) => {
	scrollValue = Math.max(0, Math.min(300, scrollValue + event.deltaY / 10));
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(' + (300 - scrollValue) + '%)';
	})
	console.log(scrollValue);
})