gridItems = document.querySelectorAll('.grid-item');
scrollI = document.getElementById('scroll-I');
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
	if(event.deltaY < 0 && scrollValue <= 350) {
		reverseAnimateButton();
	} else if(event.deltaY > 0 && scrollValue == 450) {
		animateButton();
	}
	scrollValue = Math.max(300, Math.min(450, scrollValue + event.deltaY / 2));
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(' + (300 - scrollValue) + 'vh)';
	})
})


/*-------------------- BUTTON SCROLL & TOGGLE --------------------*/
scrollButton.addEventListener('click', buttonScroll);
scrollButton.addEventListener('click', scrollButtonAnimate);

function buttonScroll() {
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(-110vh)';
		scrollValue = 450;
	})
}

function reverseButtonScroll() {
	gridItems.forEach((item) => {
		item.style.transform = 'translateY(0%)';
		scrollValue = 300;
	})
}

function scrollButtonAnimate() {
	if (scrollI.style.rotate == '' || scrollI.style.rotate == '0deg') {
		animateButton();
	} else {
		reverseButtonScroll();
		reverseAnimateButton();
	}
}

function animateButton() {
	scrollI.style.opacity = '0';
	scrollButton.style.transform = 'scaleX(0.5) translateY(-88vh)';
	setTimeout(function() {
		scrollButton.style.transform = 'scaleX(1) translateY(-88vh)';
		scrollI.style.opacity = '1';
		scrollI.style.rotate = '180deg';
	}, 200);
} 

function reverseAnimateButton() {
	scrollI.style.opacity = '0';
	scrollButton.style.transform = 'scaleX(0.5) translateY(0%)';
	setTimeout(function() {
		scrollButton.style.transform = 'scaleX(1) translateY(0%)';
		scrollI.style.opacity = '1';
		scrollI.style.rotate = '0deg';
	}, 200);
}
