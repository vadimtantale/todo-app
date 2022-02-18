import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import EditField from "../EditField";

import './Task.css';

function Task({ text, completed, editing, date, onToggleCompleted, onDeleted, onToggleEditing, carriedChangeItemText }) {

  const getClassName = () => {
    if (completed) {
      return 'completed';
    }

    if (editing) {
      return 'editing';
    }
  }

  const createdAgo = () => formatDistanceToNow(date, { includeSeconds: true, addSuffix: true });

  const [creationTime, setCreationTime] = useState(createdAgo());

  useEffect(() => {
    setInterval(() => setCreationTime(createdAgo()), 10000);
  });

  return (
    <li className={getClassName()}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onToggleCompleted}></input>
        <label>
          <span className="description">{text}</span>
          <span className="created">created {creationTime}</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEditing}></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
      {editing && <EditField onToggleEditing={onToggleEditing}
        carriedChangeItemText={carriedChangeItemText}
        text={text} />}
    </li>
  );
};

Task.propTypes = {
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  date: PropTypes.object,
  onToggleCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
}

export default Task;