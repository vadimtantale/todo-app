import React from "react";

import './TaskList.css';
import Task from '../Task';

export default function TaskList({todoData, onToggleCompleted, onDeleted, onToggleEditing, carriedChangeItemText}) {
	const todos = todoData.filter(item => item.visible)
												.map(item => {
		const {id, ...rest} = item;

		return <Task {...rest} 
									key={id}
									onToggleCompleted = {() => onToggleCompleted( id )}
									onDeleted = {() => onDeleted( id )}
									onToggleEditing = {() => onToggleEditing( id )}
									carriedChangeItemText = { carriedChangeItemText(id) }
						/>;
	});

	return (
		<ul className='todo-list'>
			{todos}
		</ul>
	);
};