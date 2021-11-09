import React from 'react';

import './App.css';
import Header from '../Header';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import Footer from '../Footer';

export default function App() {
  const todoData = [
    {text: 'Completed task', id: 1, flag: 'completed'},
    {text: 'Editing task', id: 2, flag: 'editing'},
    {text: 'Active task', id: 3, flag: null},
  ];

  return (
    <div>
      <Header />
      <NewTaskForm />
      <TaskList todoData={todoData} />
      <Footer />
    </div>
  );
};