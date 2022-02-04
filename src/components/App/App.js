import React, { useState } from 'react';

import carry from '../../utils/carry';
import UUID from '../../utils/UUID';

import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default function App() {

  const createItem = text => {
    return {
      text,
      id: UUID(),
      completed: false,
      editing: false,
      visible: true,
    };
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
      </section>
    </section>
  );
};