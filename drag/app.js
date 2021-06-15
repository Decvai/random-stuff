const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', onDragStart);
item.addEventListener('dragend', onDragEnd);

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', onDragOver);
	placeholder.addEventListener('dragenter', onDragEnter);
	placeholder.addEventListener('dragleave', onDragLeave);
	placeholder.addEventListener('drop', onDragDrop);
}

function onDragStart(event) {
	event.target.classList.add('hold');
	setTimeout(() => {
		event.target.classList.add('hide');
	}, 0);
}

function onDragEnd(event) {
	event.target.classList.remove('hold', 'hide');
}

function onDragOver(event) {
	event.preventDefault();
}

function onDragEnter(event) {
	event.target.classList.add('hovered');
}

function onDragLeave(event) {
	event.target.classList.remove('hovered');
}

function onDragDrop(event) {
	event.target.classList.remove('hovered');
	event.target.append(item);
}
