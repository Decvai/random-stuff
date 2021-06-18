const board = document.querySelector('#board');
const SQUARES_NUMBER = 550;

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div');
	square.classList.add('square');

	square.addEventListener('mouseover', () => setColor(square));
	square.addEventListener('mouseleave', () => removeColor(square));

	board.append(square);
}

function setColor(el) {
	el.style.backgroundColor = getRandomColor();
	el.style.boxShadow = `0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`;
}

function removeColor(el) {
	el.style.backgroundColor = '#1d1d1d';
	el.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
	const letters = '0123456789ABCDEF'.split('');
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}
