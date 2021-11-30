import React, {Component} from "react";

import './EditField.css';

export default class EditField extends Component {

	state = {
		value: this.props.text,
	};

	handleChange = (e) => {
		this.setState({
			value: !e.target.value.length ? this.props.text : e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.carriedChangeItemText(this.state.value);
		this.props.onToggleEditing();
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text"
							 className="edit"
							 placeholder="Editing task"
							 onChange={this.handleChange}
							 autoFocus>
				</input>
			</form>
		);
	};
};