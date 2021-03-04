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

function deleteTaskHandler(evt) {
	const target = evt.target;
	const currentTask = target.closest('.task');

	currentTask.remove();
}

function duplicateTaskHandler(evt) {
	//найти дом ноду задачи
	const target = evt.target;
	const currentTask = target.closest('.task');

	//создать новую дом ноду задачи передав найденный текст
	const newTask = currentTask.cloneNode(true);

	//навесить на новую задачу обработчики события
	addTaskListeners(newTask);

	//вставить на страницу
	container.prepend(newTask);
}


function addTaskListeners(task) {
	const deleteButton = task.querySelector('.task__btn_delete');
	deleteButton.addEventListener('click', deleteTaskHandler);

	const duplicateButton = task.querySelector('.task__btn_copy');
	duplicateButton.addEventListener('click', duplicateTaskHandler);
}

function createTaskDomNode(item){
	const newItem = templateElement.content.cloneNode(true);
	const title = newItem.querySelector('.task__name');
	title.textContent = item.title;

	return newItem;
}

function renderList() {
	const result = TODO_LIST.map(function(item) {
		const newTask = createTaskDomNode(item);
		addTaskListeners(newTask);
		return newTask;
	});

	container.append(...result);
}

function addTaskFormListener(evt) {
	evt.preventDefault();
	const input = todoForm.querySelector('.todo__input');
	const inputTitle = input.value;

	const newTask = createTaskDomNode({ title: inputTitle });

	addTaskListeners(newTask);

	container.prepend(newTask);

	input.value = '';
}

renderList();
todoForm.addEventListener('submit', addTaskFormListener);
