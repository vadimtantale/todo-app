import React, { useState } from "react";

import './NewTaskForm.css';

import { NewTaskFormProps } from "../../types";


export default function NewTaskForm({onAdd}: NewTaskFormProps) {

	const [inputValue, setInputValue] = useState<string>('');

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const enterTaskHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onAdd(inputValue);
		setInputValue('');
	};


	return (
		<form onSubmit={enterTaskHandler}>
			<input className="new-todo"
				placeholder="What needs to be done?"
				value={inputValue}
				onChange={changeHandler}
				autoFocus>
			</input>
		</form>
	);
};