import React from "react";

import './TaskList.css';
import Task from '../Task';

export default function TaskList({todoData}) {
	const todos = todoData.map(item => {
		return <Task {...item} />;
	})

	return (
		<ul className='todo-list'>
			{todos}
		</ul>
	);
};