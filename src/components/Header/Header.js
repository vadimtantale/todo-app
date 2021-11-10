import React from 'react';
import NewTaskForm from '../NewTaskForm';

import './Header.css';

export default function Header() {
	return (
		<header className="header">
			<h1>todos</h1>
			<NewTaskForm />
		</header>
	);
};