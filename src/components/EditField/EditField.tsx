import React, { useState } from "react";

import './EditField.css';

import { EditFieldProps } from "../../types";

export default function EditField({ title, carriedChangeTaskTitle, 
																		onToggleEditing }: EditFieldProps) {

	const [taskTitle, setTaskTitle] = useState<string>(title);

	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setTaskTitle(!e.target.value.length ? title : e.target.value);
	};

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		carriedChangeTaskTitle(taskTitle);
		onToggleEditing();
	}


	return (
		<form onSubmit={handleSubmit}>
			<input type="text"
				className="edit"
				placeholder="Editing task"
				onChange={handleChange}
				autoFocus>
			</input>
		</form>
	);
};