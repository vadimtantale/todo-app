import React from "react";

import './TaskList.css';
import Task from '../Task';

export default function TaskList({todoData, onChanged, onDeleted}) {
	const todos = todoData.map(item => {
		const {id, ...otherProperties} = item;
		return <Task {...otherProperties} 
									key={id}
									onChanged = {() => onChanged(id)}
									onDeleted = {() => onDeleted(id)} />;
	});

	return (
		<ul className='todo-list'>
			{todos}
		</ul>
	);
};