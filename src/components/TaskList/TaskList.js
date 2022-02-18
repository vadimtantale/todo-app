import React from "react";
import PropTypes from 'prop-types';

import './TaskList.css';
import Task from '../Task';

function TaskList({ todoData, onToggleCompleted, onDeleted, onToggleEditing, carriedChangeItemText }) {
	const todos = todoData.filter(item => item.visible)
		.map(item => {
			const { id, ...rest } = item;

			return <Task {...rest}
				key={id}
				onToggleCompleted={() => onToggleCompleted(id)}
				onDeleted={() => onDeleted(id)}
				onToggleEditing={() => onToggleEditing(id)}
				carriedChangeItemText={carriedChangeItemText(id)}
			/>;
		});

	return (
		<ul className='todo-list'>
			{todos}
		</ul>
	);
};

TaskList.propTypes = {
	todoData: PropTypes.array,
}

export default TaskList;