export type Todo = {
	title: string,
	id: string,
	completed: boolean,
	editing: boolean,
}

export type Button = {
	id: string,
	value: string,
	selected: boolean,
}

export type NewTaskFormProps = {
	onAdd(title: string): void
}

export type EditFieldProps = {
	title: string,
	carriedChangeTaskTitle(taskText: string): void,
	onToggleEditing(): void,
}

export type TaskProps = {
	completed: boolean,
	editing: boolean,
	onToggleCompleted(): void,
	onDeleted(): void,
}