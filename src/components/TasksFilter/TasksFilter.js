import React, {useState} from "react";
import FilterButtons from "../FilterButtons";

import './TasksFilter.css';

export default function TasksFilter({onFiltered}) {

	const [state, setState] = useState([
		{id: 'all', value: 'All', selected: true},
		{id: 'active', value: 'Active', selected: false},
		{id: 'completed', value: 'Completed', selected: false},
	]);

	const handleClick = (id) => {
		setState((state) => {
			return state.map(item => {
					return {...item, selected: id === item.id ? true : false}
				});
		});
		onFiltered(id);
	};

	const buttons = state.map(item => {
		const {id, ...rest} = item;
		
		return <FilterButtons {...rest}
													key={id}
													onToggleFilter={() => handleClick(id)}
						/>
	});

	return (
		<ul className="filters">
			{buttons}
		</ul>
	);

};