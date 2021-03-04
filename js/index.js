const TODO_LIST = [
	{ title: 'Съесть печеньку 🍪' },
	{ title: 'Изучить React ⚛️' },
	{ title: 'Полить цветы 🌸' },
	{ title: 'Сделать свой сайт 👨‍💻' },
	{ title: 'Погулять в парке 🌳' },
];

const container = document.querySelector('.todo__list');

function renderList() {
	const result = TODO_LIST.map(function(item) {
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
	}).join('');

	container.insertAdjacentHTML('afterbegin', result);
}

renderList();
