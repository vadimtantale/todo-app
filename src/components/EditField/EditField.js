import React, {useState} from "react";

import './EditField.css';

export default function EditField ({text, carriedChangeItemText, onToggleEditing}) {

	const [state, setState] = useState(text);

	function handleChange(e) {
		setState(!e.target.value.length ? this.props.text : e.target.value);
	};

	function handleSubmit(e) {
		e.preventDefault();
		carriedChangeItemText(state);
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