import React, {useState} from 'react';

import carry from '../../utils/carry';
import UUID from '../../utils/UUID';

import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default function App() {

  const [state, setState] = useState([
    createItem( 'First task' ),
    createItem( 'Second task' ),
  ]);

  function createItem ( text ) {
    return {
      text,
      id: UUID(),
      completed: false,
      editing: false,
      visible: true,
    };
  };
  
  const addItem = text => {
    setState(state => {
      return [...state, createItem(text)];
    });
  };

  const changeProperty = (id, text) => {
    setState(state => {
      return state.map(item => {
        if (item.id === id) {
          return {...item, text}
        }
        return item;
      });
    });
  };

  const toggleProperty = (arr, id, propName) => {
    return arr.map( item => {
      if (id === item.id) {
        return { ...item, [propName]: !item[propName] };
      }
      return item;
    });
  };

  const onToggleCompleted = id => {
    setState(state => toggleProperty(state, id, 'completed'));
  };

  const onToggleEditing = id => {
    setState(state => toggleProperty(state, id, 'editing'));
  };

  const deleteItem = id => {
    setState(state => state.filter(item => item.id !== id));
  };

  const filterItems = button => {
    const actionButtons = {
      all: item => ({...item, visible: true}),
      active: item => ({...item, visible: !item.completed && !item.editing && true}),
      completed: item => ({...item, visible: item.completed && true}),
    }
    
    setState(state => state.map(actionButtons[button]));
  };

    
  return (
    <section className = 'todoapp'>
      <Header onAdded = { addItem } />
      <section className='main'>
        <TaskList
          todoData = { state }
          onToggleCompleted = { onToggleCompleted }
          onDeleted = { deleteItem }
          onToggleEditing = { onToggleEditing }
          carriedChangeItemText = { carry(changeProperty) }
        />
        <Footer onFiltered = { filterItems }
                deleteItem = { deleteItem }
                todoData = { state }
        />
      </section>
    </section>
  );
};