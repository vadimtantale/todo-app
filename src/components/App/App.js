import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

import carry from '../../utils/carry';

export default class App extends Component {
  todoDataCount = 1;

  state = {
    todoData: [
      this.createItem('Finish the app'),
      this.createItem('Send it to Artem'),
    ],
    buttonData: [
      { id: 'all', value: 'All', selected: true },
      { id: 'active', value: 'Active', selected: false },
      { id: 'completed', value: 'Completed', selected: false },
    ],
  };

  createItem(text) {
    return {
      text,
      id: this.todoDataCount++,
      completed: false,
      editing: false,
      date: new Date(),
    };
  }

  addItem = (text) => {
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData, this.createItem(text)],
      };
    });
  };

  changeProperty = (id, text) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map(item => {
          if (item.id === id) {
            return { ...item, text }
          }
          return item;
        }),
      };
    });
  };

  toggleProperty(arr, id, propName) {
    return arr.map(item => {
      if (id === item.id) {
        return { ...item, [propName]: !item[propName] };
      }
      return item;
    });
  };

  onToggleCompleted = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'completed') };
    });
  };

  onToggleEditing = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, 'editing') };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      return {
        todoData: todoData.filter(item => item.id !== id),
      };
    });
  };

  onFilterButton = id => {
    this.setState(({ buttonData }) => {
      return {
        buttonData: buttonData.map(item => {
          return { ...item, selected: id === item.id ? true : false }
        }),
      };
    });
  };

  render() {
    return (
      <section className='todoapp'>
        <Header onAdded={this.addItem} />
        <section className='main'>
          <TaskList
            todoData={this.state.todoData}
            onToggleCompleted={this.onToggleCompleted}
            onDeleted={this.deleteItem}
            onToggleEditing={this.onToggleEditing}
            carriedChangeItemText={carry(this.changeProperty)}
            buttonData={this.state.buttonData}
          />
          <Footer onFiltered={this.onFilterButton}
            deleteItem={this.deleteItem}
            todoData={this.state.todoData}
            buttonData={this.state.buttonData}
          />
        </section>
      </section>
    );
  };
};