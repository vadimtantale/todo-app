import React from "react";
import TasksFilter from "../TasksFilter/TasksFilter";

import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer">
			<span className="todo-count">1 items left</span>
			<TasksFilter />
			<button className="clear-completed">Clear completed</button>
		</footer>
	);
};																		