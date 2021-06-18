const startBtn = document.querySelector('.start');
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('.time-list');
const leftTime = document.querySelector('#time');
const board = document.querySelector('#board');

let time;
let score = 0;

startBtn.addEventListener('click', e => {
	e.preventDefault();

	screens[0].classList.add('up');
});

timeList.addEventListener('click', e => {
	const timeBtn = e.target.closest('.time-btn');
	if (!timeBtn) return;

	time = parseInt(timeBtn.dataset.time);
	screens[1].classList.add('up');

	startGame();
});

board.addEventListener('click', e => {
	if (e.target.classList.contains('circle')) {
		score++;
		e.target.remove();
		createRandomCircle();
	}
});

function startGame() {
	setTime(time);

	const interval = setInterval(() => handleDecreaseTime(interval), 1000);

	createRandomCircle();
}

function handleDecreaseTime(interval) {
	time--;
	if (time === 0) {
		clearInterval(interval);
		finishGame();
		return;
	}

	if (time < 10) {
		time = `0${time}`;
	}
	setTime(time);
}

function setTime(time) {
	leftTime.textContent = `00:${time}`;
}

function createRandomCircle() {
	const circle = document.createElement('div');
	circle.classList.add('circle');

	const size = getRandomNumber(10, 25);
	circle.style.width = `${size}px`;
	circle.style.height = `${size}px`;

	const { width, height } = board.getBoundingClientRect();
	const x = getRandomNumber(0 + size, width - size);
	const y = getRandomNumber(0 + size, height - size);
	circle.style.top = `${y}px`;
	circle.style.left = `${x}px`;

	circle.style.backgroundColor = getRandomColor();

	board.appendChild(circle);
}

function getRandomNumber(min, max) {
	return Math.round(Math.random() * (max - min) + min);
}

function finishGame() {
	board.innerHTML = `<h1>Score: <span class="primary">${score}</span></h1>`;
	leftTime.parentNode.classList.add('hide');
}

function getRandomColor() {
	const letters = '0123456789ABCDEF'.split('');
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}
