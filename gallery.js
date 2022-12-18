gridItems = document.querySelectorAll('.grid-item');
scrollButton = document.getElementById('scroll-button');
homeButton = document.getElementById('home-button');

setTimeout(function() {
    	scrollButton.style.opacity = '1';
    	homeButton.style.opacity = '1';
}, 2000);

/*-------------------- AUTO SCROLL --------------------*/
function autoScroll() {
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(0%)';
	})	
}


/*-------------------- MANUAL SCROLL --------------------*/
scrollValue = 300;
window.addEventListener('wheel', (event) => {
	if (event.deltaY > 0) {
		hideButton();
	}
	console.log(scrollValue);
	scrollValue = Math.max(300, Math.min(480, scrollValue + event.deltaY / 2));
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(' + (300 - scrollValue) + '%)';
	})
})

function hideButton() {
	scrollButton.style.opacity = '0';
	setTimeout(function() {
    	scrollButton.style.visibility = 'hidden';
	}, 500);
}