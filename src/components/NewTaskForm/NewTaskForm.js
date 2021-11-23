import React, { Component } from "react";

import './NewTaskForm.css';

export default class NewTaskForm extends Component {

	state = {
		value: '',
	};

	onChange = (e) => {
		this.setState({
			value: e.target.value,
		});
	};

	onEnterTask = (e) => {
		e.preventDefault();
		this.props.onAdded('Руддщ'); //проблема начинается тут
		this.setState({
			value: ''
		});
	};

	render() {
		return (
			<form onSubmit={this.onEnterTask}>
				<input className="new-todo"
							 placeholder="What needs to be done?"
							 value={this.state.value}
							 onChange={this.onChange}
							 autoFocus>
				</input>
			</form>
		);
	}
};