import React from "react";

import './FilterButtons.css';

export default function FilterButtons({value, selected, onToggleFilter}) {

	const getClassName = () => {
		return selected ? 'selected' : '';
  }

	return (
		<li>
			<button	onClick={onToggleFilter}
							className={getClassName()}>
							{value}
			</button>
		</li>
	);
};