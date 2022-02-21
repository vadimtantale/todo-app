import React, { useEffect, useState } from 'react'
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import EditField from '../EditField'

import './Task.css';

function Task({
  text,
  completed,
  editing,
  date,
  onToggleCompleted,
  onDeleted,
  onToggleEditing,
  carriedChangeItemText,
}) {
  const getClassName = () => {
    if (completed) {
      return 'completed';
    }

    if (editing) {
      return 'editing';
    }
  }

  const createdAgo = () => formatDistanceToNow(date, { includeSeconds: true, addSuffix: true })

  const [creationTime, setCreationTime] = useState(createdAgo());

  useEffect(() => {
    const updater = setInterval(() => setCreationTime(createdAgo()), 10000);
    return () => clearInterval(updater);
  })

  return (
    <li className={getClassName()}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} onChange={onToggleCompleted} />
        <label>
          <span className="description">{text}</span>
          <span className="created">created {creationTime}</span>
        </label>
        <button className="icon icon-edit" onClick={onToggleEditing} />
        <button className="icon icon-destroy" onClick={onDeleted} />
      </div>
      {editing && (
        <EditField onToggleEditing={onToggleEditing} carriedChangeItemText={carriedChangeItemText} text={text} />
      )}
    </li>
  );
}

Task.propTypes = {
  completed: PropTypes.bool,
  editing: PropTypes.bool,
  date: PropTypes.object,
  onToggleCompleted: PropTypes.func,
  onDeleted: PropTypes.func,
}

Task.defaultProps = {
  completed: false,
  editing: false,
  date: new Date(),
  onToggleCompleted() {},
  onDeleted() {},
}

export default Task;
