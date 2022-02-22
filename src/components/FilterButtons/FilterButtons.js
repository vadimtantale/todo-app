import React from 'react'
import PropTypes from 'prop-types'

import './FilterButtons.css'

function FilterButtons({ value, selected, onToggleFilter }) {
  const getClassName = () => (selected ? 'selected' : '')

  return (
    <li>
      <button onClick={onToggleFilter} className={getClassName()}>
        {value}
      </button>
    </li>
  )
}

FilterButtons.propTypes = {
  value: PropTypes.string,
  selected: PropTypes.bool,
  onToggleFilter: PropTypes.func,
}

FilterButtons.defaultProps = {
  value: 'Some button',
  selected: false,
  onToggleFilter() {},
}

export default FilterButtons
