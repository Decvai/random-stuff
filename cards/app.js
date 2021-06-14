const slideContainer = document.querySelector('.slide-container');
let currentSlide = null;

const slides = document.querySelectorAll('.slide');
slides.forEach(slide => {
	if (slide.classList.contains('active')) {
		currentSlide = slide;
	}
});

slideContainer.addEventListener('click', onSlideClickHandler);

function onSlideClickHandler(event) {
	const target = event.target;

	const slide = target.closest('.slide');
	if (!slide) return;

	if (currentSlide) {
		currentSlide.classList.remove('active');
	}

	slide.classList.add('active');
	currentSlide = slide;
}
