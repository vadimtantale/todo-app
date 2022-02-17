import React from "react";
import FilterButtons from "../FilterButtons";

import './TasksFilter.css';

export default function TasksFilter({ buttons, setButtons }) {

	const handleClick = (id) => {
		setButtons(buttons => {
			return buttons.map(item => {
				return { ...item, selected: id === item.id ? true : false }
			});
		});
	};

	const filterButtons = buttons.map(item => {
		const { id, ...rest } = item;

		return <FilterButtons {...rest}
			key={id}
			onToggleFilter={() => handleClick(id)}
		/>
	});

	return (
		<ul className="filters">
			{filterButtons}
		</ul>
	);

};