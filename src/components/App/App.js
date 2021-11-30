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
      this.createItem( 'Active task' ),
    ],
  };

  createItem ( text ) {
    return {
      text,
      id: this.todoDataCount++,
      completed: false,
      editing: false,
      visible: true,
    };
  }

  addItem = ( text ) => {
    this.setState(({todoData}) => {
      return {
        todoData: [...todoData, this.createItem(text)],
      };
    });
  };

  changeProperty = (id, text) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.map(item => {
          if (item.id === id) {
            return {...item, text}
          }
          return item;
        }),
      };
    });
  };

  carry (func) {
    return function carried(...args) {
      if (args.length >= func.length) return func.apply(this, args);
      return function(...args2) {
        return carried.apply(this, [...args, ...args2]);
      };
    };
  };

  toggleProperty(arr, id, propName) {
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

  filterItems = ( button ) => {
    const actionButtons = {
      all: item => ({...item, visible: true}),
      active: item => ({...item, visible: !item.completed && !item.editing && true}),
      completed: item => ({...item, visible: item.completed && true}),
    }
    
    this.setState(({todoData}) => {
      return {
        todoData: todoData.map(actionButtons[button]),
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
            carriedChangeItemText = { this.carry(this.changeProperty) }
          />
          <Footer onFiltered = { this.filterItems }
                  deleteItem = { this.deleteItem }
                  todoData = { this.state.todoData }
          />
        </section>
      </section>
    );
  };
};