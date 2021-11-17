import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default class App extends Component {
  todoDataCount = 1;

  state = {
    todoData: [
      {text: 'Completed task', id: this.todoDataCount++, flag: null},
      {text: 'Editing task', id: this.todoDataCount++, flag: 'editing'},
      {text: 'Active task', id: this.todoDataCount++, flag: null},
    ],
  };

  changeProperties = (id, obj) => {
    if (id === obj.id) {
      return {...obj, flag: obj.flag === null ? 'completed' : null}
    }

    return obj;
  }

  changeData = (id) => {
    this.setState(({todoData}) => {
      return {todoData: todoData.map(item => {
                return this.changeProperties(id, item);
              }),
      };
    });
  };

  deleteData = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData: todoData.filter(item => item.id !== id),
      };
    });
  };

  render() {
    return (
      <section className='todoapp'>
        <Header />
        <section className='main'>
          <TaskList
            todoData={this.state.todoData}
            onChanged={this.changeData}
            onDeleted={this.deleteData} />
          <Footer />
        </section>
      </section>
    );
  };
};