import React from "react";
import PropTypes from 'prop-types';

import TasksFilter from "../TasksFilter/TasksFilter";

import './Footer.css';

function Footer({ onFiltered, deleteItem, todoData, buttonData }) {

  const clearCompleted = (todoData) => {
    todoData.forEach(item => {
      item.completed && deleteItem(item.id);
    });
  };

  const countActiveTask = todoData.reduce((acc, item) => {
    if (item.completed) return acc;
    return ++acc;
  }, 0);

  return (
    <footer className="footer">
      <span className="todo-count">{countActiveTask} items left</span>
      <TasksFilter onFiltered={onFiltered}
        buttonData={buttonData}
      />
      <button className="clear-completed"
        onClick={() => clearCompleted(todoData)}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  deleteItem: PropTypes.func,
  todoData: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.number,
    completed: PropTypes.bool,
    editing: PropTypes.bool,
    date: PropTypes.object,
  })),
};

Footer.defaultProps = {
  deleteItem() { },
  todoData: [],
}

export default Footer;