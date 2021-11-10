import React from 'react';

import './App.css';
import Header from '../Header';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default function App() {
  const todoData = [
    {text: 'Completed task', id: 1, flag: 'completed'},
    {text: 'Editing task', id: 2, flag: 'editing'},
    {text: 'Active task', id: 3, flag: null},
  ];

  return (
    <section className='todoapp'>
      <Header />
      <section className='main'>
        <TaskList todoData={todoData} />
        <Footer />
      </section>
    </section>
  );
};