import React, {useState} from "react";

import './NewTaskForm.css';

export default function NewTaskForm({onAdded}) {

	const [state, setState] = useState('');

	const onChange = (e) => {
		setState(e.target.value);
	};

	const onEnterTask = (e) => {
		e.preventDefault();
		onAdded(state);
		setState('');
	};


	return (
		<form onSubmit={onEnterTask}>
			<input className="new-todo"
							placeholder="What needs to be done?"
							value={state}
							onChange={onChange}
							autoFocus>
			</input>
		</form>
	);
};