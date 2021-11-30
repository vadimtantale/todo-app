import React, {Component} from "react";
import FilterButtons from "../FilterButtons";

import './TasksFilter.css';

export default class TasksFilter extends Component {

	state = {
		buttonData: [
			{id: 'all', value: 'All', selected: true},
			{id: 'active', value: 'Active', selected: false},
			{id: 'completed', value: 'Completed', selected: false},
		]
	}

	handleClick = (id) => {
		this.setState(({buttonData}) => {
			return {
				buttonData: buttonData.map(item => {
					return {...item, selected: id === item.id ? true : false}
				}),
			};
		});
		this.props.onFiltered(id);
	};
//Почему при рендере не обновляется массив баттон, если он объявлен в классе, а не в функции рендера?????????????????????????????????
	render() {
		const buttons = this.state.buttonData.map(item => {
			const {id, ...rest} = item;
			
			return <FilterButtons {...rest}
														key={id}
														onToggleFilter={() => this.handleClick(id)}
						 />
		});
	
		return (
			<ul className="filters">
				{buttons}
			</ul>
		);
	};
};