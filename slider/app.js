const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;

let activeSlideIndex = 0;

mainSlide.style.top = `-${slidesCount - activeSlideIndex - 1}00vh`;

upBtn.addEventListener('click', () => {
	changeSlide('up');
});
downBtn.addEventListener('click', () => {
	changeSlide('down');
});

document.addEventListener('keydown', e => {
	const key = e.key;

	if (key === 'ArrowUp') {
		changeSlide('up');
	} else if (key === 'ArrowDown') {
		changeSlide('down');
	}
});

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;

		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;

		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1;
		}
	}

	mainSlide.style.transform = `translateY(${activeSlideIndex}00vh)`;
	sidebar.style.transform = `translateY(-${activeSlideIndex}00vh)`;
}
