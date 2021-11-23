import React from "react";

import './TaskList.css';
import Task from '../Task';

export default function TaskList({todoData, onToggleCompleted, onDeleted, onToggleEditing}) {
	const todos = todoData.map(item => {
		const {id, ...rest} = item;

		return <Task {...rest} 
									key={id}
									onToggleCompleted = {() => onToggleCompleted( id )}
									onDeleted = {() => onDeleted( id )}
									onToggleEditing = {() => onToggleEditing( id )}
						/>;
	});

	return (
		<ul className='todo-list'>
			{todos}
		</ul>
	);
};