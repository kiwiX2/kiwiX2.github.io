gridItems = document.querySelectorAll('.grid-item');
scrollButton = document.getElementById('scroll-button');
homeButton = document.getElementById('home-button');


/*-------------------- BUTTONS FADE-IN --------------------*/
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
	}else if(event.deltaY < 0 && scrollValue <= 350) {
		showButton();
	}
	scrollValue = Math.max(300, Math.min(480, scrollValue + event.deltaY / 2));
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(' + (300 - scrollValue) + '%)';
	})
})


/*-------------------- BUTTON SCROLL & TOGGLE --------------------*/
scrollButton.addEventListener('click', buttonScroll);
scrollButton.addEventListener('click', hideButton);

function buttonScroll() {
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(-180%)';
		scrollValue = 480;
	})
}

function hideButton() {
	scrollButton.style.opacity = '0';
	setTimeout(function() {
    	scrollButton.style.visibility = 'hidden';
	}, 500);
}

function showButton() {
	scrollButton.style.visibility = 'visible';
	scrollButton.style.opacity = '1';
}