gridItems = document.querySelectorAll('.grid-item');


/*-------------------- AUTO SCROLL --------------------*/
function autoScroll() {
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(0%)';
	})	
}


/*-------------------- MANUAL SCROLL --------------------*/
scrollValue = 0;
window.addEventListener('wheel', (event) => {
	scrollValue = Math.max(300, Math.min(480, scrollValue + event.deltaY / 10));
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(' + (300 - scrollValue) + '%)';
	})
})
