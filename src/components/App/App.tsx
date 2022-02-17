import React, { useState } from 'react';

import carry from '../../utils/carry';
import UUID from '../../utils/UUID';

import './App.css';

import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

import {Todo, Button} from '../../types';


export default function App() {

  const createItem = (title: string) => {
    return {
      title,
      id: UUID(),
      completed: false,
      editing: false,
    };
  };

  const [tasks, setTasks] = useState<Todo[]>([
    createItem('First task'),
    createItem('Second task'),
  ]);

  const [buttons, setButtons] = useState<Button[]>([
    { id: 'all', value: 'All', selected: true },
    { id: 'active', value: 'Active', selected: false },
    { id: 'completed', value: 'Completed', selected: false },
  ]);

  const addTask = (title: string) => {
    setTasks(state => {
      return [...state, createItem(title)];
    });
  };

  const changeTaskTitle = (id: string, value: string) => {
    setTasks(state => {
      return state.map(item => {
        if (item.id === id) {
          return { ...item, title: value }
        }
        return item;
      });
    });
  };

  const propertyToggler = (propName: 'completed' | 'editing', id: string) => {
    setTasks(state => {
      return state.map(item => {
        if (id === item.id) {
          return { ...item, [propName]: !item[propName] };
        }
        return item;
      });
    });
  };

  const completedToggler = propertyToggler.bind(null, 'completed');
  // (id: string) => {
    //   setTasks(state => propertyToggler(state, id, 'completed'));
    // };
    
  const editingToggler = propertyToggler.bind(null, 'editing');
  // const onToggleEditing = (id: string) => {
  //   setTasks(state => propertyToggler(state, id, 'editing'));
  // };

  const deleteItem = (id: string) => {
    setTasks(state => state.filter(item => item.id !== id));
  };

  return (
    <section className='todoapp'>
      <Header onAdd={addTask} />
      <section className='main'>
        <TaskList
          todoData={tasks}
          onToggleCompleted={completedToggler}
          onDeleted={deleteItem}
          onToggleEditing={editingToggler}
          carriedChangeTaskTitle={carry(changeTaskTitle)}
          buttons={buttons}
        />
        <Footer
          deleteItem={deleteItem}
          todoData={tasks}
          buttons={buttons}
          setButtons={setButtons}
        />
      </section>
    </section>
  );
};