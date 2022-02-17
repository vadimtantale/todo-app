// import React from 'react';
import NewTaskForm from '../NewTaskForm';

import './Header.css';

import { NewTaskFormProps } from '../../types';


export default function Header({onAdd}: NewTaskFormProps) { 
	return (
		<header className="header">
			<h1>todos</h1>
			<NewTaskForm onAdd={onAdd} />
		</header>
	);
};