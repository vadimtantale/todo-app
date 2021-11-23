import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {
  todoDataCount = 1;

  state = {
    todoData: [
      this.createItem( 'Completed task' ),
      { text: 'Editing task', id: this.todoDataCount++, completed: false, editing: true },
      this.createItem( 'Active task' ),
    ],
  };

  createItem(text) {
    return {
      text,
      id: this.todoDataCount++,
      completed: false,
      editing: false,
    };
  }

  addItem( text ) {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, this.createItem(text)],
      };
    });
  };

  toggleProperty(arr, id, propName) {
    console.log()
    return arr.map( item => {
        if (id === item.id) {
          return { ...item, [propName]: !item[propName] };
        }
        return item;
      });
  };

  onToggleCompleted = ( id ) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'completed') };
    });
  };

  onToggleEditing = ( id ) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'editing') };
    });
  };

  deleteItem = ( id ) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter(item => item.id !== id),
      };
    });
  };

  render() {
    return (
      <section className = 'todoapp'>
        <Header onAdded = { this.addItem } />
        <section className='main'>
          <TaskList
            todoData = { this.state.todoData }
            onToggleCompleted = { this.onToggleCompleted }
            onDeleted = { this.deleteItem }
            onToggleEditing = { this.onToggleEditing }
          />
          <Footer />
        </section>
      </section>
    );
  };
};