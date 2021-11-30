import React from "react";
import EditField from "../EditField";

import './Task.css';

export default function Task({text, completed, editing, onToggleCompleted, onDeleted, onToggleEditing, carriedChangeItemText}) {
   
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
        <input className="toggle" type="checkbox" checked={completed} onChange={onToggleCompleted}></input>
        <label>
          <span className="description">{text}</span>
        </label>
        <button className="icon icon-edit" onClick = { onToggleEditing }></button>
        <button className="icon icon-destroy" onClick = { onDeleted }></button>
      </div>
      {editing && <EditField onToggleEditing = { onToggleEditing }
                             carriedChangeItemText = { carriedChangeItemText }
                             text = { text } />}
    </li>
  );
};