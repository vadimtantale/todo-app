import React from "react";
import EditField from "../EditField";

import './Task.css';

import { TaskProps, EditFieldProps } from "../../types";

export default function Task({title, completed, editing, onToggleCompleted, onDeleted,
                              onToggleEditing, carriedChangeTaskTitle}: TaskProps | EditFieldProps) {
   
  const getClassName = () => {
    if (completed) {
      return 'completed';
    }
  
    if (editing) {
      return 'editing';
    }
  }

  return (
    <li className={getClassName()}>
      <div className="view">
        <input className="toggle" type="checkbox" 
               checked={completed} onChange={onToggleCompleted}></input>
        <label>
          <span className="description">{title}</span>
        </label>
        <button className="icon icon-edit" onClick = { onToggleEditing }></button>
        <button className="icon icon-destroy" onClick = { onDeleted }></button>
      </div>
      {editing && <EditField onToggleEditing = { onToggleEditing }
                             carriedChangeTaskTitle = { carriedChangeTaskTitle }
                             title = { title } />}
    </li>
  );
};