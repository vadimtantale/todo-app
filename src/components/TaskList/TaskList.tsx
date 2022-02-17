import React from "react";

import './TaskList.css';
import Task from '../Task';

export default function TaskList({ todoData, onToggleCompleted, onDeleted,
	onToggleEditing, carriedChangeTaskTitle, buttons }) {

	const filterCallback = () => {
		const selectedButton = buttons.filter(i => i.selected).reduce((acc, i) => acc + i.id, '');
		const callbacks = {
			all: () => true,
			active: item => !item.completed,
			completed: item => item.completed,
		}
		return callbacks[selectedButton];
	}

	const todos = todoData
		.filter(filterCallback())
		.map(item => {
			const { id, ...rest } = item;
			const handlerOnToggleCompleted = () => onToggleCompleted(id);
			const handlerOnDeleted = () => onDeleted(id);
			const handlerOnToggleEditing = () => onToggleEditing(id);

			return <Task {...rest}
				key={id}
				onToggleCompleted={handlerOnToggleCompleted}
				onDeleted={handlerOnDeleted}
				onToggleEditing={handlerOnToggleEditing}
				carriedChangeTaskTitle={carriedChangeTaskTitle(id)}
			/>;
		});

	return (
		<ul className='todo-list'>
			{todos}
		</ul>
	);
};