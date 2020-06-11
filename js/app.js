var DOMstrings = {
	counter: '#counter',
	prevBtn: '.prevBtn',
	nextBtn: '.nextBtn',
};
var counter = 0;

document.querySelector(DOMstrings.nextBtn).addEventListener('click', printMessageUp);
document.querySelector(DOMstrings.prevBtn).addEventListener('click', printMessageDown);

function printMessageUp() {
	event.preventDefault();
	counter++;
	document.querySelector(DOMstrings.counter).textContent = counter;
}

function printMessageDown() {
	event.preventDefault();
	if (counter > 0) {
		counter--;
		document.querySelector(DOMstrings.counter).textContent = counter;
	}
}
