import React from "react";

import './Task.css';

export default function Task({text, id, flag}) {
  const task = <div className="view">
                <input className="toggle" type="checkbox"></input>
                <label>
                  <span className="description">{text}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
              </div>;
  
  const editField = <input type="text"
                           class="edit"
                           value="Editing task">
                    </input>;

  return (
    <li key={id} className={flag}>
      {task}
      {flag === 'editing' ? editField : false}
    </li>
  );
};