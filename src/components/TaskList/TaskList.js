import React from 'react'
import PropTypes from 'prop-types'

import './TaskList.css'
import Task from '../Task'

function TaskList({ todoData, onToggleCompleted, onDeleted, onToggleEditing, carriedChangeItemText, buttonData }) {
  const filterCallback = () => {
    const selectedButton = buttonData.filter((i) => i.selected).reduce((acc, i) => acc + i.id, '')
    const callbacks = {
      all: () => true,
      active: (item) => !item.completed,
      completed: (item) => item.completed,
    }
    return callbacks[selectedButton]
  }

  const todos = todoData.filter(filterCallback()).map((item) => {
    const { id, ...rest } = item

    return (
      <Task
        {...rest}
        key={id}
        onToggleCompleted={() => onToggleCompleted(id)}
        onDeleted={() => onDeleted(id)}
        onToggleEditing={() => onToggleEditing(id)}
        carriedChangeItemText={carriedChangeItemText(id)}
      />
    )
  })
  return <ul className="todo-list">{todos}</ul>
}

TaskList.propTypes = {
  todoData: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      id: PropTypes.number,
      completed: PropTypes.bool,
      editing: PropTypes.bool,
      date: PropTypes.object,
    })
  ),
  buttonData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.string,
      selected: PropTypes.bool,
    })
  ),
}

TaskList.defaultProps = {
  todoData: [],
  buttonData: [],
}

export default TaskList
