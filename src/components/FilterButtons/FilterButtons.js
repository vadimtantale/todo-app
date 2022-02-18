import React from "react";
import PropTypes from 'prop-types';

import './FilterButtons.css';

function FilterButtons({ value, selected, onToggleFilter }) {

  const getClassName = () => {
    return selected ? 'selected' : '';
  }

  return (
    <li>
      <button onClick={onToggleFilter}
        className={getClassName()}>
        {value}
      </button>
    </li>
  );
};

FilterButtons.propTypes = {
  value: PropTypes.string,
  selected: PropTypes.bool,
  onToggleFilter: PropTypes.func,
}

export default FilterButtons;
