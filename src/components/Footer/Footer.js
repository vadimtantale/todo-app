import React from "react";
import TasksFilter from "../TasksFilter/TasksFilter";

import './Footer.css';

export default function Footer({ onFiltered, deleteItem, todoData }) {
	const clearCompleted = (todoData) => {
		todoData.forEach(item => {
			item.completed && deleteItem(item.id);
		});
	};

	const countActiveTask = todoData.reduce((acc, item) => {
		if (item.completed) return acc;
		return ++acc;
	}, 0);

	return (
		<footer className="footer">
			<span className="todo-count">{countActiveTask} items left</span>
			<TasksFilter onFiltered = { onFiltered } />
			<button className="clear-completed"
							onClick={() => clearCompleted(todoData)}>
				Clear completed
			</button>
		</footer>
	);
};																		