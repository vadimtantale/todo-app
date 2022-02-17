import React, { useState } from 'react';

import carry from '../../utils/carry';
import UUID from '../../utils/UUID';

import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

<<<<<<< Updated upstream
export default function App() {

  const createItem = text => {
=======
export default class App extends Component {
  todoDataCount = 1;

  state = {
    todoData: [
      this.createItem('Completed task'),
      this.createItem('Active task'),
    ],
  };

  createItem(text) {
>>>>>>> Stashed changes
    return {
      text,
      id: UUID(),
      completed: false,
      editing: false,
      visible: true,
    };
<<<<<<< Updated upstream
  };

  const [tasks, setTasks] = useState([
    createItem('First task'),
    createItem('Second task'),
  ]);

  const [buttons, setButtons] = useState([
    { id: 'all', value: 'All', selected: true },
    { id: 'active', value: 'Active', selected: false },
    { id: 'completed', value: 'Completed', selected: false },
  ]);

  const addItem = text => {
    setTasks(state => {
      return [...state, createItem(text)];
    });
  };

  const changeItemText = (id, value) => {
    setTasks(state => {
      return state.map(item => {
        if (item.id === id) {
          return { ...item, text: value }
        }
        return item;
      });
    });
  };

  const toggleProperty = (arr, id, propName) => {
    return arr.map(item => {
      if (id === item.id) {
        return { ...item, [propName]: !item[propName] };
      }
      return item;
    });
  };

  const onToggleCompleted = id => {
    setTasks(state => toggleProperty(state, id, 'completed'));
  };

  const onToggleEditing = id => {
    setTasks(state => toggleProperty(state, id, 'editing'));
  };

  const deleteItem = id => {
    setTasks(state => state.filter(item => item.id !== id));
  };

  return (
    <section className='todoapp'>
      <Header onAdded={addItem} />
      <section className='main'>
        <TaskList
          todoData={tasks}
          onToggleCompleted={onToggleCompleted}
          onDeleted={deleteItem}
          onToggleEditing={onToggleEditing}
          carriedChangeItemText={carry(changeItemText)}
          buttons={buttons}
        />
        <Footer
          deleteItem={deleteItem}
          todoData={tasks}
          buttons={buttons}
          setButtons={setButtons}
        />
=======
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

  carry(func) {
    return function carried(...args) {
      if (args.length >= func.length) return func.apply(this, args);
      return function (...args2) {
        return carried.apply(this, [...args, ...args2]);
      };
    };
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

  filterItems = (button) => {
    const actionButtons = {
      all: item => ({ ...item, visible: true }),
      active: item => ({ ...item, visible: !item.completed && !item.editing && true }),
      completed: item => ({ ...item, visible: item.completed && true }),
    }

    this.setState(({ todoData }) => {
      return {
        todoData: todoData.map(actionButtons[button]),
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
            carriedChangeItemText={this.carry(this.changeProperty)}
          />
          <Footer onFiltered={this.filterItems}
            deleteItem={this.deleteItem}
            todoData={this.state.todoData}
          />
        </section>
>>>>>>> Stashed changes
      </section>
    </section>
  );
};