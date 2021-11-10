import React from "react";

import './NewTaskForm.css';

export default function NewTaskForm() {
	return (
		<input className="new-todo"
					 placeholder="What needs to be done?"
					 autofocus>
		</input>
	);
};