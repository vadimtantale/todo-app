import React, { useState } from "react";

import './NewTaskForm.css';

export default function NewTaskForm({ onAdded }) {

	const [inputValue, setInputValue] = useState('');

	const onChange = (e) => {
		setInputValue(e.target.value);
	};

	const onEnterTask = (e) => {
		e.preventDefault();
		onAdded(inputValue);
		setInputValue('');
	};


	return (
		<form onSubmit={onEnterTask}>
			<input className="new-todo"
				placeholder="What needs to be done?"
				value={inputValue}
				onChange={onChange}
				autoFocus>
			</input>
		</form>
	);
};