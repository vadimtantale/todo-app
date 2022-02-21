import React from 'react';
import PropTypes from 'prop-types';

import NewTaskForm from '../NewTaskForm';

import './Header.css';

function Header({ onAdded }) {
  return (
    <header className="header">
      <h1>todos</h1>
      <NewTaskForm onAdded={onAdded} />
    </header>
  );
}

Header.propTypes = {
  onAdded: PropTypes.func,
}

export default Header;
