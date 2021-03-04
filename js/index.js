const TODO_LIST = [
	{ title: 'Съесть печеньку 🍪' },
	{ title: 'Изучить React ⚛️' },
	{ title: 'Полить цветы 🌸' },
	{ title: 'Сделать свой сайт 👨‍💻' },
	{ title: 'Погулять в парке 🌳' },
];

const container = document.querySelector('.todo__list');
const todoForm = document.querySelector('.todo__form');
const templateElement = document.querySelector('.template');

function createTaskDomNode(item){
	const newItem = templateElement.content.cloneNode(true);
	const title = newItem.querySelector('.task__name');
	title.textContent = item.title;

	return newItem;
}

function renderList() {
	const result = TODO_LIST.map(createTaskDomNode);

	container.append(...result);
}

function addTaskFormListener(evt) {
	evt.preventDefault();
	const input = todoForm.querySelector('.todo__input');
	const inputTitle = input.value;

	const newTask = createTaskDomNode({ title: inputTitle });
	container.prepend(newTask);

	input.value = '';
}

renderList();
todoForm.addEventListener('submit', addTaskFormListener);
