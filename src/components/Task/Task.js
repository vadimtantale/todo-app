import React from "react";

import './Task.css';

export default function Task({text, flag, onChanged, onDeleted}) {
  const task = <div className="view">
                <input className="toggle" type="checkbox" onChange={onChanged}></input>
                <label>
                  <span className="description">{text}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={onDeleted}></button>
              </div>;
  
  const editField = <input type="text"
                           className="edit"
                           defaultValue="Editing task">
                    </input>;
  
  return (
    <li className={flag}>
      {task}
      {flag === 'editing' ? editField : false}
    </li>
  );
};