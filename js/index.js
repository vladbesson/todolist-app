const TODO_LIST = [
	{ title: 'Съесть печеньку 🍪' },
	{ title: 'Изучить React ⚛️' },
	{ title: 'Полить цветы 🌸' },
	{ title: 'Сделать свой сайт 👨‍💻' },
	{ title: 'Погулять в парке 🌳' },
];

const container = document.querySelector('.todo__list');
const todoForm = document.querySelector('.todo__form');

function createTaskHTMLString(item) {
	return `
			<li class="todo__item task">
				<div class="task__info">
					<p class="task__name">${item.title}️</p>
				</div>
				<div class="task__controls">
					<button class="task__btn task__btn_copy" type="button"><img src="./images/duplicate-icon.svg" width="25" height="25" alt="Копировать"></button>
					<button class="task__btn task__btn_delete" type="button"><img src="./images/delete-icon.svg" width="18" height="17" alt="Удалить"></button>
				</div>
			</li>
		`;
};

function renderList() {
	const result = TODO_LIST.map(createTaskHTMLString).join('');

	container.insertAdjacentHTML('afterbegin', result);
}

function addTaskFormListener(evt) {
	evt.preventDefault();
	const input = todoForm.querySelector('.todo__input');
	const inputTitle = input.value;

	const newTask = createTaskHTMLString({ title: inputTitle });
	container.insertAdjacentHTML('afterbegin', newTask);

	input.value = '';
}

renderList();
todoForm.addEventListener('submit', addTaskFormListener);
