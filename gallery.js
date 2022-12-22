gridItems = document.querySelectorAll('.grid-item');
slideContainer = document.getElementById('slide-container');
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
		animateButton(passThrough = 0);
	} else if(event.deltaY > 0 && scrollValue == 450) {
		animateButton(passThrough = 1);
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
		animateButton(passThrough = 1);
	} else {
		reverseButtonScroll();
		animateButton(passThrough = 0);
	}
}

function animateButton(passThrough) {
	scrollI.style.opacity = '0';
	scrollButton.style.transform = 'scaleX(0.5) translateY(' + (-88 * passThrough) + 'vh)';
	setTimeout(function() {
		scrollButton.style.transform = 'scaleX(1) translateY(' + (-88 * passThrough) + 'vh)';
		scrollI.style.opacity = '1';
		scrollI.style.rotate = (180 * passThrough) + 'deg';
	}, 200);
	if(passThrough == 1) {
		slideIn(slideDir = 0);
	}
	if(passThrough == 0) {
		slideIn(slideDir = 1);
	}
} 

function slideIn() {
	setTimeout(function() {
		slideContainer.style.transform = 'translateY(' + (100 * slideDir) + 'vh)';
	}, 850 * passThrough);
}
